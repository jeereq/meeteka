import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Lock, CreditCard, Newspaper, Eye, Heart, MessageCircle, Share, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const formatPrice = (price: number = 0) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price * 2500);
};

export function DiffusionDetails({ post }: any) {
  const navigate = useNavigate();
  const [type] = useState<any>({
    "broadcast": "Diffusions",
    "blog": "Blog"
  });
  const [level] = useState<any>({
    "beginner": "Débutant",
    "intermediate": "Intermediaire",
    "advanced": "Avancé"
  });
  console.log(post)

  const [showPayment, setShowPayment] = useState(post?.isPremium);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(false);
  };


  const getType = () => {
    switch (post?.type) {
      case "broadcast":
        return "Diffusions"
      case "blog":
        return "Blogs"
      case "fiscality":
        return "Fiscalités"
      default:
        return "Diffusions"
    }
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <title>{post.title}</title>
      <meta name="author" content="jeereq" />
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-highlight hover:text-white transition-all duration-300 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm sm:text-base font-medium">Retour aux {getType()}</span>
          </button>
        </div>
      </div>

      {showPayment ? (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border-2 border-black/10">
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 mx-auto mb-4 text-highlight" />
            <h2 className="text-2xl font-bold mb-2">Contenu Premium</h2>
            <p className="text-gray-600">
              Accédez à ce contenu exclusif pour seulement {formatPrice(post?.price)}
            </p>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label htmlFor="card" className="block text-sm font-medium mb-2">
                Numéro de carte
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card"
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0"
                  placeholder="1234 5678 9012 3456"
                />
                <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                  Date d'expiration
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0"
                  placeholder="123"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-highlight text-white rounded-full font-bold hover:bg-black transition-colors"
            >
              Payer {formatPrice(post?.price)}
            </button>
          </form>
        </div>
      ) : (
        <article>
          <header className="mb-8">
            <img
              src={post?.cover}
              alt={post?.title}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl mb-8"
            />
            <div className="flex flex-wrap items-center gap-4 mb-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post?.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post?.owner?.username}</span>
              </div>
              <div className="flex items-center gap-1">
                <Newspaper className="w-4 h-4" />
                <span>{type[post?.type]}</span>
              </div>
              <div className="flex items-center gap-1">

                {level[post?.level] && <span className="px-3 py-1 bg-highlight rounded-full text-sm text-white">
                  {level[post?.level]}
                </span>}
              </div>
            </div>
            <div className="w-fit flex mb-4 items-center lg:justify-center flex-wrap gap-1">
              {post?.sectors?.map(function (item: any, index: number) {
                return <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                  {item?.name}
                </span>
              })}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post?.title}</h1>
          </header>

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post?.description }}
          />

          {/* Share Section */}
          <footer className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                {post?.organisation ? <img
                  src={post?.organisation?.cover}
                  alt={post?.organisation.name}
                  className="w-12 h-12 rounded-lg object-cover"
                /> : post?.owner?.cover && <img
                  src={post?.owner?.cover}
                  alt={post?.owner.username}
                  className="w-12 h-12 rounded-lg object-cover"
                />}
                <div>
                  <p className="font-bold">{post?.organisation ? post?.organisation.name : post?.owner.username}</p>
                  <p className="text-sm text-gray-600">{post?.organisation ? post?.owner.email : post?.owner.email}</p>
                </div>
              </div>

              <div className="flex gap-3">

                {<div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>}
                {<div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>}
                {<div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>

                </div>}
                {<div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>{post.share}</span>
                </div>}
              </div>
            </div>
          </footer>
        </article>
      )}
    </div>
  );
}