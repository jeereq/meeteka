import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}