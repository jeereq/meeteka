import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';

const categories = ['Tous', 'Conseil', 'Formation', 'Technologie', 'Marketing'];

const partners = [
  {
    slug: 'meeteka-consulting',
    name: 'Meet\'eka Consulting',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Cabinet de conseil spécialisé dans l\'accompagnement des entreprises congolaises dans leur transformation digitale.',
    category: 'Conseil',
    expertise: ['Transformation Digitale', 'Innovation', 'Stratégie'],
    services: [
      {
        name: 'Accompagnement Startup',
        description: 'Programme personnalisé pour startups en phase de croissance',
        price: '150.000 à 250.000 FC'
      },
      {
        name: 'Conseil en Innovation',
        description: 'Développement de solutions innovantes',
        price: 'Sur devis'
      }
    ],
    stats: [
      { label: 'Clients', value: '50+' },
      { label: 'Projets', value: '100+' },
      { label: 'Experts', value: '15+' }
    ]
  },
  {
    slug: 'meeteka-academy',
    name: 'Meet\'eka Academy',
    logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Centre de formation d\'excellence dédié au développement des compétences digitales en RDC.',
    category: 'Formation',
    expertise: ['Formation', 'Coaching', 'Développement'],
    services: [
      {
        name: 'Formation Leadership',
        description: 'Programme intensif de développement du leadership',
        price: '50.000 à 150.000 FC'
      },
      {
        name: 'Coaching Personnalisé',
        description: 'Accompagnement individuel',
        price: '100.000 FC/session'
      }
    ],
    stats: [
      { label: 'Apprenants', value: '200+' },
      { label: 'Formations', value: '20+' },
      { label: 'Formateurs', value: '10+' }
    ]
  }
];

export function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Nos <span className="text-highlight">Partenaires</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              Découvrez notre réseau d'experts et de professionnels dédiés à votre réussite.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Rechercher un partenaire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-highlight text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[...Array(4)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredPartners.length === 0 ? (
            <EmptyState
              title="Aucun partenaire trouvé"
              description="Nous n'avons trouvé aucun partenaire correspondant à vos critères de recherche. Essayez de modifier vos filtres ou d'effectuer une nouvelle recherche."
              action={{
                label: "Réinitialiser les filtres",
                onClick: () => {
                  setSearchTerm('');
                  setSelectedCategory('Tous');
                }
              }}
            />
          ) : (
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {filteredPartners.map((partner, index) => (
                <Link
                  key={index}
                  to={`/partenaires/${partner.slug}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                          {partner.name}
                        </h2>
                        <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {partner.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                      {partner.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {partner.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black/5 rounded-full text-sm"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                      {partner.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-xl p-3 sm:p-4 group-hover:bg-highlight/10 transition-colors"
                        >
                          <p className="text-lg sm:text-2xl font-bold group-hover:text-highlight">
                            {stat.value}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {partner.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl"
                        >
                          <div>
                            <h3 className="text-sm sm:text-base font-medium mb-1">{service.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                          <span className="text-highlight font-bold text-sm sm:text-base whitespace-nowrap ml-4">
                            {service.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                        Voir les détails
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