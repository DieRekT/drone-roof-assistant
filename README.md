# Drone Roofer Assistant
... [# Drone Roofer Assistant

Drone Roofer Assistant is a full-stack AI-driven app for roofing professionals. It integrates with DJI drones to streamline quoting, job planning, and site analysis using AI and aerial data.

## 🛠 Features

- 🔐 Supabase Auth: Secure login and user management
- 📸 Drone Log Upload: Analyze flight data and images
- 💬 AI Assistant: Ask questions about drone logs, photos, or quotes
- 📂 Project Management: Organize quotes and jobs
- ⚡ Responsive UI: Built with TailwindCSS
- ✅ Type-safe with TypeScript + Zod

## 🧱 Tech Stack

- **Frontend**: Next.js 14 App Router + TailwindCSS
- **Backend**: Supabase (Auth + DB) + Prisma ORM
- **AI**: OpenAI API or local LLM integration
- **Validation**: Zod + React Hook Form
- **Dev Tools**: TypeScript, Vercel, GitHub

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/DieRekT/drone-roof-assistant.git
cd drone-roof-assistant
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Supabase**
- Go to [supabase.io](https://supabase.io) and create a project
- Get your **project URL** and **anon/public key**

4. **Configure environment variables**
Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (if needed)
DATABASE_URL=your-supabase-postgres-connection-url
```

5. **Push your database schema**
```bash
npx prisma db push
```

6. **Run the app locally**
```bash
npm run dev
```

7. **Deploy**
- Push to GitHub
- Connect to [Vercel](https://vercel.com)
- Add environment variables in Vercel settings

## 📷 DJI Drone Integration

> This project will integrate DJI's Mobile SDK to enable real-time drone feed analysis, log processing, and flight planning AI features.

- Use the DJI SDK from `Mobile-SDK-Android/Sample Code`
- Future bridge planned via API + storage sync

## 💡 Use Case

> A roofer flies a DJI drone over a house. The footage and flight logs are uploaded to the Drone Assistant. The assistant highlights damage, calculates square meterage, and helps write a quote — all in one app.

## 📄 License

MIT] ...
