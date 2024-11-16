import React from 'react';
import { Shield, Zap, Star, Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Pour les entrepreneurs individuels et les petites entreprises',
    price: '75.000',
    duration: '/mois',
    icon: Shield,
    features: [
      'Accès à la documentation de base',
      'Support par email',
      '1 consultation mensuelle',
      'Accès aux webinaires',
      'Analyse de base',
    ],
    notIncluded: [
      'Accompagnement personnalisé',
      'Formation sur site',
      'Support prioritaire',
      'Audit approfondi'
    ]
  },
  {
    name: 'Business',
    description: 'Pour les PME en croissance',
    price: '250.000',
    duration: '/mois',
    icon: Zap,
    popular: true,
    features: [
      'Tout le plan Starter',
      'Accompagnement personnalisé',
      '3 consultations mensuelles',
      'Formation sur site (4h/mois)',
      'Support prioritaire',
      'Audit trimestriel',
      'Accès aux événements VIP'
    ],
    notIncluded: [
      'Support 24/7',
      'Équipe dédiée'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Pour les grandes entreprises',
    price: 'Sur mesure',
    duration: '',
    icon: Star,
    features: [
      'Tout le plan Business',
      'Équipe dédiée',
      'Support 24/7',
      'Formations illimitées',
      'Audit mensuel',
      'Stratégie personnalisée',
      'Accès prioritaire aux nouveautés'
    ],
    notIncluded: []
  }
];

const services = [
  {
    category: 'Services Administratifs',
    items: [
      {
        name: 'Simplification Administrative',
        price: '150.000 FC',
        duration: '/mois',
        description: 'Optimisation des processus et gestion documentaire'
      },
      {
        name: 'Conformité Réglementaire',
        price: '100.000 FC',
        duration: '/mois',
        description: 'Mise en conformité et veille réglementaire'
      }
    ]
  },
  {
    category: 'Services Financiers',
    items: [
      {
        name: 'Accompagnement Financier',
        price: '200.000 FC',
        duration: '/mois',
        description: 'Stratégie financière et recherche de financements'
      },
      {
        name: 'Audit Financier',
        price: '500.000 FC',
        duration: '/audit',
        description: 'Analyse approfondie de la situation financière'
      }
    ]
  },
  {
    category: 'Formation & Développement',
    items: [
      {
        name: 'Formation Leadership',
        price: '75.000 FC',
        duration: '/personne',
        description: 'Programme de développement des compétences managériales'
      },
      {
        name: 'Coaching Personnalisé',
        price: '100.000 FC',
        duration: '/session',
        description: 'Accompagnement individuel pour dirigeants'
      }
    ]
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-highlight">Tarifs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des solutions adaptées à chaque étape de votre croissance. Choisissez le plan qui correspond le mieux à vos besoins.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? 'border-highlight shadow-xl'
                      : 'border-black/5 hover:border-highlight'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-highlight text-white text-sm font-bold rounded-full">
                      Populaire
                    </span>
                  )}

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-highlight" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400">
                        <X className="w-5 h-5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-highlight transition-colors">
                    Choisir ce plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Services à la carte</h2>
          
          <div className="space-y-12">
            {services.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((service, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border-2 border-black/5 hover:border-highlight transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold">{service.name}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-highlight">
                            {service.price}
                          </p>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                      </div>
                      <button className="w-full px-4 py-2 bg-black text-white rounded-xl font-medium hover:bg-highlight transition-colors">
                        Sélectionner
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Des questions ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Notre équipe est là pour vous aider à choisir la meilleure solution.
          </p>
          <button className="px-8 py-4 bg-highlight text-white rounded-full font-bold hover:bg-black transition-all duration-300 hover:scale-105">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}