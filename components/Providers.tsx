"use client";
import { config, queryClient } from "../config";
import { AlchemyClientState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ThirdwebProvider } from "thirdweb/react";
import React from "react";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        // <QueryClientProvider client={queryClient}>
        //     <AlchemyAccountProvider
        //         config={config}
        //         queryClient={queryClient}
        //         initialState={props.initialState}
        //     >
        <ThirdwebProvider>
            {children}
        </ThirdwebProvider>
        //     </AlchemyAccountProvider>
        // </QueryClientProvider>
    );
};