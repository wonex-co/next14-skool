import './globals.css';

import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REKREIO",
  description: "Descubra sua comunidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
