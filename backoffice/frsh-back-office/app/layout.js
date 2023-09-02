import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FRSH | Back Office',
  description: 'FRSH | Back Office',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
