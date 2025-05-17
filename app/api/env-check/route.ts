import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Only expose non-sensitive environment variables for verification
  const envInfo = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : null,
    DATABASE_URL: process.env.DATABASE_URL ? 'set' : null,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ? 'set' : null,
  };

  return new Response(JSON.stringify(envInfo, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
