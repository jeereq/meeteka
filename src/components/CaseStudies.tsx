import { ArrowUpRight, Trophy, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const cases = [
  {
    title: 'Beauty Brand Success',
    metric: '400%',
    description: 'Growth in online sales',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    icon: TrendingUp,
    stats: [
      { label: 'Social Media Growth', value: '250K+' },
      { label: 'Monthly Revenue', value: '$100K+' },
    ],
  },
  {
    title: 'Tech Startup Growth',
    metric: '2M+',
    description: 'Investment secured',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    icon: Trophy,
    stats: [
      { label: 'User Base', value: '50K+' },
      { label: 'Market Value', value: '$5M+' },
    ],
  },
];

export function CaseStudies() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-black text-white" id="projects">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          {t("success-stories.title").split(" ").map(function (item, index: number) {
            if (index == 0) {
              return <span className="px-2">{item}</span>
            } else {
              return <span className="heading-highlight">{item}</span>
            }
          })}
        </h2>
        <p className="text-xl text-gray-300">
          {t("success-stories.description")}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((caseStudy, index) => {
          const Icon = caseStudy.icon;
          return (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="relative p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-400">{caseStudy.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-highlight rounded-2xl flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-highlight group-hover:text-white transition-colors duration-500">
                    {caseStudy.metric}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {caseStudy.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-black/30 backdrop-blur-sm p-4 rounded-xl group-hover:bg-highlight/20 transition-colors duration-500"
                    >
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white group-hover:text-highlight transition-colors">
                  {t("success-stories.more")}
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-4 bg-highlight text-black rounded-full font-bold hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-lg">
          {t("diffusions.more")}
        </button>
      </div>
    </section>
  );
}