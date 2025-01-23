import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Filter, X } from 'lucide-react';
// import { LoadingSpinner } from '../components/LoadingSpinner';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const categories = ['Tous', 'Conseil', 'Formation', 'Technologie', 'Marketing'];
const types = ['Tous', 'Startup', 'PME', 'Grande Entreprise', 'ONG'];
const specialties = ['Tous', 'Digital', 'Innovation', 'Développement', 'Formation', 'Conseil'];

const partners = [
  {
    slug: 'meeteka-consulting',
    name: 'Meet\'eka Consulting',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Cabinet de conseil spécialisé dans l\'accompagnement des entreprises congolaises dans leur transformation digitale.',
    category: 'Conseil',
    type: 'PME',
    specialty: 'Digital',
    expertise: ['Transformation Digitale', 'Innovation', 'Stratégie'],
    services: [
      {
        name: 'Accompagnement Startup',
        description: 'Programme personnalisé pour startups en phase de croissance',
        price: '250.000 FC/mois'
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
    type: 'Grande Entreprise',
    specialty: 'Formation',
    expertise: ['Formation', 'Coaching', 'Développement'],
    services: [
      {
        name: 'Formation Leadership',
        description: 'Programme intensif de développement du leadership',
        price: '150.000 FC'
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
  },
  {
    slug: 'digital-solutions',
    name: 'Digital Solutions RDC',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Startup innovante spécialisée dans le développement de solutions digitales sur mesure.',
    category: 'Technologie',
    type: 'Startup',
    specialty: 'Innovation',
    expertise: ['Développement Web', 'Applications Mobiles', 'IA'],
    services: [
      {
        name: 'Développement Sur Mesure',
        description: 'Solutions digitales personnalisées',
        price: 'Sur devis'
      },
      {
        name: 'Maintenance Applicative',
        description: 'Support et évolution continue',
        price: '200.000 FC/mois'
      }
    ],
    stats: [
      { label: 'Projets', value: '30+' },
      { label: 'Clients', value: '25+' },
      { label: 'Développeurs', value: '12+' }
    ]
  }
];

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-highlight text-white shadow-lg scale-105'
      : 'bg-white hover:bg-gray-100'
      } ${className}`}
  >
    {label}
  </button>
);

const FilterSection: React.FC<{
  title: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}> = ({ title, options, selected, onChange }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <FilterButton
          key={option}
          label={option}
          isActive={selected === option}
          onClick={() => onChange(option)}
        />
      ))}
    </div>
  </div>
);

export function OrganisationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage()

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
    const matchesType = selectedType === 'Tous' || partner.type === selectedType;
    const matchesSpecialty = selectedSpecialty === 'Tous' || partner.specialty === selectedSpecialty;
    return matchesSearch && matchesCategory && matchesType && matchesSpecialty;
  });

  const hasActiveFilters = selectedCategory !== 'Tous' || selectedType !== 'Tous' || selectedSpecialty !== 'Tous';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Tous');
    setSelectedType('Tous');
    setSelectedSpecialty('Tous');
  };

  const ActiveFilterPill: React.FC<{ label: string; onRemove: () => void }> = ({ label, onRemove }) => (
    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-highlight/10 text-highlight rounded-full text-sm font-medium group">
      {label}
      <button
        onClick={onRemove}
        className="p-0.5 rounded-full hover:bg-highlight hover:text-white transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("organisations.banner.title").split(" ").map(function (element, index: number) {
                if (index == 0) {
                  return <span className="w-fit" key={index}>{element}</span>
                } else {
                  return <span key={index} className="ml-2 text-highlight"> {element}</span>
                }
              })}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              {t("organisations.banner.description")}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {/* Search and Filter Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Rechercher un partenaire..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-xl hover:bg-highlight transition-all duration-300 sm:w-auto w-full justify-center group"
                >
                  <Filter className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                  <span>{showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}</span>
                </button>
              </div>

              {/* Extended Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-xl p-6 space-y-6 border-2 border-black/5">
                      <FilterSection
                        title="Catégorie"
                        options={categories}
                        selected={selectedCategory}
                        onChange={setSelectedCategory}
                      />
                      <FilterSection
                        title="Type d'entreprise"
                        options={types}
                        selected={selectedType}
                        onChange={setSelectedType}
                      />
                      <FilterSection
                        title="Spécialité"
                        options={specialties}
                        selected={selectedSpecialty}
                        onChange={setSelectedSpecialty}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Filters */}
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="text-sm text-gray-500">Filtres actifs:</span>
                    {selectedCategory !== 'Tous' && (
                      <ActiveFilterPill
                        label={selectedCategory}
                        onRemove={() => setSelectedCategory('Tous')}
                      />
                    )}
                    {selectedType !== 'Tous' && (
                      <ActiveFilterPill
                        label={selectedType}
                        onRemove={() => setSelectedType('Tous')}
                      />
                    )}
                    {selectedSpecialty !== 'Tous' && (
                      <ActiveFilterPill
                        label={selectedSpecialty}
                        onRemove={() => setSelectedSpecialty('Tous')}
                      />
                    )}
                    <button
                      onClick={resetFilters}
                      className="text-sm text-gray-500 hover:text-highlight transition-colors"
                    >
                      Réinitialiser tout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
                onClick: resetFilters
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
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                            {partner.category}
                          </span>
                          <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                            {partner.type}
                          </span>
                          <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                            {partner.specialty}
                          </span>
                        </div>
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