import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from "@/components/convex-client-provider";
import { cn } from "@workspace/ui/lib/utils";
import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ClerkProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
