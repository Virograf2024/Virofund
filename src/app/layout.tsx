import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  title: "Virofund | Connect with Co-Founders to Build Tomorrow's Startups",
  description: "Virofund connects ambitious African entrepreneurs with the right co-founders to build billion dollar companies. Join the waitlist for founding member access.",
  keywords: "startup, co-founder, African entrepreneurs, startup matching, business partners, startup community",
  authors: [
    {
      name: "Virograf",
    },
    {
      name: "Stephen Paul",
    },
  ],
  openGraph: {
    title: "Virofund | Connect with Co-Founders to Build Tomorrow's Startups",
    description: "Virofund connects ambitious African entrepreneurs with the right co-founders to build billion dollar companies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virofund | Connect with Co-Founders to Build Tomorrow's Startups",
    description: "Virofund connects ambitious African entrepreneurs with the right co-founders to build billion dollar companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster
          position="top-center"
          toastOptions={{
            // Default options
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            success: {
              style: {
                background: "#22c55e", // green
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#22c55e",
              },
            },
            error: {
              style: {
                background: "#ef4444", // red
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#ef4444",
              },
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
