import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lets Count',
  description: 'Website made for Count',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-600">
        <h1 className="text-white text-center">
          Lets Count
        </h1>
      {children}</body>
    </html>
  )
}
