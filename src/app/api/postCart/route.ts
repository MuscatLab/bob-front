import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formerData = await request.json();

    const res = await fetch(`${process.env.BASE_URL}/payments/paid/${formerData.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            menus: formerData.order.menus,
            return_amount_type: formerData.order.mode
        })
    });
    const data = await res.json();
    
    if (res.ok) {
        return NextResponse.json(data);
    } else {
        return NextResponse.json({error: data}, {status: res.status});
    }
}

export const runtime = 'edge';