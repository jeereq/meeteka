import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import CardPartner from '../components/card/partner';

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
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${selectedCategory === category
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
                <CardPartner {...partner} key={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}