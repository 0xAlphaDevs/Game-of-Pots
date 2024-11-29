import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { type AppKitNetwork, sepolia } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

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
//     default: {
//       name: "Ble Explorer",
//       url: "https://testnet.explorer.ethena.fi",
//     },
//   },
//   nativeCurrency: {
//     name: "Ether",
//     symbol: "ETH",
//     decimals: 18,
//   },
// };

export const networks = [sepolia] as [AppKitNetwork, ...AppKitNetwork[]];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
