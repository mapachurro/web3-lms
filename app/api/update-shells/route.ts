import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const { userId, shellsToAdd } = await request.json();

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

    // Check if user exists
    const existingUser = await usersCollection.findOne({ id: userId });

    if (!existingUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await usersCollection.findOneAndUpdate(
      { id: userId },
      { $inc: { shells: shellsToAdd } },
      { returnDocument: "after" }
    );

    if (!result) {
      // No document was found or updated
      return new Response(
        JSON.stringify({ error: "User not found or update failed" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return NextResponse.json({
      success: true,
      totalShells: result.shells,
    });
  } catch (error) {
    console.error("Error updating user shells:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
