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
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <TransitionMenu>
          {children}
        </TransitionMenu>  
      </body>
    </html>
  );
}
