/**
 * Handles the POST request to send an email using the provided form data.
 * 
 * @param {Request} request - The incoming request object containing form data.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object indicating the result of the email sending operation.
 * 
 * The form data should include the following fields:
 * - `name`: The name of the sender.
 * - `email`: The email address of the sender.
 * - `subject`: The subject of the email.
 * - `mailType`: The type of the email (e.g., inquiry, support).
 * - `message`: The message content of the email.
 * - `file` (optional): An optional file attachment.
 * 
 * The function uses nodemailer to send the email via an SMTP server.
 * The SMTP server configuration is retrieved from environment variables `EMAIL_USER` and `EMAIL_PASS`.
 * 
 * If the email is sent successfully, the function returns a JSON response with a success message and a status code of 200.
 * If the email sending fails, the function logs the error and returns a JSON response with an error message and a status code of 500.
 */
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const mailType = formData.get('mailType')
  const message = formData.get('message')
  const file = formData.get('file') as File | null
  const supportEmail = process.env.SUPPORT_EMAIL;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: supportEmail,
      subject: `${mailType}: ${subject}`,
      text: message as string,
      html: `<p>${message}</p>`,
      attachments: file ? [
        {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }
      ] : [],
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}