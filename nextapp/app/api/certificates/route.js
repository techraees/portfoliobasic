import { NextRequest, NextResponse } from "next/server";
import DB from "@/utils/db";
import UserModel from "@/models/userModel";

export async function GET(req) {
  try {
    await DB();

    const data = await UserModel.find();
    // const data = await UserModel.create({
    //   email: "techraees786@gmail.com",
    //   name: "Rana Raees",
    //   role: "ADMIN",
    // });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data }, { status: 200 });
  }
}
