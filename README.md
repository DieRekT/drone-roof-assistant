# QuickVote

QuickVote is a full-stack polling app built with Next.js 14 (App Router), TailwindCSS, Supabase, and Prisma.

## Features

- User authentication via Supabase
- Create, vote, and manage polls
- Live vote updates and user-based restrictions
- Fully typed with TypeScript
- Zod schema validation
- Deploy-ready to Vercel

## Stack

- Next.js 14 (App Router)
- TailwindCSS
- Supabase (Auth + DB)
- Prisma (ORM)
- React Hook Form + Zod
- TypeScript

## Getting Started

1. Clone the repo:
```bash
git clone https://github.com/YOUR_USERNAME/quickvote.git
cd quickvote
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
- Create a new project at [supabase.io](https://supabase.io)
- Copy your project URL and anon/public key

4. Configure environment variables:

Create a `.env` file:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
DATABASE_URL=your-supabase-postgres-url
```

5. Push Prisma schema:
```bash
npx prisma db push
```

6. Run locally:
```bash
npm run dev
```

7. Deploy:
- Push this repo to GitHub
- Link to Vercel and import Supabase keys as environment variables

## License

MIT