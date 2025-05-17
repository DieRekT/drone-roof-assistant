import { OpenAI } from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, context } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // ✅ Corrected model name
      stream: true,
      messages: [
        {
          role: "system",
          content: context || "You are DroneLogIQ Assistant. Help with drone photos, flight logs, job summaries.",
        },
        ...messages,
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(content));
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (err: any) {
    console.error("Assistant failed:", err);
    return Response.json({ error: true, message: `Assistant failed: ${err.message}` }, { status: 500 });
  }
}
