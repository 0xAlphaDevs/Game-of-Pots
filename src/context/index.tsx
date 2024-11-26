'use client'

import { wagmiAdapter, projectId, networks } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { sepolia } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'next-reown-appkit',
  description: 'next-reown-appkit',
  url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: sepolia,
  metadata: metadata,
  themeMode: 'light',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function ContextProvider({ children, }: { children: ReactNode; }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config,)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider

// "use client";

// import { WagmiProvider, createConfig, http } from "wagmi";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ConnectKitProvider, getDefaultConfig } from "connectkit";
// import { Chain, sepolia } from "wagmi/chains";

// const bleTestnet: Chain = {
//   id: 52085143,
//   name: "Ble Testnet",
//   rpcUrls: {
//     default: {
//       http: ["https://testnet.rpc.ethena.fi"],
//       webSocket: ["wss://testnet.rpc.ethena.fi"],
//     },
//     public: {
//       http: ["https://testnet.rpc.ethena.fi"],
//     },
//   },
//   blockExplorers: {
//     default: { name: "Ble Explorer", url: "https://testnet.explorer.ethena.fi" },
//   },
//   nativeCurrency: {
//     name: "Ether",
//     symbol: "ETH",
//     decimals: 18,
//   },
// };

// const config = createConfig(
//   getDefaultConfig({
//     chains: [bleTestnet, sepolia],
//     transports: {
//       [bleTestnet.id]: http("https://testnet.rpc.ethena.fi"),
//     },

//     walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
//     appName: "Game of Pots",
//     appDescription: "A no loss lottery game with savings pool built on sUSDe rewards APY",
//   })
// );

// const queryClient = new QueryClient();

// export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <ConnectKitProvider>{children}</ConnectKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };
