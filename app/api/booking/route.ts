import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, selectedSlot } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !selectedSlot) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Combine date and time into ISO format for Gym Master API
    const startTime = new Date(`${selectedSlot.date}T${selectedSlot.time}:00`).toISOString();

    // Prepare Gym Master API payload
    const gymMasterPayload = {
      firstName,
      lastName,
      email,
      phone,
      serviceId: process.env.GYMMASTER_SERVICE_ID || "PLACEHOLDER_SERVICE_ID", // Free Intro Session
      locationId: process.env.GYMMASTER_LOCATION_ID || "PLACEHOLDER_LOCATION_ID", // Kelowna location
      startTime,
      duration: 60, // 1 hour in minutes
    };

    // TODO: Uncomment when Gym Master API credentials are available
    /*
    const gymMasterResponse = await fetch(
      "https://www.gymmaster.com/gymmaster-api/portal-api/v1/booking/servicebookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GYMMASTER_API_KEY}`,
        },
        body: JSON.stringify(gymMasterPayload),
      }
    );

    if (!gymMasterResponse.ok) {
      const errorData = await gymMasterResponse.json();
      console.error("Gym Master API error:", errorData);
      return NextResponse.json(
        { error: "Failed to create booking" },
        { status: 500 }
      );
    }

    const bookingData = await gymMasterResponse.json();
    */

    // For now, log the booking and return success
    console.log("Booking received:", {
      ...gymMasterPayload,
      timestamp: new Date().toISOString(),
    });

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const emailContent = `
New Free Intro Booking Request

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Selected Time: ${selectedSlot.date} at ${selectedSlot.time}

This booking request was submitted through the Vi Fit website.
      `.trim();

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || "parker@nothingnord.fit",
        to: process.env.EMAIL_TO || "info@vifit.ca",
        subject: `New Booking: ${firstName} ${lastName}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #76C46C;">New Free Intro Booking Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Selected Time:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${selectedSlot.date} at ${selectedSlot.time}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #666;">This booking request was submitted through the Vi Fit website.</p>
          </div>
        `,
      });

      console.log("Email notification sent successfully");
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
      // bookingId: bookingData.id, // Uncomment when API is integrated
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

