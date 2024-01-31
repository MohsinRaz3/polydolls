import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polydolls',
  description: '18,000 POLYGON CITIZENS, EAGER FOR THEIR ANCESTRAL NEST. MINT NOW TO PAV THEIR VOYAGE HOMEAND SECURE COMMERCIAL RIGHTS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-gradient-to-tr from-[#0e0e20] to-[#0e0e20]`} >{children}</body>
    </html>
  )
}
