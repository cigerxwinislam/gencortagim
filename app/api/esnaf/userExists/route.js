



import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";

import Esnaf from '../../../lib/models/esnaf'
export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await Esnaf.findOne({ email }).select("_id");
    console.log("Esnaf: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
