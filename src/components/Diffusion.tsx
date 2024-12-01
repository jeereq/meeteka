import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price * 2500);
};

const featuredDiffusions = [
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

export function Diffusion() {
  const { t } = useLanguage()
  return (
    <section className="section-padding" id="diffusion">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          {t("diffusions.title").split(" ").map(function (item, index: number) {
            if (index == 0) {
              return <span className="px-2">{item}</span>
            } else {
              return <span className="heading-highlight">{item}</span>
            }
          })}
        </h2>
        <p className="text-xl text-gray-600">
        {t("diffusions.description")} 
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDiffusions.map((post, index) => (
          <Link
            key={index}
            to={`/diffusion/${post.slug}`}
            className="group bg-white rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
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

            <div className="p-6">
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="px-3 py-1 bg-black/5 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
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
                  <span className="text-highlight font-bold">
                    {formatPrice(post.price)}
                  </span>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                  Lire plus
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </div>    
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/diffusions"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-highlight transition-all duration-300 hover:scale-105"
        >
          <span> {t("diffusions.more")} </span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}