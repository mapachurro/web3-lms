"use client";

import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { SmartWalletsProvider } from "@privy-io/react-auth/smart-wallets";
import { base, baseSepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { AirstackProvider } from "@airstack/airstack-react";
// import { AuthWrapper } from "@/components/AuthWrapper";

export const wagmiConfig = createConfig({
  chains: [baseSepolia, base],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});

const ClientProvider = ({ children }: any) => {
  const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "";
  const AIRSTACK_API_KEY = process.env.NEXT_PUBLIC_AIRSTACK_API_KEY || "";

  const defaultChain =
    process.env.NODE_ENV === "production" ? base : baseSepolia;

  const queryClient = new QueryClient();

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ["email", "wallet", "google", "farcaster"],
        supportedChains: [base, baseSepolia],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "#0e1016",
          accentColor: "#0055FF",
          logo: "/images/logo_white.png",
          walletList: ["coinbase_wallet"],
        },
        // externalWallets: {
        //   coinbaseWallet: {
        //     // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
        //     connectionOptions: "smartWalletOnly",
        //   },
        // },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          noPromptOnSignature: true,
        },
        defaultChain: defaultChain,
      }}
      // onSuccess={() => handleSuccess(user)}
    >
      <SmartWalletsProvider>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
            <AirstackProvider apiKey={AIRSTACK_API_KEY}>
              {/* <AuthWrapper>{children}</AuthWrapper> */}
              {children}
            </AirstackProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </SmartWalletsProvider>
    </PrivyProvider>
  );
};

export default ClientProvider;
