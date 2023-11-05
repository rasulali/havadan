// Global styles inc tailwind
import './globals.css'
import { DM_Sans } from "next/font/google"

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm_sans',
})

export const metadata = {
  title: 'Havadan',
  description: 'Modern weather app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} font-sans`}>{children}</body>
    </html>
  )
}
export default RootLayout
