import { NextRequest, NextResponse } from "next/server";
import DB from "@/utils/db";
import UserModel from "@/models/userModel";

export async function GET(req, { params }) {
  try {
    const data = await UserModel.findById(params.id);
    // const data = await UserModel.create({
    //   email: "techraees786@gmail.com",
    //   name: "Rana Raees",
    //   role: "ADMIN",
    // });
    return NextResponse.json({ data, params }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "Internal Server Error",error },
      { status: 500 }
    );
  }
  await DB();
}
