import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin, Lock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BlogPost({ post }: { post: any }) {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(post.isPremium);
  const services = post.relatedServices || [];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(false);
  };

  const BackButton = () => (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 bg-white shadow-lg hover:bg-highlight hover:text-white transition-all duration-300 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm sm:text-base font-medium">Retour aux diffusions</span>
        </button>
      </div>
    </div>
  );

  const PaymentForm = () => (
    <div className="max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-3xl border-2 border-black/10">
      <div className="text-center mb-6 sm:mb-8">
        <Lock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-highlight" />
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Contenu Premium</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Accédez à ce contenu exclusif pour seulement {post.price}€
        </p>
      </div>

      <form onSubmit={handlePayment} className="space-y-4 sm:space-y-6">
      </form>
    </div>
  );

  const ServicesSection = () => (
    <section className="mt-12 sm:mt-16 mb-8 sm:mb-12 bg-gray-50 rounded-3xl p-4 sm:p-8 border-2 border-black/10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Services Recommandés</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="group bg-white p-4 sm:p-6 rounded-2xl border-2 border-black/10 hover:border-highlight transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <img
                src={service.logo}
                alt={service.company}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 group-hover:text-highlight transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <span>{service.company}</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-highlight transition-colors" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );

  if (showPayment) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <BackButton />
        <PaymentForm />
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <BackButton />

      <header className="mb-6 sm:mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-2xl sm:rounded-3xl mb-4 sm:mb-8"
        />

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{post.author}</span>
          </div>
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-white rounded-full text-xs sm:text-sm">
            {post.category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{post.title}</h1>
      </header>

      <div
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-8 sm:mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <ServicesSection />

      {post.relatedArticles && (
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Articles Similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {post.relatedArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="group relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base text-white font-bold group-hover:text-highlight transition-colors">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <footer className="border-t border-gray-200 pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={`https://images.unsplash.com/photo-${post.image.split('photo-')[1]}`}
              alt={post.author}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm sm:text-base">{post.author}</p>
              <p className="text-xs sm:text-sm text-gray-600">{post.category}</p>
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <a
              href="#"
              className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
              aria-label="Partager sur Facebook"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
              aria-label="Partager sur Twitter"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
              aria-label="Partager sur LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}