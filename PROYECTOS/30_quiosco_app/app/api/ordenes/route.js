import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });

  return NextResponse.json(ordenes);
}

export async function POST(req, res) {
  const prisma = new PrismaClient();

  const datos = await req.json();

  const orden = await prisma.orden.create({
    data: {
      nombre: datos.nombre,
      total: datos.total,
      pedido: datos.pedido,
      fecha: datos.fecha,
    },
  });

  return NextResponse.json(orden);
}
