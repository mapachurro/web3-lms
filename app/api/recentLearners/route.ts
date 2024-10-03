import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const recentLearners = await usersCollection
      .find({ isNewbie: true })
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(recentLearners);
  } catch (error) {
    console.error("Failed to get recent learners:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
