import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const parsed = Email.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: parsed.error?.message }, { status: 400 });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is missing. Skipping email send.");
      return Response.json({ skipped: true, message: "Email sending disabled" }, { status: 200 });
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        message: parsed.data.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error(error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}