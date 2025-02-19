import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const days = searchParams.get("days");

  if (!city) {
    return NextResponse.json(
      { error: "Missing city parameter" },
      { status: 400 }
    );
  }

  if (!days || days === "0") {
    return NextResponse.json(
      { error: "Missing day parameter" },
      { status: 400 }
    );
  }

  try {
    const backendResponse = await axios.get(
      `${process.env.BASE_API_URL}/weather/average`,
      {
        params: { city, days },
      }
    );
    return NextResponse.json(backendResponse.data.avgTempString);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
