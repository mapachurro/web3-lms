import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { PartialUserData } from "@/types/user";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const {
      id,
      answers,
      category,
      knowledgeScore,
      selectedSurfboard,
      onboardingCompleted,
    } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "User Id is required" },
        { status: 400 }
      );
    }

    const familiarityLevel = parseInt(answers["familiarity"]);
    const userProfile: PartialUserData = {
      answers,
      category,
      knowledgeScore,
      selectedSurfboard,
      shells: 10,
      createdAt: new Date(),
      onboardingCompleted: onboardingCompleted || false,
    };

    // Add a flag for total newbies
    if (familiarityLevel === 1) {
      userProfile.isNewbie = true;
    }

    const existingUser = await db.collection("learners").findOne({ id: id });

    if (existingUser) {
      // If the user exists, update their profile
      await db
        .collection("learners")
        .updateOne({ id: id }, { $set: userProfile });
    } else {
      // If the user doesn't exist, insert a new document
      await db.collection("learners").insertOne({
        id: id,
        ...userProfile,
        createdAt: new Date(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in onboarding API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
