import { demo1 } from "@/demo/demo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// pages/api/user.js

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // HTTP 메소드에 따른 조건 처리
  if (req.method === "GET") {
    // GET 요청일 때의 처리
    res.status(200).json(demo1);
  } else {
    // GET 이외의 요청에 대한 처리
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
