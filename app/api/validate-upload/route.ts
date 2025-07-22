import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const correctPassword = process.env.SUE_UPLOAD_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: "Server misconfiguration: password not set." },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}