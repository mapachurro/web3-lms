import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User Id is required" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const user = await usersCollection.findOne({ id: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      streakCount: user.streakCount || 0,
      lastGMDate: user.lastGMDate || null,
    });
  } catch (error) {
    console.error("Error fetching streak:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "User Id is required" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const now = new Date();
    const utcNow = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    );

    const user = await usersCollection.findOne({ id: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const lastGMDate = user.lastGMDate ? new Date(user.lastGMDate) : null;
    const utcLastGM = lastGMDate
      ? new Date(
          Date.UTC(
            lastGMDate.getUTCFullYear(),
            lastGMDate.getUTCMonth(),
            lastGMDate.getUTCDate()
          )
        )
      : null;

    let newStreakCount;

    if (!utcLastGM || utcNow > utcLastGM) {
      if (!utcLastGM || utcNow.getTime() - utcLastGM.getTime() > 86400000) {
        newStreakCount = 1;
      } else {
        newStreakCount = (user.streakCount || 0) + 1;
      }

      await usersCollection.updateOne(
        { id: userId },
        { $set: { streakCount: newStreakCount, lastGMDate: utcNow } }
      );

      return NextResponse.json({ newStreakCount });
    } else {
      return NextResponse.json(
        { error: "GM already clicked today" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error updating streak:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
