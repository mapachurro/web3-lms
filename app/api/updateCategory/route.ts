import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const {
    id,
    category,
    onboardingCompleted,
    knowledgeCheckAnswer,
    knowledgeCheckCorrect,
    knowledgeScore,
  } = await req.json();

  if (!id) {
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

    await usersCollection.updateOne(
      { id: id },
      {
        $set: {
          category,
          onboardingCompleted,
          knowledgeCheckAnswer,
          knowledgeCheckCorrect,
          knowledgeScore,
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating user category:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
