import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const res = await fetch(`${process.env.BASE_URL}/recommends/order/${id}`);
    const data = await res.json();
    
    return NextResponse.json(data);
}