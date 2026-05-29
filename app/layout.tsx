import type {Metadata} from 'next';
import './globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Stages Landscaping | Premium Lawn & Landscape Services in Ohio',
  description: 'Professional landscaping services you can rely on. We design, build, and maintain beautiful outdoor spaces for homeowners who want lasting curb appeal.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <TopBar />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
