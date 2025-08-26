import {
  BookOpen,
  Coins,
  FileText,
  Calculator,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stats = [
  { value: '580K+', label: 'about.stats.580k+' },
  { value: '95%', label: 'about.stats.95%' },
  { value: '43%', label: 'about.stats.43%' },
  { value: '80%', label: 'about.stats.80%' }
];

const challenges = [
  {
    icon: Coins,
    title: 'about.challenges.coins.title',
    description: 'about.challenges.coins.description'
  },
  {
    icon: BookOpen,
    title: 'about.challenges.BookOpen.title',
    description: 'about.challenges.BookOpen.description'
  },
  {
    icon: FileText,
    title: 'about.challenges.FileText.title',
    description: 'about.challenges.FileText.description'
  },
  {
    icon: Calculator,
    title: 'about.challenges.Calculator.title',
    description: 'about.challenges.Calculator.description'
  }
];



export function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex justify-center items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Entrepreneurs Congolais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="w-fit">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t("about.banner.title").split(" ").map(function (item) {
                if (item == "build" || item == "Construisons") return <span className="text-highlight mr-2" >{item}</span>
                return `${item} `
              })}
            </h1>
            <p className="text-xl text-gray-300">
              {t("about.banner.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-highlight mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("about.challenges.title").split(" ").map(function (item) {
              if (item == "Défis" || item == "challenges") return <span className="text-highlight mr-2" >{item}</span>
              return `${item} `
            })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10"
                >
                  <div className="w-12 h-12 bg-highlight rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(challenge.title)}</h3>
                  <p className="text-gray-400">{t(challenge.description)}</p>
                </div>
              );
            })}
          </div>
          <div className="relative flex justify-center max-w-9xl z-20 px-4 gap-8 lg:gap-12 xl:gap-16 sm:px-6 lg:px-8 pt-5 mx-auto">
            <button className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:bg-highlight transition-all duration-300 transform hover:scale-105">
              <span className="text-base sm:text-lg">
                {t("callToAction.hero")}
              </span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-highlight">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("about.callToAction.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("about.callToAction.description")}
          </p>
          <div className="relative flex  justify-center max-w-9xl z-20 px-4 gap-4 lg:gap-6 xl:gap-8 sm:px-6 lg:px-8 pt-5 mx-auto">
            <a href='' target='_blank' className="group flex items-center k text-white rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-[250px] h-[80px] relative">
                <img
                  src="/appStore.png"
                  alt="Entrepreneurs Congolais en Action"
                  className="w-full lg:block rounded-xl hidden bg-white h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
                />
              </div>
            </a>
            <a href='' target='_blank' className="group flex items-center k text-white rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-[250px] h-[80px] relative">
                <img
                  src="/google.png"
                  alt="Entrepreneurs Congolais en Action"
                  className="w-full lg:block rounded-xl hidden bg-white h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}