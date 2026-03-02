import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Green Infrastructure',
  description: 'Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-[#f5f6f4] text-neutral-900">
        {children}
      </body>
    </html>
  )
}