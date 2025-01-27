import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Navbar from "@/components/common/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--inter" })

export const metadata: Metadata = {
  title: "Shadcn UI",
  description: "Generated by create next app"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "font-sans antialiased",
        inter.variable
      )}>
        <SidebarProvider>
          <Navbar />
          <main className="p-4 w-full">
            <SidebarTrigger className="mb-4" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}