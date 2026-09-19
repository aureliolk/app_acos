import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acos — Aurélio · Senior Full-Stack & AI Engineer",
  description:
    "Portfólio de Aurélio, engenheiro full-stack sênior. 7 produtos em produção: SaaS de IA, atendimento automatizado e infraestrutura self-hosted.",
  metadataBase: new URL("https://acos-services.vercel.app"),
  openGraph: {
    title: "Acos — Senior Full-Stack & AI Engineer",
    description: "7 produtos em produção: SaaS de IA, atendimento automatizado e infra self-hosted.",
    images: ["/og.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 font-sans text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}