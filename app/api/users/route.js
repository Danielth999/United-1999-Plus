import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (Request) => {
  try {
    const users = await prisma.user.findMany();

    return Response.json({ users }, { status: 200 });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
};
