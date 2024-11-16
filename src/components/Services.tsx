import React from 'react';
import { ArrowUpRight, FileText, Coins, GraduationCap, LineChart, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: FileText,
    slug: 'simplification-administrative',
    title: 'Simplification Administrative',
    description: 'Nous facilitons vos démarches administratives pour vous permettre de vous concentrer sur votre cœur de métier.',
    details: [
      'Accompagnement dans les procédures légales',
      'Optimisation des processus administratifs',
      'Gestion documentaire simplifiée'
    ]
  },
  {
    icon: BookOpen,
    slug: 'information-fiscale',
    title: 'Information Fiscale',
    description: 'Accédez à toutes les informations essentielles sur la fiscalité et les incitations disponibles en RDC.',
    details: [
      'Veille fiscale personnalisée',
      'Guide des incitations fiscales',
      'Conseil en optimisation fiscale'
    ]
  },
  {
    icon: Coins,
    slug: 'acces-financements',
    title: 'Accès aux Financements',
    description: 'Nous vous accompagnons dans la recherche et la sécurisation de financements adaptés à vos besoins.',
    details: [
      'Mise en relation avec les investisseurs',
      'Préparation des dossiers de financement',
      'Négociation des conditions'
    ]
  },
  {
    icon: GraduationCap,
    slug: 'formation-continue',
    title: 'Formation Continue',
    description: 'Développez les compétences de votre équipe grâce à nos programmes de formation sur mesure.',
    details: [
      'Formations managériales',
      'Ateliers pratiques',
      'Coaching personnalisé'
    ]
  },
  {
    icon: LineChart,
    slug: 'accompagnement-strategique',
    title: 'Accompagnement Stratégique',
    description: 'Bénéficiez d\'un suivi personnalisé pour optimiser votre croissance et votre développement.',
    details: [
      'Analyse de marché',
      'Planification stratégique',
      'Suivi des performances'
    ]
  },
  {
    icon: ShieldCheck,
    slug: 'stabilite-securite',
    title: 'Stabilité & Sécurité',
    description: 'Nous vous aidons à naviguer dans l\'environnement économique congolais en toute sécurité.',
    details: [
      'Gestion des risques',
      'Conformité réglementaire',
      'Protection des intérêts'
    ]
  }
];

export function Services() {
  return (
    <section className="section-padding" id="services">
      <div className="text-center lg:text-left mb-12">
        <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-4">
          Nos <span className="heading-highlight">Services</span>
        </h2>
        <p className="text-responsive text-gray-600">
          Des solutions complètes pour votre réussite entrepreneuriale en RDC
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group relative p-6 sm:p-8 bg-white rounded-3xl hover:bg-highlight transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-black/5 hover:border-highlight"
            >
              <div className="absolute inset-0 bg-black/5 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
              <div className="relative">
                <div className="mb-6 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-highlight transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                      <span className="w-1.5 h-1.5 bg-highlight rounded-full group-hover:bg-white transition-colors"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-black font-medium group-hover:text-white transition-colors">
                  En savoir plus
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}