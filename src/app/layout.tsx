import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: `${profile.name} (${profile.handle}) · ${profile.role}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} (${profile.handle})`,
    description: profile.intro,
    images: ["/shots/bursar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
