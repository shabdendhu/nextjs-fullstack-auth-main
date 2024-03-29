import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/connection";
import Product from "@/models/productModel";

connect();

export async function POST(req) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({
        error: "Please provide a search query",
        data: [],
        success: false,
      });
    }

    // Search for products by name, description, tags, or category name/id
    const products = await Product.find(
      {
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive search for product name
          { description: { $regex: query, $options: "i" } }, // Case-insensitive search for product description
          { tags: { $in: [query] } }, // Search for products with matching tags
        ],
      },
      { _id: 1, name: 1, images: 1, price: 1 }
    ).limit(10); // Limit the results to the first 10 products

    return NextResponse.json({
      data: products,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error searching for products",
      error,
      success: false,
    });
  }
}
