import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return <section className="pt-20 xs:pt-24 w-full h-fit">
    <div className="w-full h-[600px]">
      <img
        src="/bg.jpeg"
        alt="Entrepreneurs Congolais en Action"
        className="w-full h-full object-cover"
      />
    </div>
  </section>
  return (
    <section className="pt-20 xs:pt-24 sm:pt-32 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1536px] mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="animate-fade-up max-w-3xl lg:max-w-none mx-auto text-center lg:text-left">
          <h1 className="heading-responsive font-bold leading-tight mb-6">
            Votre Partenaire pour un <span className="heading-highlight">Succès</span> Durable
          </h1>
          <p className="text-responsive text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Meet'eka vous accompagne dans chaque étape de votre développement entrepreneurial, de l'informel vers l'excellence.
          </p>
          <div className="relative z-20">
            <button className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-highlight transition-all duration-300 transform hover:scale-105">
              <span className="text-base sm:text-lg">Commencez l'Aventure</span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        <div className="relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Entrepreneurs Congolais en Action"
              className="w-full aspect-4/3 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 z-20 bg-highlight p-4 sm:p-6 rounded-2xl text-white shadow-xl transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg xs:text-xl sm:text-2xl font-bold">Réussissons Ensemble</p>
          </div>
          <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-3xl bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}