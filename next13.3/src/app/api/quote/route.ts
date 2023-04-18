import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const res = await fetch("https://api.quotable.io/random?tags=technology");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return new Response(data)
}
