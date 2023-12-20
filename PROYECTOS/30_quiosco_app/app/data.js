import { PrismaClient } from "@prisma/client";

export const consultarDatos = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return categorias;
};
