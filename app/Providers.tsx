"use client";
import { theme } from "@/app/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
