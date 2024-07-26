import React from "react";
import { Providers } from "@/app/Providers";
import { Header } from "@/app/ui/Header";

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <Providers>
            <Header />
            {children}
        </Providers>
    );
}
