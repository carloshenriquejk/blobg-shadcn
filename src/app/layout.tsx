import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blog.g",
  description: "Noticias do mundo dos codigos ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={cn(inter.className, "bg-zinc-900 text-zinc-100")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
