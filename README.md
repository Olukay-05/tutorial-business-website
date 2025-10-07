# Bloomwise Tutoring Website

This is the official website for Bloomwise Tutoring, built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, create your environment variables file by copying the example:

```bash
cp .env.example .env.local
```

Then, update the .env.local file with your actual API keys and configuration values. **Important**: Make sure to keep sensitive information like API keys in .env.local and never commit them to version control.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Core Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: GSAP
- **Forms**: React Hook Form with Zod validation
- **Authentication**: NextAuth.js
- **Email Service**: Nodemailer
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe and Paystack

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   ├── forms/              # Form components
│   ├── animations/         # Animation components
│   └── layout/             # Layout components
├── lib/                    # Utility libraries
│   ├── types/              # TypeScript definitions
│   ├── utils/              # Utility functions
│   ├── validations/        # Zod schemas
│   └── hooks/              # Custom React hooks
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS utilities.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
