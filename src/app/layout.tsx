import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polydolls',
  description: 'Polydolls NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className}  bg-[url("/bg.png")] bg-no-repeat bg-cover md:bg-top bg-center  w-full h-full  bg-fixed`} >{children}</body>
    </html>
  )
}
