import { OpenAI } from 'openai';
import { NextRequest } from 'next/server';

// Instantiate OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // Parse user message and context from request body
    const { messages, context } = await req.json();

    // Construct chat completion request
    const response = await openai.chat.completions.create({
      model: 'gpgpt-3.5-turbo',
      messages: [
        { role: 'system', content: context || "You are a helpful drone assistant." },
        ...messages,
      ],
      stream: false,
    });

    // Return the assistant's response to the frontend
    return new Response(
      JSON.stringify({ message: response.choices[0]?.message?.content }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    // Log and return graceful error
    console.error("❌ OpenAI API Error:", error);

    return new Response(
      JSON.stringify({
        error: true,
        message: "Assistant failed: " + (error?.message || "Unknown error"),
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

