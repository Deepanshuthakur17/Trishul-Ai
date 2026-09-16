import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Trishul — AI Employees for Modern Businesses',
  description:
    'Trishul builds AI agents and automation systems that help businesses capture leads, automate customer conversations, streamline operations, and work smarter.',
  keywords: [
    'AI automation studio',
    'AI employees',
    'AI agents',
    'WhatsApp AI automation',
    'Lead qualification AI',
    'Customer support AI',
    'Business process automation',
    'Trishul AI',
  ],
  authors: [{ name: 'Trishul AI Studio' }],
  openGraph: {
    title: 'Trishul — AI Employees for Modern Businesses',
    description:
      'Build AI systems that work while you work. Custom AI agents for lead capture, customer support, WhatsApp, and operations.',
    url: 'https://trishul-ai.com',
    siteName: 'TRISHUL',
    images: [
      {
        url: '/trishul-original.png',
        width: 1200,
        height: 630,
        alt: 'TRISHUL AI Automation Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/trishul-logo.png',
    apple: '/trishul-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Supermercado+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-warm-white antialiased font-sans flex flex-col min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
