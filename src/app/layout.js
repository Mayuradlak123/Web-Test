import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
// import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: 'WellnessZ/ %s',
    default: 'WellnessZ - B2B Healthtech Platform'
  },
  description: 'B2B Healthtech Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
