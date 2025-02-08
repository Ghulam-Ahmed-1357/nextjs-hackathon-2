import { NextResponse } from "next/server";
import client from "@/sanity/lib/client";
import bcrypt from "bcryptjs"; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
