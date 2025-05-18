import { ArrowUpRight, FileText, Coins, GraduationCap, LineChart, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    icon: FileText,
    slug: 'services.simplification-administrative.slug',
    title: 'services.simplification-administrative.title',
    description: 'services.simplification-administrative.description',
    details: [
      'services.simplification-administrative.accompagnement-dans-les-procédures-légales',
      'services.simplification-administrative.optimisation-des-processus-administratifs',
      'services.simplification-administrative.gestion-documentaire-simplifiée'
    ]
  },
  {
    icon: BookOpen,
    slug: 'services.information-fiscale.slug',
    title: 'services.information-fiscale.title',
    description: 'services.information-fiscale.description',
    details: [
      'services.information-fiscale.veille-fiscale-personnalisée',
      'services.information-fiscale.guide-des-incitations-fiscales',
      'services.information-fiscale.conseil-en-optimisation-fiscale'
    ]
  },
  {
    icon: Coins,
    slug: 'services.acces-financements.slug',
    title: 'services.acces-financements.title',
    description: 'services.acces-financements.description',
    details: [
      'services.acces-financements.mise-en-relation-avec-les-investisseurs',
      'services.acces-financements.préparation-des-dossiers-de-financement',
      'services.acces-financements.négociation-des-conditions'
    ]
  },
  {
    icon: GraduationCap,
    slug: 'services.formation-continue.slug',
    title: 'services.formation-continue.title',
    description: 'services.formation-continue.description',
    details: [
      'services.formation-continue.formations-managériales',
      'services.formation-continue.ateliers-pratiques',
      'services.formation-continue.coaching-personnalisé'
    ]
  },
  {
    icon: LineChart,
    slug: 'services.accompagnement-strategique.slug',
    title: 'services.accompagnement-strategique.title',
    description: 'services.accompagnement-strategique.description',
    details: [
      'services.accompagnement-strategique.analyse-de-marché',
      'services.accompagnement-strategique.planification-stratégique',
      'services.accompagnement-strategique.suivi-des-performances'
    ]
  },
  {
    icon: ShieldCheck,
    slug: 'services.stabilite-securite.slug',
    title: 'services.stabilite-securite.title',
    description: 'services.stabilite-securite.description',
    details: [
      'services.stabilite-securite.gestion-des-risques',
      'services.stabilite-securite.conformité-réglementaire',
      'services.stabilite-securite.protection-des-intérêts'
    ]
  }
];

export function Services() {
  const { t } = useLanguage()
  return (
    <section className="section-padding max-w-9xl" id="services">
      <div className="text-center lg:text-left mb-12">
        <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-4">
          {t("home.services.title").split(" ").map(function (element, index: number) {
            if (index == 0) {
              return <span className="w-fit" key={index}>{element}</span>
            } else {
              return <span key={index} className="ml-2 heading-highlight"> {element}</span>
            }
          })}
        </h2>
        <p className="text-responsive text-gray-600">
          {t("home.services.description")}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => { 
          const Icon = service.icon;
          return (
            <Link
              title={t(service.title)}
              key={index}
              to={`/services/${t(service.slug)}`}
              className="group relative p-6 sm:p-8 bg-white rounded-3xl hover:bg-highlight transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-black/5 hover:border-highlight"
            >
              <div className="absolute inset-0 bg-black/5 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
              <div className="relative">
                <div className="mb-6 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-highlight transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {t(service.title)}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  {t(service.description)}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                      <span className="w-1.5 h-1.5 bg-highlight rounded-full group-hover:bg-white transition-colors"></span>
                      {t(detail)}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-black font-medium group-hover:text-white transition-colors">
                  {t("services.callToAction")}
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