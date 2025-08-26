import './globals.css'

export const metadata = {
  title: 'Brainrot Gods - Italian Plushies & Merch',
  description: 'Super minimal ecommerce for Italian brainrot plushies, keychains, and merch!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
