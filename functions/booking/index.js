// DigitalOcean Serverless Function for Vi Fit Booking
// This handles form submissions, email notifications, and Gym Master API integration

const nodemailer = require('nodemailer');

async function main(args) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
  if (args.__ow_method === 'options') {
    return {
      statusCode: 200,
      headers,
      body: {},
    };
  }

  // Only allow POST requests
  if (args.__ow_method !== 'post') {
    return {
      statusCode: 405,
      headers,
      body: { error: 'Method not allowed' },
    };
  }

  try {
    const { firstName, lastName, email, phone, selectedSlot } = args;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !selectedSlot) {
      return {
        statusCode: 400,
        headers,
        body: { error: 'Missing required fields' },
      };
    }

    // Combine date and time into ISO format for Gym Master API
    const startTime = new Date(`${selectedSlot.date}T${selectedSlot.time}:00`).toISOString();

    // Prepare Gym Master API payload
    const gymMasterPayload = {
      firstName,
      lastName,
      email,
      phone,
      serviceId: args.GYMMASTER_SERVICE_ID || 'PLACEHOLDER_SERVICE_ID',
      locationId: args.GYMMASTER_LOCATION_ID || 'PLACEHOLDER_LOCATION_ID',
      startTime,
      duration: 60, // 1 hour in minutes
    };

    // TODO: Uncomment when Gym Master API credentials are available
    /*
    const gymMasterResponse = await fetch(
      'https://www.gymmaster.com/gymmaster-api/portal-api/v1/booking/servicebookings',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${args.GYMMASTER_API_KEY}`,
        },
        body: JSON.stringify(gymMasterPayload),
      }
    );

    if (!gymMasterResponse.ok) {
      const errorData = await gymMasterResponse.json();
      console.error('Gym Master API error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: { error: 'Failed to create booking' },
      };
    }

    const bookingData = await gymMasterResponse.json();
    */

    // Log the booking
    console.log('Booking received:', {
      ...gymMasterPayload,
      timestamp: new Date().toISOString(),
    });

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: args.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(args.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: args.SMTP_USER,
          pass: args.SMTP_PASS,
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
        from: args.EMAIL_FROM || 'parker@nothingnord.fit',
        to: args.EMAIL_TO || 'info@vifit.ca',
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

      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails
    }

    return {
      statusCode: 200,
      headers,
      body: {
        success: true,
        message: 'Booking submitted successfully',
      },
    };
  } catch (error) {
    console.error('Booking function error:', error);
    return {
      statusCode: 500,
      headers,
      body: { error: 'Internal server error' },
    };
  }
}

exports.main = main;

