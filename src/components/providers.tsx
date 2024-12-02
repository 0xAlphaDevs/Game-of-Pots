"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { Chain } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

const bleTestnet: Chain = {
  id: 52085143,
  name: "Ble Testnet",
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.ethena.fi"],
      webSocket: ["wss://testnet.rpc.ethena.fi"],
    },
    public: {
      http: ["https://testnet.rpc.ethena.fi"],
    },
  },
  blockExplorers: {
    default: {
      name: "Ble Explorer",
      url: "https://testnet.explorer.ethena.fi",
    },
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
};

const config = createConfig(
  getDefaultConfig({
    chains: [bleTestnet],
    walletConnectProjectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
    appName: "Game of Pots",
    appDescription:
      "No loss lottery game with savings pool built on sUSDe rewards APY",
  })
);

const queryClient = new QueryClient();

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
};
