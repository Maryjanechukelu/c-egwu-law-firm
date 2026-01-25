
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { WhatsAppButton } from '@/components/WhatsAppButton';

// 1. Configure the Body Font (Sans)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// 2. Configure the Heading Font (Serif)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: 'C. Egwu Law Firm | Precision. Awareness. Confidence.',
  description: 'A full-service business law firm delivering precise legal solutions.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}> 
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollNavigation />
        <WhatsAppButton />
      </body>
    </html>
  );
}