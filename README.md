# CroweOS Systems - Landing Page

This is a Next.js 14 project for the CroweOS Systems landing page, built with the App Router, Tailwind CSS, and TypeScript.

## Project Overview

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Local Development

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd croweos-landing
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    \`\`\`

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production-ready build, run:

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

### Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

You can deploy this project with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F<your-github-username>%2Fcroweos-landing&project-name=croweos-landing&repository-name=croweos-landing)

(Remember to replace `<your-github-username>` with your actual GitHub username after pushing the code.)

## Project Structure

-   `app/`: Contains the core application logic and routes.
    -   `layout.tsx`: The root layout.
    -   `page.tsx`: The main landing page.
    -   `api/`: API routes.
-   `components/`: Reusable React components.
    -   `sections/`: Larger page sections (Hero, Features, etc.).
    -   `ui/`: Atomic UI components from shadcn/ui.
-   `public/`: Static assets like images and fonts.
-   `lib/`: Utility functions.
-   `tailwind.config.ts`: Tailwind CSS configuration.
