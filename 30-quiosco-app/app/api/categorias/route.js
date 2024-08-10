import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });

  return NextResponse.json(categorias);
}
