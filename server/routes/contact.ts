import { RequestHandler } from "express";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  message: z.string().min(10).max(5000),
});

export const handleContact: RequestHandler = (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid input", details: parsed.error.flatten() });
  }

  const { name, email, message } = parsed.data;

  // In production, forward to email/service (Resend, Postmark, Zapier, etc.)
  // For now, log to server and acknowledge receipt.
  console.log("New contact submission:", { name, email, message });

  return res.status(200).json({ ok: true });
};
