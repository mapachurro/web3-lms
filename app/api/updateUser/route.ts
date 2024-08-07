import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function PUT(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    const formData = await req.json();

    // Ensure we have a user ID
    if (!formData.id) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    // Update user data
    const result = await usersCollection.updateOne(
      { id: formData.id },
      {
        $set: {
          name: formData.name,
          bio: formData.bio,
          avatar: formData.avatar,
          socials: formData.socials,
        },
      },
      { upsert: true } // This will create a new document if it doesn't exist
    );

    if (result.matchedCount > 0 || result.upsertedCount > 0) {
      // Fetch the updated user data
      const updatedUser = await usersCollection.findOne({ id: formData.id });
      return NextResponse.json({ success: true, user: updatedUser });
    } else {
      throw new Error("Failed to update user");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update user" },
      { status: 500 }
    );
  }
}
