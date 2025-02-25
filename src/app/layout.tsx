import type React from "react"
import type { Metadata } from "next"
import { Poppins, Volkhov } from "next/font/google"
import "./globals.css"
import { AOSInit } from "./components/AOS"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-volkhov",
})

export const metadata: Metadata = {
  title: "Duality Domain | Code Crafters",
  description: "Professional software development and tech solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${poppins.variable} ${volkhov.variable} font-sans`}>{children}</body>
    </html>
  )
}

