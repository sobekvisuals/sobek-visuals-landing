import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import LoadingScreen from "@/components/LoadingScreen";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sobek Visuals | Miniaturas de YouTube diseñadas para aumentar tus ingresos",
  description: "Diseño profesional de miniaturas de YouTube para canales empresariales que exigen resultados. Aumenta tu CTR, genera confianza y convierte audiencia en ventas.",
  icons: {
    icon: [
      { url: '/loading/loading-image.png', type: 'image/png' },
    ],
    shortcut: '/loading/loading-image.png',
    apple: '/loading/loading-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <LoadingScreen />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
