"use server";

import { db } from "./db";
import { users } from "./schema";

export async function getUsers() {
  return await db.select().from(users);
}
