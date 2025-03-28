import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth0ProviderWithNavigate from "./providers/Auth0Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MuscleAI",
  description: "Your AI-powered fitness companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Auth0ProviderWithNavigate>{children}</Auth0ProviderWithNavigate>
      </body>
    </html>
  );
}
