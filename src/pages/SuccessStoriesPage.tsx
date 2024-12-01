import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
// import { LoadingSpinner } from '../components/LoadingSpinner';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

const successStories = [
  {
    slug: 'beauty-brand-success',
    title: 'Natural Beauty Co.',
    subtitle: 'De startup locale à leader du marché des cosmétiques naturels',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-15',
    duration: '12 mois',
    industry: 'Cosmétiques',
    metrics: [
      { label: 'Croissance des ventes', value: '+400%' },
      { label: 'Followers', value: '250K+' }
    ]
  },
  {
    slug: 'tech-startup-success',
    title: 'InnovTech Solutions',
    subtitle: 'Innovation technologique et expansion internationale',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    date: '2024-02-20',
    duration: '18 mois',
    industry: 'Technologie',
    metrics: [
      { label: 'Levée de fonds', value: '2M€' },
      { label: 'Nouveaux marchés', value: '5' }
    ]
  },
  {
    slug: 'retail-transformation',
    title: 'AfroMarket',
    subtitle: 'Transformation digitale d\'une chaîne de distribution',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    date: '2024-01-10',
    duration: '24 mois',
    industry: 'Distribution',
    metrics: [
      { label: 'Ventes en ligne', value: '+300%' },
      { label: 'Satisfaction client', value: '95%' }
    ]
  }
];

export function SuccessStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("success-stories.banner.title").split(" ").map(function (element, index: number) {
                if (index == 1 || index == 2) {
                  return <span key={index} className="pl-2 text-highlight" >{element}</span>
                } else {
                  return <span key={index} className="w-fit"> {element}</span>
                }
              })}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              {t('success-stories.banner.description')}
            </p>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[...Array(4)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : successStories.length === 0 ? (
            <EmptyState
              title="Aucune success story disponible"
              description="Il n'y a actuellement aucune success story à afficher. Revenez plus tard pour découvrir les réussites de nos clients."
            />
          ) : (
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {successStories.map((story, index) => (
                <Link
                  key={index}
                  to={`/success-stories/${story.slug}`}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <span className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {story.date}
                          </span>
                          <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
                            {story.duration}
                          </span>
                          <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
                            {story.industry}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">{story.title}</h2>
                        <p className="text-sm sm:text-base text-white/80">{story.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {story.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-xl p-3 sm:p-4 group-hover:bg-highlight/10 transition-colors"
                        >
                          <p className="text-sm text-gray-500 group-hover:text-highlight">
                            {metric.label}
                          </p>
                          <p className="text-lg sm:text-2xl font-bold group-hover:text-highlight">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 flex justify-end">
                      <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                        {t('success-stories.button.more')}
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}