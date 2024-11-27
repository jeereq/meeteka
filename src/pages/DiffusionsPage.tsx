import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, Search, Filter, X, Calendar, Clock } from 'lucide-react';
// import { LoadingSpinner } from '../components/LoadingSpinner';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price * 2500);
};

const categories = ['Tous', 'Développement', 'Financement', 'Leadership', 'Marketing'];
const types = ['Tous', 'Article', 'Guide', 'Étude de cas', 'Interview'];
const levels = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];

const diffusions = [
  {
    slug: 'building-strong-digital-presence',
    title: 'Stratégies de Croissance pour Startups',
    excerpt: 'Guide complet pour développer votre startup de manière durable et efficace.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Marcus Johnson',
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Développement',
    type: 'Guide',
    level: 'Intermédiaire',
    isPremium: true,
    price: 29.99
  },
  {
    slug: 'leveraging-social-media',
    title: 'Financement et Levée de Fonds',
    excerpt: 'Les meilleures stratégies pour sécuriser des investissements et développer votre entreprise.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Amara Williams',
    date: '2024-03-10',
    readTime: '4 min',
    category: 'Financement',
    type: 'Article',
    level: 'Avancé',
    isPremium: true,
    price: 19.99
  },
  {
    slug: 'power-of-storytelling',
    title: 'Leadership et Gestion d\'Équipe',
    excerpt: 'Construisez et dirigez une équipe performante pour atteindre vos objectifs d\'entreprise.',
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'David Thompson',
    date: '2024-03-05',
    readTime: '6 min',
    category: 'Leadership',
    type: 'Étude de cas',
    level: 'Débutant',
    isPremium: false,
    price: 0
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
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
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

export function DiffusionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredDiffusions = diffusions.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesType = selectedType === 'Tous' || post.type === selectedType;
    const matchesLevel = selectedLevel === 'Tous' || post.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesType && matchesLevel;
  });

  const hasActiveFilters = selectedCategory !== 'Tous' || selectedType !== 'Tous' || selectedLevel !== 'Tous';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Tous');
    setSelectedType('Tous');
    setSelectedLevel('Tous');
  };

  const ActiveFilterPill: React.FC<{ label: string; onRemove: () => void }> = ({ label, onRemove }) => (
    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-highlight/10 text-highlight rounded-full text-sm font-medium">
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
              Nos <span className="text-highlight">Diffusions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              Découvrez nos guides et ressources pour développer votre entreprise et réussir dans l'économie digitale.
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
                    placeholder="Rechercher une diffusion..."
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
                        title="Type de contenu"
                        options={types}
                        selected={selectedType}
                        onChange={setSelectedType}
                      />
                      <FilterSection
                        title="Niveau"
                        options={levels}
                        selected={selectedLevel}
                        onChange={setSelectedLevel}
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
                    {selectedLevel !== 'Tous' && (
                      <ActiveFilterPill
                        label={selectedLevel}
                        onRemove={() => setSelectedLevel('Tous')}
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

        {/* Diffusions Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredDiffusions.length === 0 ? (
            <EmptyState
              title="Aucune diffusion trouvée"
              description="Nous n'avons trouvé aucune diffusion correspondant à vos critères de recherche. Essayez de modifier vos filtres ou d'effectuer une nouvelle recherche."
              action={{
                label: "Réinitialiser les filtres",
                onClick: resetFilters
              }}
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredDiffusions.map((post, index) => (
                <Link
                  key={index}
                  to={`/diffusion/${post.slug}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {post.isPremium && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm">
                        <Lock className="w-4 h-4" />
                        <span>Premium</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {post.type}
                      </span>
                      <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {post.level}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-highlight transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://images.unsplash.com/photo-${post.image.split('photo-')[1].split('?')[0]}?auto=format&fit=crop&w=32&h=32`}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p className="font-medium">{post.author}</p>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {post.isPremium && (
                        <span className="text-highlight font-bold text-sm sm:text-base">
                          {formatPrice(post.price)}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 sm:mt-6 flex justify-end">
                      <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                        Lire plus
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