import { NextRequest, NextResponse } from "next/server";
import { PrivyClient } from "@privy-io/server-auth";
import clientPromise from "@/lib/mongodb";

export async function DELETE(request: NextRequest) {
  try {
    const { userId, privyAppId, privyAppSecret } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    if (!privyAppId && !privyAppSecret) {
      return NextResponse.json(
        { message: "Privy Credentials are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("edtech");
    const usersCollection = db.collection("learners");

    // Delete user from your database
    const result = await usersCollection.deleteOne({ id: userId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Initialize Privy client
    const privyClient = new PrivyClient(privyAppId, privyAppSecret);

    // Delete user from Privy
    await privyClient.deleteUser(userId);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Error deleting user" },
      { status: 500 }
    );
  }
}
