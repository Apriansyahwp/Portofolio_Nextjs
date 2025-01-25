import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionMenu from "./components/TransitionMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "With Me To Build Future Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionMenu>
          {children}
        </TransitionMenu>  
      </body>
    </html>
  );
}
