import {  
  BookOpen, 
  Coins, 
  FileText, 
  Calculator 
} from 'lucide-react';

const stats = [
  { value: '580K+', label: 'Entreprises Recensées en RDC' },
  { value: '95%', label: 'Entreprises dans l\'Informel' },
  { value: '43%', label: 'Entreprises Gérées par des Femmes' },
  { value: '80%', label: 'PME avec Difficultés de Financement' }
];

const challenges = [
  {
    icon: Coins,
    title: 'Accès limité aux financements',
    description: 'Environ 80% des petites entreprises rencontrent des difficultés de financement et d\'expansion selon la Banque Centrale du Congo.'
  },
  {
    icon: BookOpen,
    title: 'Manque de sensibilisation',
    description: 'De nombreux entrepreneurs ne sont pas informés des avantages de la formalisation ou manquent de connaissances sur les procédures.'
  },
  {
    icon: FileText,
    title: 'Complexité administrative',
    description: 'Les démarches pour formaliser une entreprise sont souvent perçues comme complexes, longues et coûteuses.'
  },
  {
    icon: Calculator,
    title: 'Système fiscal lourd',
    description: 'La fiscalité est jugée excessive, poussant les entrepreneurs à rester dans l\'informel.'
  }
];

const solutions = [
  {
    title: 'Simplification Administrative',
    description: 'Guides simplifiés, check-lists interactives et accompagnement personnalisé pour la formalisation.',
    metric: '50%',
    metricLabel: 'Réduction du temps de formalisation'
  },
  {
    title: 'Information Fiscale',
    description: 'Informations claires et mises à jour sur la fiscalité et les opportunités pour les PME.',
    metric: '80%',
    metricLabel: 'Réduction du temps de recherche'
  },
  {
    title: 'Accès aux Financements',
    description: 'Connexion avec les institutions financières et programmes de microfinance.',
    metric: '30%',
    metricLabel: 'Amélioration du taux d\'éligibilité'
  },
  {
    title: 'Formation Continue',
    description: 'Modules de formation en ligne sur le marketing, la comptabilité et la gestion d\'entreprise.',
    metric: '80%',
    metricLabel: 'Taux de complétion des formations'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Entrepreneurs Congolais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ensemble, <span className="text-highlight">Construisons</span> l'Avenir de l'Entrepreneuriat Congolais
            </h1>
            <p className="text-xl text-gray-300">
              Meet'eka accompagne les entrepreneurs congolais dans leur développement, de l'informel vers le succès durable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-highlight mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Les <span className="text-highlight">Défis</span> à Relever
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10"
                >
                  <div className="w-12 h-12 bg-highlight rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Nos <span className="heading-highlight">Solutions</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-black/5 hover:border-highlight transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-highlight">{solution.metric}</span>
                    <p className="text-sm text-gray-500">{solution.metricLabel}</p>
                  </div>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez les entrepreneurs congolais qui font confiance à Meet'eka pour leur croissance et leur transformation digitale.
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
            Commencez Maintenant
          </button>
        </div>
      </section>
    </div>
  );
}