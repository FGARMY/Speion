import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  services: z.array(z.string()).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);
    
    // Professional Logging
    console.log("New Contact Form Submission:", validatedData);
    
    // Simulate API delay (e.g., sending to Resend/SendGrid)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real scenario, you would integrate Resend here:
    // const { data, error } = await resend.emails.send({ ... });

    return NextResponse.json(
      { message: "Thank you! Our team will reach out shortly." },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.format() },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
