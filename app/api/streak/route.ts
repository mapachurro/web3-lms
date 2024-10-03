import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const { userId, streakCount } = await req.json();

  if (!userId) {
    return new Response(JSON.stringify({ error: "User Id is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    // Update the user's streak count
    const result = await usersCollection.updateOne(
      { id: userId },
      { $set: { streakCount } }
    );

    return NextResponse.json(
      { message: "Streak updated successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating streak:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
