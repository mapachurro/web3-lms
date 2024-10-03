import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const { id, onboardingStep } = await req.json();

    await usersCollection.updateOne(
      { id: id },
      { $set: { onboardingStep: onboardingStep } },
      { upsert: true }
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating onboarding step:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
