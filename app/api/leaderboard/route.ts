import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const period = req.nextUrl.searchParams.get("period") || "all";

  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    let query = {};
    if (period === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      query = { createdAt: { $gte: oneWeekAgo } };
    }

    const leaderboard = await usersCollection
      .find(query)
      .sort({ knowledgeScore: -1, streakCount: -1, shells: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Failed to get leaderboard:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
