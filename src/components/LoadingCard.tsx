import { motion } from 'framer-motion';

export function LoadingCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border-2 border-black/5">
      <motion.div 
        className="space-y-4 p-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="aspect-video bg-gray-200 rounded-xl" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded-full w-3/4" />
          <div className="h-4 bg-gray-200 rounded-full w-1/2" />
          <div className="h-4 bg-gray-200 rounded-full w-5/6" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-10 bg-gray-200 rounded-xl" />
          <div className="h-10 bg-gray-200 rounded-xl" />
        </div>
      </motion.div>
    </div>
  );
}