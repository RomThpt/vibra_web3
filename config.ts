import { AlchemyAccountsUIConfig, createConfig } from "@account-kit/react";
import { sepolia, alchemy } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
    illustrationStyle: "linear",
    auth: {
        sections: [
            [
                { type: "passkey" },
                { type: "social", authProviderId: "google", mode: "popup" },
                {
                    type: "social",
                    authProviderId: "auth0",
                    mode: "popup",
                    auth0Connection: "twitter",
                    displayName: "Twitter",
                    logoUrl: "/images/twitter.svg",
                    logoUrlDark: "/images/twitter-dark.svg",
                    scope: "openid profile",
                },
            ],
            [
                {
                    type: "external_wallets",
                    walletConnect: { projectId: "your-project-id" },
                },
            ],
        ],
        addPasskeyOnSignup: false,
    },
};

export const config = createConfig(
    {
        // if you don't want to leak api keys, you can proxy to a backend and set the rpcUrl instead here
        // get this from the app config you create at https://dashboard.alchemy.com/accounts?utm_source=demo_alchemy_com&utm_medium=referral&utm_campaign=demo_to_dashboard
        transport: alchemy({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
        chain: sepolia,
        ssr: true, // set to false if you're not using server-side rendering
        enablePopupOauth: true,
    },
    uiConfig
);

export const queryClient = new QueryClient();
