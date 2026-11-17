import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { Providers } from "@/components/providers";
import "./globals.css";

// PENDENTE: confirmar com o designer da loja o nome da fonte usada nos posts.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JV Imports | iPhones e assistência técnica em Maceió",
  description:
    "iPhones seminovos e lacrados, iPad, MacBook, Apple Watch, AirPods e assistência técnica Apple e Android. Atendemos toda Maceió. Chame no WhatsApp.",
  openGraph: {
    title: "JV Imports | iPhones e assistência técnica em Maceió",
    description: "Atendemos toda Maceió. Chame no WhatsApp.",
    locale: "pt_BR",
    type: "website",
    siteName: "JV Imports",
  },
};

export const viewport: Viewport = {
  themeColor: "#062b4a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} dark antialiased`}>
      <body className="min-h-dvh">
        {/* Sem JavaScript, os títulos animados aparecem já na posição final. */}
        <noscript>
          <style>{"[data-reveal] span{transform:none!important}"}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
