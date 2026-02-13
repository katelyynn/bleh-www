import type { Metadata } from "next";
import { Darumadrop_One, Funnel_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";

const funnel = Funnel_Sans({
    variable: "--font-funnel",
    subsets: ["latin"]
});

const brand = Darumadrop_One({
    weight: "400",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "bleh, an extension for Last.fm",
    description: "A fresh coat of paint for Last.fm bringing you closer to the music that defines you",
    keywords: ["last.fm", "lastfm", "lastdotfm", "music", "streaming", "extension", "dark mode", "dark theme", "light theme", "fix shoutbox", "no shoutbox", "lotus", "bleh", "katelyn.moe", "katelyn", "bleh for lastfm", "bleh reddit", "lastfm collage", "lastfm collage generator", "collage", "compare scrobbles", "scrobble", "scrobbles", "github", "clairedoll lastfm", "clairedoll last.fm", "clairedoll"],
    openGraph: {
        images: "/profile_2.webp",
        type: "website",
        url: "https://bleh.katelyn.moe",
        title: "bleh, an extension for Last.fm",
        description: "A fresh coat of paint for Last.fm bringing you closer to the music that defines you",
        siteName: "katelyn.moe"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${funnel.variable} ${geistMono.variable}`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
