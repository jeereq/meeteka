import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <motion.div
        className="w-16 h-16 border-4 border-highlight rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 text-gray-600">Chargement en cours...</p>
    </div>
  );
}