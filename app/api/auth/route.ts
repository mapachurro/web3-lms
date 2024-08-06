import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    console.log("database: ", db);
    const usersCollection = db.collection("learners");

    const body = await req.json();

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ id: body.id });
    if (existingUser) {
      console.log(`User with id ${body.id} already exists`);
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Insert the new user
    const result = await usersCollection.insertOne({ ...body, streakCount: 0 });
    console.log(`User with id ${body.id} registered successfully`);

    return NextResponse.json(
      { message: "User registered successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
