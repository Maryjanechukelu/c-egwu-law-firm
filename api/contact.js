import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers,
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { firstName, lastName, email, practiceArea, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers },
      );
    }

    const currentDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Lagos",
    });

    // ==========================================
    // EMAIL 1: INTERNAL NOTIFICATION (To Firm)
    // ==========================================
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "inquires@cegwulawfirm.com";

    await resend.emails.send({
      from: fromEmail,
      to: process.env.RESEND_NOTIFY_EMAIL || "egwuchidinma6@gmail.com",
      subject: `[New Lead] ${practiceArea} - ${firstName} ${lastName}`,
      html: `
            <!DOCTYPE html>
            <html>
            <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f1f5f9;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <div style="background-color: #020617; padding: 20px; border-bottom: 4px solid #d97706;">
                        <h2 style="color: #ffffff; margin: 0; font-family: 'Georgia', serif; letter-spacing: 1px;">New Client Inquiry</h2>
                    </div>

                    <div style="padding: 30px;">
                        <div style="margin-bottom: 25px;">
                            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-weight: bold;">Practice Area</p>
                            <h3 style="color: #0f172a; margin: 0; font-size: 18px;">${practiceArea}</h3>
                        </div>

                        <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #94a3b8; margin-bottom: 25px;">
                            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-weight: bold;">Client Details</p>
                            <p style="margin: 5px 0; color: #334155;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p style="margin: 5px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></p>
                        </div>

                        <div>
                            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: bold;">Message</p>
                            <div style="color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                        </div>
                    </div>

                    <div style="background-color: #f1f5f9; padding: 15px 30px; border-top: 1px solid #e2e8f0;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Received: ${currentDate}</p>
                    </div>
                </div>
            </body>
            </html>
            `,
    });

    // ==========================================
    // EMAIL 2: AUTO-REPLY (To Client)
    // ==========================================
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We have received your inquiry - C. Egwu Law Firm",
      html: `
            <!DOCTYPE html>
            <html>
            <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8fafc;">
                <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    
                    <div style="background-color: #020617; padding: 40px 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-family: 'Georgia', serif; font-size: 24px; letter-spacing: 1px;">C. EGWU LAW FIRM</h1>
                        <p style="color: #d97706; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Precision. Awareness. Confidence.</p>
                    </div>

                    <div style="padding: 40px 30px;">
                        <p style="color: #334155; font-size: 16px; margin-bottom: 20px;">Dear ${firstName},</p>
                        
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
                            Thank you for contacting C. Egwu Law Firm regarding <strong>${practiceArea}</strong>. 
                        </p>
                        
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
                            We acknowledge receipt of your inquiry. Our team is currently reviewing your message to determine how we can best assist you with your legal objectives. You can expect a response from one of our attorneys within <strong>24 business hours</strong>.
                        </p>

                        <div style="border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 20px 0; margin: 30px 0; text-align: center;">
                            <p style="color: #0f172a; font-family: 'Georgia', serif; font-style: italic; margin: 0; font-size: 16px;">
                                "We don't just interpret the law; we use it to pave the way for your business goals."
                            </p>
                        </div>

                        <div style="background-color: #f8fafc; padding: 20px; margin: 30px 0;">
                            <h3 style="color: #0f172a; margin: 0 0 10px 0; font-size: 16px;">In the Meantime</h3>
                            <p style="color: #475569; line-height: 1.6; margin: 0;">
                                Feel free to explore our resources on <a href="https://cegwulawfirm.com/articles.html" style="color: #d97706; text-decoration: none;">our blog</a> 
                                or schedule a consultation directly via our <a href="https://cegwulawfirm.com" style="color: #d97706; text-decoration: none;">website</a>.
                            </p>
                        </div>
                    </div>

                    <div style="background-color: #020617; color: #94a3b8; padding: 30px; text-align: center;">
                        <p style="margin: 0 0 10px 0; font-size: 18px; font-family: 'Georgia', serif; color: #ffffff;">C. EGWU LAW FIRM</p>
                        <p style="margin: 0 0 15px 0; font-size: 12px;">Lagos, Nigeria</p>
                        <p style="margin: 0; font-size: 12px;">
                            <a href="mailto:inquires@cegwulawfirm.com" style="color: #d97706; text-decoration: none;">inquires@cegwulawfirm.com</a> | 
                            <a href="https://cegwulawfirm.com/" style="color: #d97706; text-decoration: none;">www.cegwulawfirm.com</a>
                        </p>
                    </div>
                </div>
            </body>
            </html>
            `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers },
    );
  }
}
