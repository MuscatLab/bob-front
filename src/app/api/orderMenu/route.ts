import { NextResponse } from "next/server";

export async function GET(request: any) {
  const id = request.params.id;

  const res = await fetch(`${process.env.BASE_URL}/recommends/order/${id}`);
  const data = await res.json();

  return NextResponse.json(data);
}
