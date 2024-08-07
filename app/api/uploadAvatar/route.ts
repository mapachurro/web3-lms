import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const image = formData.get("image") as File;
  const userId = formData.get("userId") as string;

  if (!image || !userId) {
    return NextResponse.json(
      { success: false, message: "Image or user ID not provided" },
      { status: 400 }
    );
  }

  try {
    // Upload to Imgur
    const imgurResponse = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      },
      body: formData,
    });

    const imgurData = await imgurResponse.json();

    if (!imgurData.success) {
      throw new Error(imgurData.data.error);
    }

    const avatarUrl = imgurData.data.link;

    // Update user in MongoDB
    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    await usersCollection.updateOne(
      { id: userId },
      { $set: { avatar: avatarUrl } }
    );

    return NextResponse.json({ success: true, avatarUrl });
  } catch (error) {
    console.error("Error uploading avatar:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload avatar" },
      { status: 500 }
    );
  }
}
