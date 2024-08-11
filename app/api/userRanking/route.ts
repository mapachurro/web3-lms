import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  const period = req.nextUrl.searchParams.get("period") || "all";

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

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

    const userRank = await usersCollection
      .aggregate([
        { $match: query },
        { $sort: { knowledgeScore: -1, streakCount: -1, shells: -1 } },
        { $group: { _id: null, users: { $push: "$$ROOT" } } },
        { $unwind: { path: "$users", includeArrayIndex: "rank" } },
        { $match: { "users.id": userId } },
        { $project: { _id: 0, rank: { $add: ["$rank", 1] }, user: "$users" } },
      ])
      .toArray();

    if (userRank.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userRank[0]);
  } catch (error) {
    console.error("Failed to get user ranking:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
