import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const password = body?.password;
    
    if (typeof password !== 'string') {
      return NextResponse.json(
        { error: "Password must be provided as a string." },
        { status: 400 }
      );
    }

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
    console.error("Password validation error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error." }, 
      { status: 500 });
  }
}