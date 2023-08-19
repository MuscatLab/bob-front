import { NextResponse } from "next/server";

export async function GET(body: any) {
    const res = await fetch(`${process.env.BASE_URL}/receipt/1`, {
        body: body
    });
    const data = await res.json();
    
    return NextResponse.json(data);
}