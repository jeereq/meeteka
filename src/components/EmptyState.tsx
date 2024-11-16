import React from 'react';
import { FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[400px] text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FileQuestion className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={action.onClick}
          className="px-6 py-3 bg-highlight text-white rounded-full font-medium hover:bg-black transition-colors"
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  );
}