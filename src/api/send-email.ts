import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "natn0542489516@gmail.com",
    subject: "הודעה חדשה מהאתר",
    html: `
      <h2>הודעה חדשה מהאתר</h2>
      <p><strong>שם:</strong> ${name}</p>
      <p><strong>טלפון:</strong> ${phone}</p>
      <p><strong>אימייל:</strong> ${email}</p>
      <p><strong>הודעה:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "ההודעה נשלחה בהצלחה" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "שגיאה בשליחת ההודעה" });
  }
});

export default router;
