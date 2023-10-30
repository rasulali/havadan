// Global styles inc tailwind
import './globals.css'

export const metadata = {
  title: 'Havadan',
  description: 'Modern weather app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default RootLayout
