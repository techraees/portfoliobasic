import { NextRequest, NextResponse } from "next/server";
import DB from "@/utils/db";
import CategoryModel from "@/models/categoryModel";

export async function GET(req) {
  await DB();

  const data = await CategoryModel.find();
  // const data = await UserModel.create({
  //   email: "techraees786@gmail.com",
  //   name: "Rana Raees",
  //   role: "ADMIN",
  // });
  return NextResponse.json({ data }, { status: 200 });
}
