import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useFetchData } from '../../hooks/useFetchData';
import CardEntreprise from '../components/card/entreprise';

const categories = ['Tous', 'Conseil', 'Formation', 'Technologie', 'Marketing'];
const types = ['Tous', 'Startup', 'PME', 'Grande Entreprise', 'ONG'];
const specialties = ['Tous', 'Digital', 'Innovation', 'Développement', 'Formation', 'Conseil'];

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

export function EntreprisesPage() {
  const [entreprises, setEntreprises] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Tous');
  const [showFilters, setShowFilters] = useState(false);
  const { fetch: fetchEntreprises, loading: isLoading } = useFetchData({ uri: "infos-user/entreprise-profile/get" })

  const { t } = useLanguage()

  useEffect(() => {
    (async function () {
      const { data } = await fetchEntreprises({}, 'POST')
      if (data) {
        setEntreprises(data?.data)
      }
    })()
  }, []);

  const filteredPartners = entreprises.filter(partner => {
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
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("entreprises.banner.title").split(" ").map(function (element, index: number) {
                if (index == 0) {
                  return <span className="w-fit" key={index}>{element}</span>
                } else {
                  return <span key={index} className="ml-2 text-highlight"> {element}</span>
                }
              })}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              {t("entreprises.banner.description")}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="w-fit hidden">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-xl hover:bg-highlight transition-all duration-300 sm:w-auto w-full justify-center group"
                  >
                    <Filter className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                    <span>{showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}</span>
                  </button>
                </div>
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
        <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, index) => (
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
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {filteredPartners.map((partner: any, index: number) => (
                <CardEntreprise {...partner} key={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}