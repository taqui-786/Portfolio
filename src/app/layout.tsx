import type { Metadata } from 'next'
import { Inter, Poppins, Rubik } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets:['latin'], weight:"400", variable:"--font-poppins"})
const rubik = Rubik({subsets:["latin"], weight:"600", variable:"--font-rubik"} )
export const metadata: Metadata = {
  title: 'Md Taqui Imam',
  description: 'Self Taught Full Stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
      <main
      className={cn(
        "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
        { "bg-white": "#E6E7EB" }
      )}
    >
      {/* NAVBAR ->  */} <Navbar/>
  
        {children}
      </main>
        </body>
    </html>
  )
}
