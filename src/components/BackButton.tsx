import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-black/5 
          hover:border-highlight shadow-lg hover:shadow-xl hover:bg-highlight hover:text-white 
          transition-all duration-300 rounded-full transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm sm:text-base font-medium">Retour</span>
        </button>
      </div>
    </div>
  );
}