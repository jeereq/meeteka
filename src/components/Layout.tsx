import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(function () {
    navigate(pathname)
  }, [pathname])
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}