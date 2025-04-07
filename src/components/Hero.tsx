import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage()
  return <section className="pt-20 xs:pt-24 max-w-8xl mx-auto h-fit">
    <div className="w-full lg:h-[600px] h-fit flex items-center justify-center">
      <div className="w-full h-fit lg:hidden block mt-20 ">
        <div className="animate-fade-up max-w-3xl lg:max-w-none mx-auto text-center lg:text-left">
          <h1 className="heading-responsive font-bold leading-tight mb-6">
            Votre Partenaire pour un <span className="heading-highlight">Succès</span> Durable
          </h1>
          <p className="text-responsive text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Meet'eka vous accompagne dans chaque étape de votre développement entrepreneurial, de l'informel vers l'excellence.
          </p>

        </div>
      </div>
      <img
        src="/bg.jpeg"
        alt="Entrepreneurs Congolais en Action"
        className="w-full lg:block hidden h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
      />
    </div>
    <div className="relative flex lg:justify-start justify-center w-11/12 z-20 px-4 gap-8 lg:gap-12 xl:gap-16 sm:px-6 lg:px-8 pt-5 mx-auto">
      <button className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-highlight transition-all duration-300 transform hover:scale-105">
        <span className="text-base sm:text-lg">
          {t("callToAction.hero")}
        </span>
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  </section>
}