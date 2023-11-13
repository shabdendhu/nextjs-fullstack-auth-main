import { NextResponse, NextRequest } from "next/server";
import { Connection } from "@/dbConfig/connection";
import ProductSuggestion from "@/models/productSuggestion";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const savedProductsuggestion = await ProductSuggestion.save();
    return NextResponse.json({
      data: savedProductsuggestion,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function GET(req, res) {
  try {
    const productSuggestion = await ProductSuggestion.find();
    return NextResponse.json({
      data: productSuggestion,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
