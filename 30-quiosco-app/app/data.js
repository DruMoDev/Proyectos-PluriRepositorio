import { prisma } from "@/prisma/prismaClient";

export const consultarDatos = async () => {
  

  const categorias = await prisma.categoria.findMany();

  return categorias;
};
