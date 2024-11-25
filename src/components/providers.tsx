"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Chain, sepolia } from "wagmi/chains";

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
    default: { name: "Ble Explorer", url: "https://testnet.explorer.ethena.fi" },
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
};

const config = createConfig(
  getDefaultConfig({
    chains: [bleTestnet, sepolia],
    transports: {
      [bleTestnet.id]: http("https://testnet.rpc.ethena.fi"),
    },

    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    appName: "Game of Pots",
    appDescription: "A no loss lottery game with savings pool built on sUSDe rewards APY",
  })
);

const queryClient = new QueryClient();

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
