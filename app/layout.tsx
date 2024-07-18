import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StoreProvider from "./providers/store";
import "./globals.scss";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Apex", description: "Chat App" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
