import { prisma } from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';


export async function GET() {
    const productos = await prisma.producto.findMany();
    console.log(productos);
    

    return NextResponse.json(productos)
}