import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await fetch(`${process.env.BASE_URL}/members/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(await request.json()),
  });
  const data = await res.json();

  if (res.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: data}, { status: data.status });
  }
}

export const runtime = "edge";
