import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(20),
  privacy: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: Integrate with email service (e.g. Resend, SendGrid)
    // For now, log the contact request
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Messaggio ricevuto. Ti risponderemo entro 24 ore." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Errore interno del server" },
      { status: 500 }
    );
  }
}
