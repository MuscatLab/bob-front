import { NextResponse } from "next/server";

export async function POST(body: any) {
    const res = await fetch(`${process.env.BASE_URL}/paid/${body.id}`, {
        body: body.order
    });
    const data = await res.json();
    
    return NextResponse.json(data);
}

export const runtime = 'edge';