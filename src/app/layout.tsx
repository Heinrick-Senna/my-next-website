import { Roboto_Mono, Jaro } from 'next/font/google'
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import "./globals.css";
import ThemeChanger from '@/components/ThemeChanger';

export const metadata: Metadata = {
  title: "Marcelo Senna",
  description: "Marcelo Senna personal's website. A software developer.",
};

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const jaro = Jaro({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <ThemeChanger />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}