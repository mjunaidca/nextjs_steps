import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({
        From: "MJS",
        Message: "Greetings from PANAVERSE",
        RequestType: "GET"
    });
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    if (req.name) {
        return NextResponse.json({
            To: "MJS",
            Message: "All well here",
            RequestType: "POST"
        });
    }
    else {
        return new NextResponse('Please include your name in the POST request');
    }
}

export async function PUT(request: NextRequest) {
    const req = await request.json();
    if (req.name) {
        return NextResponse.json({
            To: "MJS",
            Message: "This is a updated greeting",
            RequestType: "PUT"
        });
    }
    else {
        return new NextResponse('Please include your name in the PUT request');
    }
}

export async function DELETE(request: NextRequest) {
    const req = await request.json();
    if (req.name) {
        return NextResponse.json({
            To: "MJS",
            Message: "I have deleted the greetings",
            RequestType: "DELETE"
        });
    }
    else {
        return new NextResponse('Please include your name in the DELETE request');
    }
}

