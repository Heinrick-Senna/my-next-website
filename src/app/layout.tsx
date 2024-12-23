import { Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeChanger from '@/components/ThemeChanger';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcelo Senna",
  description: "Marcelo Senna personal's website. A software developer.",
};

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoMono.className}>
      <ThemeProvider>
        <body>
          <ThemeChanger />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}