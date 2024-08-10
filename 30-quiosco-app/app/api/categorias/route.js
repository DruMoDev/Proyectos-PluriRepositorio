import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });

  return NextResponse.json(categorias);
}
