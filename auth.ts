import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db/db";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { accounts, sessions, users } from "./db/schema";

export const { auth, handlers, signIn } = NextAuth({
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
});
