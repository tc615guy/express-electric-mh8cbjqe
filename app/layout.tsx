import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: `Express Electric – Electrical in Nashville, TN`,
  description: `Professional Electrical services in Nashville, TN. We specialize in professional electrical services with exceptional attention to detail.. Call 615-689-5643...`,
  keywords: 'Electrical, Nashville, TN, Electrical Repairs, Panel Upgrades & Replacement, Lighting Installation, Outlet & Switch Installation, Ceiling Fan Installation',
  authors: [{ name: `Express Electric` }],
  openGraph: {
    title: `Express Electric – Electrical in Nashville, TN`,
    description: `Professional Electrical services in Nashville, TN. We specialize in professional electrical services with exceptional attention to detail.. Call 615-689-5643...`,
    type: 'website',
    locale: 'en_US',
    siteName: `Express Electric`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Express Electric – Electrical in Nashville, TN`,
    description: `Professional Electrical services in Nashville, TN. We specialize in professional electrical services with exceptional attention to detail.. Call 615-689-5643...`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700&family=Montserrat:wght@400;600;700&family=Oswald:wght@400;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Lato:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: `'Roboto', 'Arial', sans-serif` }}>
        {children}
      </body>
    </html>
  )
}
