// Bismillahirahmanirahim



import { connectMongoDB } from "../../../../lib/mongodb";

import Ilan from '../../../models/Ilan'
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { Ilanadı,Telno ,Fiyat } = await req.json();
    await connectMongoDB();
    await Ilan.create({ Ilanadı, Telno, Fiyat});

    return NextResponse.json({ message: "ilan kaydedildi." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "ilan hatası ." },
      { status: 500 }
    );
  }
}



