import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const id = params.id;

    const ordenActualizada = await prisma.orden.delete({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json(ordenActualizada);
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
