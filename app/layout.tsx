import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Apex", description: "Chat App" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
