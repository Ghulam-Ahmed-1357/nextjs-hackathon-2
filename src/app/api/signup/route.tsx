/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import  client  from "@/sanity/lib/client"; 
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; 

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id, email }, SECRET_KEY, { expiresIn: "7d" });

    const response = NextResponse.json(
      { message: "User created", user: { name: user.name, email: user.email, _id: user._id } }, 
      { status: 201 }
    );

    response.cookies.set("authToken", token, { httpOnly: true, secure: true, path: "/" });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
