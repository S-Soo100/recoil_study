import { demo1 } from "@/demo/demo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(demo1);
}
export async function FETCH(request: Request) {
  return NextResponse.json(demo1);
}
