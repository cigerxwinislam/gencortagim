// Bismillahirahmanirahim



import { connectMongoDB } from "../../../../lib/mongodb";

import Ilan from '../../../models/Ilan'
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, telno } = await req.json();
    await connectMongoDB();
    await Ilan.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}



