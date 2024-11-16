import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, Search } from 'lucide-react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price * 2500);
};

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
    isPremium: false,
    price: 0
  }
];

const categories = ['Tous', 'Développement', 'Financement', 'Leadership', 'Marketing'];

export function DiffusionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);

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
    return matchesSearch && matchesCategory;
  });

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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Rechercher une diffusion..."
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
                onClick: () => {
                  setSearchTerm('');
                  setSelectedCategory('Tous');
                }
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
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <span className="px-3 py-1 bg-black/5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.readTime}</span>
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
                          <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
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