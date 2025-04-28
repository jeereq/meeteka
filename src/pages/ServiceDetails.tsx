import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { FileText, BookOpen, Check, Coins, GraduationCap, LineChart, ShieldCheck } from 'lucide-react';
// import { ArrowUpRight } from 'lucide-react';

const services = {
  'simplification-administrative': {
    icon: FileText,
    title: 'Simplification Administrative',
    description: 'Nous facilitons vos démarches administratives pour vous permettre de vous concentrer sur votre cœur de métier.',
    hero: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '150.000 FC/mois',
    features: [
      'Accompagnement dans les procédures légales',
      'Optimisation des processus administratifs',
      'Gestion documentaire simplifiée',
      'Suivi des dossiers en temps réel',
      'Support dédié',
      'Assistance pour les autorisations et licences',
      'Gestion des relations avec les administrations'
    ],
    benefits: [
      'Gain de temps significatif',
      'Réduction des erreurs administratives',
      'Conformité assurée',
      'Processus optimisés',
      'Meilleure visibilité sur vos obligations',
      'Réduction des coûts administratifs'
    ],
    process: [
      {
        title: 'Audit Initial',
        description: 'Analyse complète de vos processus actuels et identification des points d\'amélioration'
      },
      {
        title: 'Optimisation',
        description: 'Mise en place de solutions adaptées et simplification des procédures'
      },
      {
        title: 'Formation',
        description: 'Formation de votre équipe aux nouveaux processus et outils'
      },
      {
        title: 'Suivi',
        description: 'Accompagnement continu et ajustements selon vos besoins'
      }
    ]
  },
  'information-fiscale': {
    icon: BookOpen,
    title: 'Information Fiscale',
    description: 'Accédez à toutes les informations essentielles sur la fiscalité et les incitations disponibles en RDC.',
    hero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '100.000 FC/mois',
    features: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale',
      'Alertes réglementaires',
      'Support expert',
      'Accès à notre base de données fiscale',
      'Rapports fiscaux trimestriels'
    ],
    benefits: [
      'Conformité fiscale assurée',
      'Optimisation des avantages fiscaux',
      'Réduction des risques',
      'Décisions éclairées',
      'Économies fiscales substantielles',
      'Meilleure planification financière'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse approfondie de votre situation fiscale actuelle'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration d\'une stratégie fiscale optimisée'
      },
      {
        title: 'Mise en place',
        description: 'Application des recommandations et suivi des résultats'
      },
      {
        title: 'Monitoring',
        description: 'Veille continue et ajustements selon l\'évolution réglementaire'
      }
    ]
  },
  'acces-financements': {
    icon: Coins,
    title: 'Accès aux Financements',
    description: 'Nous vous aidons à trouver les financements adaptés à vos projets et à optimiser vos chances de succès.',
    hero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '100.000 FC/mois',
    features: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale',
      'Alertes réglementaires',
      'Support expert',
      'Accès à notre base de données fiscale',
      'Rapports fiscaux trimestriels'
    ],
    benefits: [
      'Conformité fiscale assurée',
      'Optimisation des avantages fiscaux',
      'Réduction des risques',
      'Décisions éclairées',
      'Économies fiscales substantielles',
      'Meilleure planification financière'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse approfondie de votre situation fiscale actuelle'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration d\'une stratégie fiscale optimisée'
      },
      {
        title: 'Mise en place',
        description: 'Application des recommandations et suivi des résultats'
      },
      {
        title: 'Monitoring',
        description: 'Veille continue et ajustements selon l\'évolution réglementaire'
      }
    ]
  },
  'formation-continue': {
    icon: GraduationCap,
    title: 'Formation continue',
    description: 'Accédez à toutes les informations essentielles sur la fiscalité et les incitations disponibles en RDC.',
    hero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '100.000 FC/mois',
    features: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale',
      'Alertes réglementaires',
      'Support expert',
      'Accès à notre base de données fiscale',
      'Rapports fiscaux trimestriels'
    ],
    benefits: [
      'Conformité fiscale assurée',
      'Optimisation des avantages fiscaux',
      'Réduction des risques',
      'Décisions éclairées',
      'Économies fiscales substantielles',
      'Meilleure planification financière'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse approfondie de votre situation fiscale actuelle'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration d\'une stratégie fiscale optimisée'
      },
      {
        title: 'Mise en place',
        description: 'Application des recommandations et suivi des résultats'
      },
      {
        title: 'Monitoring',
        description: 'Veille continue et ajustements selon l\'évolution réglementaire'
      }
    ]
  },
  'accompagnement-strategique': {
    icon: LineChart,
    title: 'Accompagnement Stratégique',
    description: 'Accédez à toutes les informations essentielles sur la fiscalité et les incitations disponibles en RDC.',
    hero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '100.000 FC/mois',
    features: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale',
      'Alertes réglementaires',
      'Support expert',
      'Accès à notre base de données fiscale',
      'Rapports fiscaux trimestriels'
    ],
    benefits: [
      'Conformité fiscale assurée',
      'Optimisation des avantages fiscaux',
      'Réduction des risques',
      'Décisions éclairées',
      'Économies fiscales substantielles',
      'Meilleure planification financière'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse approfondie de votre situation fiscale actuelle'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration d\'une stratégie fiscale optimisée'
      },
      {
        title: 'Mise en place',
        description: 'Application des recommandations et suivi des résultats'
      },
      {
        title: 'Monitoring',
        description: 'Veille continue et ajustements selon l\'évolution réglementaire'
      }
    ]
  },
  'stabilite-securite': {
    icon: ShieldCheck,
    title: 'Stabilité & Sécuité',
    description: 'Accédez à toutes les informations essentielles sur la fiscalité et les incitations disponibles en RDC.',
    hero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    price: '100.000 FC/mois',
    features: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale',
      'Alertes réglementaires',
      'Support expert',
      'Accès à notre base de données fiscale',
      'Rapports fiscaux trimestriels'
    ],
    benefits: [
      'Conformité fiscale assurée',
      'Optimisation des avantages fiscaux',
      'Réduction des risques',
      'Décisions éclairées',
      'Économies fiscales substantielles',
      'Meilleure planification financière'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse approfondie de votre situation fiscale actuelle'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration d\'une stratégie fiscale optimisée'
      },
      {
        title: 'Mise en place',
        description: 'Application des recommandations et suivi des résultats'
      },
      {
        title: 'Monitoring',
        description: 'Veille continue et ajustements selon l\'évolution réglementaire'
      }
    ]
  }
};


export function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = services[slug as keyof typeof services];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20">
        <BackButton />
        <LoadingSpinner />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen pt-20">
        <BackButton />
        <EmptyState
          title="Service non trouvé"
          description="Le service que vous recherchez n'existe pas ou a été déplacé."
        />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <BackButton />
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src={service.hero}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-highlight rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Caractéristiques</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-6 h-6 text-highlight" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">Bénéfices</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 hover:bg-highlight/10 transition-colors"
                    >
                      <p className="text-lg font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Notre Processus</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <span className="absolute -top-4 -right-4 w-8 h-8 bg-highlight text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Tarification</h2>
              <p className="text-xl text-gray-600 mb-8">
                Investissez dans votre succès avec notre service professionnel
              </p>
              <div className="inline-block bg-gray-50 rounded-2xl p-8">
                <p className="text-4xl font-bold text-highlight mb-2">
                  {service.price}
                </p>
                <button className="mt-6 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-highlight transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Commencer maintenant
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section> */}
        {/* CTA Section */}
        <section className="py-16 bg-highlight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Transformer Votre Business ?
            </h2>
            <p className="text-xl mb-8">
              Contactez-nous pour une consultation personnalisée
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              Parlons de votre projet
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}