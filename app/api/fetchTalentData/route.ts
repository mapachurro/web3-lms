import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const walletAddress = searchParams.get("walletAddress");

  if (!walletAddress) {
    return NextResponse.json(
      { error: "Wallet address is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.X_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API Key is not set" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.talentprotocol.com/api/v2/passports/${walletAddress}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apiKey,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 403) {
        return NextResponse.json(
          { error: "API key does not have sufficient permissions" },
          { status: 403 }
        );
      }
      return NextResponse.json(
        { error: errorData.error || "Failed to fetch talent data" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Data from Talent Protocol API:", data); // Log the data
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching talent data:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
