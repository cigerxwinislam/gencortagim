



import { connectMongoDB } from "../../../../lib/mongodb";

import Esnaf from '../../../models/esnaf'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await Esnaf.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "Esnaf kaydı yapıldı." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Esnaf kaydında hata." },
      { status: 500 }
    );
  }
}
