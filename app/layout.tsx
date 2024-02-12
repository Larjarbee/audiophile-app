import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/navbar/Header';
import Footer from '@/components/navbar/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Audiophile',
  description:
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
