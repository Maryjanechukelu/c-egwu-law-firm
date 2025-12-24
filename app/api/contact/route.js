import { Resend } from 'resend';
import { NextResponse } from 'next/server';


export async function POST(request) {

    const resend = new Resend(process.env.RESEND_API_KEY); 
    
    try {
        const body = await request.json();
        const { firstName, lastName, email, practiceArea, message } = body;

        // Validation (same as above)
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send to your firm
        await resend.emails.send({
            from: 'C. Egwu Law Firm <noreply@cegwulawfirm.com>',
            to: 'info@cegwulawfirm.com',
            subject: `New Contact Form Submission - ${practiceArea}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Name:</td>
                <td style="padding: 8px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Practice Area:</td>
                <td style="padding: 8px 0;">${practiceArea}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #475569;">Message</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Received: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Africa/Lagos'
            })}</p>
          </div>
        </div>
      `,
    });

        // Auto-reply
        await resend.emails.send({
            from: 'C. Egwu Law Firm <noreply@cegwulawfirm.com>',
            to: email,
            subject: 'Thank you for contacting C. Egwu Law Firm',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e293b; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">C. Egwu Law Firm</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Excellence in Legal Practice</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e293b; margin-top: 0;">Thank You for Reaching Out</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Dear ${firstName},
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              We have received your inquiry regarding <strong>${practiceArea}</strong>. 
              Our team will review your message and respond within 24-48 business hours.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #475569; margin-top: 0; font-size: 16px;">Your Message:</h3>
              <p style="color: #64748b; margin: 0; font-style: italic;">
                "${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"
              </p>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              In the meantime, if you have any urgent matters, please don't hesitate to contact us directly:
            </p>
            
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #1e40af;">
                <strong>Email:</strong> <a href="mailto:info@cegwulawfirm.com" style="color: #3b82f6;">info@cegwulawfirm.com</a>
              </p>
              <p style="margin: 5px 0; color: #1e40af;">
                <strong>Location:</strong> Lagos Free Trade Zone, Nigeria
              </p>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              We look forward to assisting you with your legal needs.
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              Best regards,<br>
              <strong>The C. Egwu Law Firm Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
            <p style="margin: 5px 0;">
              © ${new Date().getFullYear()} C. Egwu Law Firm. All rights reserved.
            </p>
            <p style="margin: 5px 0;">
              This is an automated message. Please do not reply directly to this email.
            </p>
          </div>
        </div>
      `,
    });

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}