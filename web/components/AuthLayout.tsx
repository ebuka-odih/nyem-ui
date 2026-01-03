import React from 'react';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100svh] w-full bg-white flex flex-col overflow-hidden no-scrollbar items-center">
      <main className="flex-1 relative overflow-y-auto no-scrollbar w-full max-w-[768px] flex flex-col">
        {children}
      </main>
    </div>
  );
};