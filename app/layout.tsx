import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Travozom - AI-Powered Luxury Travel Planning",
  description:
    "Where AI crafts your story, humans perfect it. Discover extraordinary journeys with intelligent curation and expert local guides.",
  keywords: "luxury travel, AI travel planning, bespoke journeys, travel concierge, destination experts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${lato.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
