import './globals.css'
import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  preload: true 
});

export const metadata: Metadata = {
  title: 'BOB',
  description: 'Bring your Own BOB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={russo.className}>{children}</body>
    </html>
  )
}
