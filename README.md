# Hawa Chat - Web Version

A complete conversion of the React Native Expo app to a Next.js web application, now ready to deploy on Vercel.

## Overview

This project has been successfully converted from a mobile-first React Native app to a responsive web application using:
- **Next.js 16** - Modern React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **React Context** - Client-side authentication state management

## Features

✅ Three main pages: Home, Messages, and Me (Profile)
✅ Bottom navigation bar - Mobile-inspired navigation with emoji icons
✅ Login system - Demo authentication with localStorage persistence
✅ Responsive design - Mobile-first layout for all screen sizes
✅ Production ready - Fully built and tested for Vercel deployment

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Pages

- **Login** (`/login`) - Demo authentication page
- **Home** (`/home`) - Featured content and popular users feed
- **Messages** (`/messages`) - Message channels and conversations
- **Me** (`/me`) - User profile with settings and options

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Architecture

```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with AuthProvider
├── page.tsx           # Redirect page
├── login/page.tsx     # Login page
├── home/page.tsx      # Home feed page
├── messages/page.tsx  # Messages page
└── me/page.tsx        # Profile page

components/            # React components
├── BottomNav.tsx      # Bottom navigation
└── Redirect.tsx       # Auth protection

lib/
└── auth-context.tsx   # Authentication state management
```

## Conversion Notes

This app was successfully converted from React Native (Expo) to Next.js web:
- All React Native components replaced with HTML/CSS
- Navigation converted from React Navigation to Next.js routing
- Styling migrated from React Native StyleSheet to Tailwind CSS
- State management adapted for web with Context API and localStorage

## Tech Stack

- **Framework**: Next.js 16
- **Runtime**: Node.js/Vercel
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Authentication**: Client-side (localStorage)
- **Build Tool**: Turbopack
