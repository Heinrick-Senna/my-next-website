import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: "Marcelo Senna",
  description: "Marcelo Senna personal's website. A software developer.",
};

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoMono.className}>
      <Layout>
        {children}
      </Layout>
    </html>
  )
}