import { prisma } from "./prisma";
import { getServerSession } from "next-auth";

export async function getUser() {
  const session = await getServerSession()
  const user = await prisma.user.findUnique({
    where: {email: session?.user?.email ?? ""}
  })
  return user;
}