import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, Lock, CreditCard, Hourglass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const formatPrice = (price: number = 0) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price * 2500);
};

export function EventDetails({ post }: any) {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(post?.isPremium);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(false);
  };

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-50 px-4 sm:px-8">
        <div className="max-w-9xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-highlight hover:text-white transition-all duration-300 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm sm:text-base font-medium">Retour aux evenements</span>
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
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center  bg-black/10 font-medium rounded-full gap-2 px-3 py-2 ">
                <Calendar className="w-4 h-4" />
                <span>Debut {new Date(post?.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center bg-black/10 font-medium rounded-full gap-2 px-3 py-2 ">
                <Calendar className="w-4 h-4" />
                <span>Fin {new Date(post?.endDate).toLocaleDateString()}</span>
              </div>
              <div className="w-fit flex items-center gap-1">
                {post?.startDate && <span className="p-2 flex text-center items-center bg-black group-hover:bg-highlight text-white font-medium rounded-full text-xs">
                  <Hourglass className="w-3 h-3 mr-1" />  {post?.startHour}
                </span>}
                -
                {post?.endDate && <span className="p-2 flex text-center items-center bg-black group-hover:bg-highlight text-white font-medium rounded-full text-xs">
                  <Hourglass className="w-3 h-3 mr-1" /> {post?.endHour}
                </span>}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post?.owner?.username}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              {post?.sectors?.filter(function ({ sector: item }: any) {
                return item?.name
              }).map(function ({ sector: item }: any) {
                return <span key={item.id} className="px-3 py-1 bg-highlight text-white rounded-full text-sm">
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
                {post?.owner?.cover && <img
                  src={post?.owner?.cover}
                  alt={post?.owner.username}
                  className="w-12 h-12 rounded-full object-cover"
                />}
                <div>
                  <p className="font-bold">{post?.owner.username}</p>
                  <p className="text-sm text-gray-600">{post?.owner.email}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
                  aria-label="Partager sur Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
                  aria-label="Partager sur Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-black/5 rounded-full hover:bg-highlight hover:text-white transition-colors"
                  aria-label="Partager sur LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        </article>
      )}
    </div>
  );
}