import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const { userId, talentData } = await req.json();

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

    // Check if the user already exists
    // const existingUser = await usersCollection.findOne({ id: userId });
    // if (existingUser) {
    //   console.log(`User with id ${userId} already exists`);
    //   return NextResponse.json(
    //     { message: "User already exists" },
    //     { status: 409 }
    //   );
    // }

    // Update the user's talent data
    const result = await usersCollection.updateOne(
      { id: userId },
      { $set: { talentData: talentData } }
    );

    return NextResponse.json(
      { message: "User talent data updated successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user talent data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
