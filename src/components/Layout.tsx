'use client'

import { ThemeProvider } from "@/contexts/ThemeContext";
import MenuList from "./MenuList";
import RainEffect from "./RainEffect";
import SocialLinks from "./SocialLinks";
import ThemeChanger from "./ThemeChanger";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <body>
                <ThemeChanger />
                <RainEffect />
                <div className="relative grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-12 md:p-8">
                    <main className="lg:absolute flex flex-col gap-8 items-center sm:items-start z-10 mb-12 lg:mb-0 max-w-[calc(100%-2rem)] md:max-w-[50vw]">
                        {children}
                        <MenuList />
                    </main>
                    <footer className="flex gap-6 flex-wrap items-center justify-center self-end relative z-10">
                        <SocialLinks />
                    </footer>
                </div>
            </body>
        </ThemeProvider>
    )
}