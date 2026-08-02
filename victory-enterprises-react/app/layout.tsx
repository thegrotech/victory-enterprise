import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Victory Enterprises | Custom Packaging & Printing Factory in Karachi',
  description:
    'B2B custom packaging manufacturer in Nazimabad No. 2, Karachi. Flexible pouches, corrugated boxes, folding cartons, rigid plastic, poly bags & commercial printing. Direct factory pricing since 2002.',
  generator: 'v0.app',
  keywords: [
    'custom packaging Karachi',
    'corrugated boxes Pakistan',
    'flexible pouches',
    'folding cartons',
    'commercial printing Karachi',
    'Victory Enterprises',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#003D45',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
