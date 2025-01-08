import fs from 'fs'
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // req.body is a ReadableStream, so we need to convert it to a string
  const res = await req.json()
  const body = JSON.stringify(res)
  const filePath = path.join(process.cwd(), '/app/api/cart/cart.json');
  fs.writeFileSync(filePath, body)
  return NextResponse.json({ success: true }, { status: 201 })
}

export async function GET() {
  const filePath = path.join(process.cwd(), '/app/api/cart/cart.json');
   const cart = fs.readFileSync(filePath, 'utf-8')
   return NextResponse.json(JSON.parse(cart))
}