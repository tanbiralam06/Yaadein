# 🎁 Yaadein

> **Preserving Memories through Thoughtful Gifting**

Yaadein is a mission-driven platform designed to modernize the emotional gifting experience. It enables users to plan deeply personal gifts through an intuitive interface, ensuring that every gesture is backed by intent and emotion.

## 🚀 Overview

Yaadein streamlines the journey from an emotional spark to a delivered reality. The platform focuses on building trust and capturing the "why" behind every gift, bridging the gap between busy schedules and meaningful connections.

## 🛠️ Tech Stack

Built with a focus on speed, aesthetics, and user experience:

- **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Interactive Gift Planner:** A multi-step flow designed to capture emotional intent, preferences, and logistical details.
- **Premium UI/UX:** A glassmorphic design system with subtle micro-interactions for a premium feel.
- **Service-First Architecture:** Decoupled frontend and order-handling logic.
- **WhatsApp Integration:** Direct communication path for personalized execution.

## 💻 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tanbiralam06/Yaadein.git
   cd Yaadein
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory:

   ```env
   # API Webhook for production submissions
   WEBHOOK_URL=your_webhook_url_here
   ```

4. Launch the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

- `src/app/`: Modern Next.js App Router for layouts and pages.
- `src/components/`: Modular, reusable UI components.
- `src/app/api/`: Serverless functions for handling orders and status updates.
- `data/`: Local lightweight storage for development environments.

## 🚢 Deployment

Optimized for deployment on [Vercel](https://vercel.com/new). The application automatically handles environment-specific storage logic, ensuring reliable performance in serverless contexts.

---

_Built with ❤️ in Kolkata._
