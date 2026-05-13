import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, enquiry, message } = body;

    // Basic validation
    if (!name || !email || !enquiry || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Split full name into first and last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    // Build custom fields payload
    const customFields = [
      {
        id: process.env.GHL_CF_ENQUIRY!,
        value: enquiry,
      },
      {
        id: process.env.GHL_CF_MESSAGE!,
        value: message,
      },
    ];

    // Send data to GoHighLevel
    const ghlResponse = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationId: process.env.GHL_LOCATION_ID,
          firstName,
          lastName,
          email,
          tags: ["Website Inquiry"],
          source: "Next.js Website",
          customFields,
        }),
      }
    );

    const data = await ghlResponse.json();

    if (!ghlResponse.ok) {
      console.error("GoHighLevel Error:", data);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send to GoHighLevel.",
          error: data,
        },
        { status: ghlResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      data,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}