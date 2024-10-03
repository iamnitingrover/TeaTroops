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

  let transporter = nodemailer.createTransport({
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
      to: "nitingrover@live.com",
      subject: `${mailType}: ${subject}`,
      text: message as string,
      html: `<p>${message}</p>`,
      attachments: file ? [
        {
          filename: file.name,
          content: await file.arrayBuffer(),
        }
      ] : [],
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}