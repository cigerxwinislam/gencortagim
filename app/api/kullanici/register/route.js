import { connectMongoDB } from "../../../lib/mongodb";
import Kullanici from  "../../kullanici/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await Kullanici.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "Kullanici kayıt oldu" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Kayıt olmadı ." },
      { status: 500 }
    );
  }
}
