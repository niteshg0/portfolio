import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import { Footer } from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";
import { ThemeProvider } from "@/app/components/layout/theme-provider";
import { cn } from "@/app/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://niteshg0.vercel.app"
      : "http://localhost:3000"
  ),
  title: "Nitesh Kumar Gupta | Portfolio",
  description: "Portfolio of Nitesh Kumar Gupta - Full Stack Developer",
  openGraph: {
    images: ["/images/profile.jpg"], // Using your existing profile image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark"
      style={{ colorScheme: "dark" }}
    >
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "font-sans antialiased bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 dark:to-neutral-950/80"></div>
            </div>

            <Header />
            <main className="flex-1 pt-16 ">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
