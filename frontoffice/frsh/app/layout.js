import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { IsClientContextProvider } from './context/is-client-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FRSH',
  description: 'your friendly neighbourhood online green grocer',
}

export default function RootLayout({ children }) {
  return (
    <IsClientContextProvider>
    <html lang="en-GB">
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link> */}
      <body className={inter.className}>{children}</body>
    </html>
    </IsClientContextProvider>
  )
}
