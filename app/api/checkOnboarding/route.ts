import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const { id } = await req.json();

    const existingUser = await usersCollection.findOne({ id: id });
    const userExists = !!existingUser;

    if (userExists) {
      return NextResponse.json(
        {
          userExists: true,
          onboardingCompleted: existingUser.onboardingCompleted || false,
          onboardingStep: existingUser.onboardingStep || 0,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ userExists: false }, { status: 200 });
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
