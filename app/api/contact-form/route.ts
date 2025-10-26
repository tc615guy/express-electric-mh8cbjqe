import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, businessEmail, businessName } = body

    // Validate required fields
    if (!name || !email || !message || !businessEmail || !businessName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Email to business owner
      const businessEmailResult = await resend.emails.send({
        from: 'AutoTaco Contact Form <noreply@autotaco.io>',
        to: businessEmail,
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
          </div>
        `
      })

      if (businessEmailResult.error) {
        throw new Error(`Business email failed: ${businessEmailResult.error.message}`)
      }

      // Email to customer (confirmation)
      const customerEmailResult = await resend.emails.send({
        from: `${businessName} <noreply@autotaco.io>`,
        to: email,
        subject: `Thank you for contacting ${businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank You for Contacting Us!</h2>
            <p>Hi ${name},</p>
            <p>We received your message and will get back to you as soon as possible.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>Best regards,<br/>${businessName}</p>
          </div>
        `
      })

      if (customerEmailResult.error) {
        throw new Error(`Customer email failed: ${customerEmailResult.error.message}`)
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      })

    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

export const runtime = 'edge'
