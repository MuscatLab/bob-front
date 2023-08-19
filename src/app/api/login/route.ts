import { NextResponse } from "next/server";

export async function POST(body: any) {
  const res = await fetch(`${process.env.BASE_URL}/members/sign-in`, {
    method: "POST",
    body: body,
  });
  const data = await res.json();

  return NextResponse.json(data);
}

export const runtime = "edge";
