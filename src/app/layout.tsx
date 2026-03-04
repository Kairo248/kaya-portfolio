import './globals.css';
import { PropsWithChildren } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = { title: "Kaya Smith — Portfolio" };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <Navbar />
          <main className="py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

