# 🎵 Vibra Web3 – The Future of Music Streaming 🚀

## 📌 Overview

Vibra Web3 is an innovative music streaming platform that allows users to access their favorite music for free by placing funds into the app. These funds are automatically delegated to staking via Kiln, generating yields that finance users’ subscriptions while ensuring fairer compensation for artists.

## ✨ Features
-	🎶 Access to a vast music catalog
-	💸 Subscription funded through staking yields
-	 � Web3 integration with Account Abstraction
-	 🔥 Seamless and immersive user experience
-	🎨 Customizable interface with Kiln Widget

## 🛠 Tech Stack

### Frontend
- Next.js (React Framework)
-	TypeScript
-	Tailwind CSS
-	Context API for state management

### Backend & Web3
-	Kiln Staking (via ERC-4626 Vaults)
-	Alchemy Wallet Kit (Account Abstraction)
-	Spotify API (Music catalog)

## 📂 Project Structure
```
vibra_web3
├── types/               # TypeScript type definitions
├── context/             # Context API for managing state
│   ├── PlayerContext.tsx
│   └── SpotifyContext.tsx
├── components/          # UI components
│   ├── CardItemGrid.tsx
│   ├── TracksTable.tsx
│   ├── PlayerTwo.tsx
│   ├── Sidebar.tsx
│   ├── SearchInput.tsx
│   ├── PreviewPlayer.tsx
│   └── Providers.tsx
├── pages/               # Next.js pages
│   ├── index.tsx
│   ├── login.tsx
│   ├── search/
│   ├── playlist/
│   ├── album/
│   ├── artist/
│   ├── premium/
│   ├── collection/
│   ├── genre/
│   └── api/             # API routes
├── utils/               # Utility functions
│   ├── isAuthenticated.ts
│   ├── customGet.ts
│   ├── getGreeting.ts
│   └── formatDuration.ts
├── styles/              # Styling files (Tailwind & CSS modules)
├── public/              # Static assets (images, icons)
├── config.ts            # Configuration settings
├── client.ts            # API client setup
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```
## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-repo/vibra_web3.git
cd vibra_web3
```
2. Install dependencies
```bash
yarn  # or npm install
```
3. Set up environment variables

Create a .env.local file and add the required API keys and configurations (Spotify API, Alchemy, Kiln, etc.).

4. Run the development server
```bash
yarn dev  # or npm run dev
```
Open `http://localhost:3000` in your browser.

## Features

- **Abstraction-Powered Authentication**
  - Email/OTP & Social Logins with 1 config
  - Smart Wallet Creation (ERC-4337)
  - Session Key Management
- **State Management**
  - React Query Integration
  - Cross-page auth persistence
  - Type-safe Client State

## 🛠 Roadmap
-	✅ Basic music playback	
-	✅ Web3 wallet integration (Account Abstraction)
-	✅ Staking and yield-based subscription model
-	🔄 Improved artist revenue distribution
-	🔄 Mobile app support

## 📜 License

This project is licensed under the MIT License.

Let me know if you need any modifications! 🚀
