import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { LoadingCard } from '../components/LoadingCard';
import { useFetchData } from '../../hooks/useFetchData';

// const partners = {
//   'meeteka-consulting': {
//     name: 'Meet\'eka Consulting',
//     logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
//     hero: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
//     description: 'Cabinet de conseil spécialisé dans l\'accompagnement des entreprises congolaises dans leur transformation digitale.',
//     founded: '2023',
//     location: 'Kinshasa, RDC',
//     expertise: ['Transformation Digitale', 'Innovation', 'Stratégie d\'Entreprise'],
//     services: [
//       {
//         name: 'Accompagnement Startup',
//         description: 'Programme personnalisé pour startups en phase de croissance',
//         price: 'À partir de 1.250.000 FC/mois',
//         details: 'Accompagnement complet incluant stratégie, mentorat et suivi personnalisé'
//       },
//       {
//         name: 'Conseil en Innovation',
//         description: 'Développement de solutions innovantes',
//         price: 'Sur devis',
//         details: 'Analyse des opportunités d\'innovation et accompagnement dans la mise en œuvre'
//       }
//     ],
//     stats: [
//       { label: 'Clients Satisfaits', value: '50+' },
//       { label: 'Projets Réussis', value: '100+' },
//       { label: 'Experts', value: '15+' }
//     ],
//     testimonials: [
//       {
//         content: "L'expertise de Meet'eka Consulting a été déterminante dans notre transformation digitale.",
//         author: 'Marie Kabongo',
//         role: 'CEO, TechCongo',
//         image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
//       }
//     ]
//   },
//   'meeteka-academy': {
//     name: 'Meet\'eka Academy',
//     logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
//     hero: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
//     description: 'Centre de formation d\'excellence dédié au développement des compétences digitales en RDC.',
//     founded: '2023',
//     location: 'Kinshasa, RDC',
//     expertise: ['Formation', 'Coaching', 'Développement des Talents'],
//     services: [
//       {
//         name: 'Formation Leadership',
//         description: 'Programme intensif de développement du leadership',
//         price: '3.750.000 FC',
//         details: 'Formation complète sur 3 mois avec certification'
//       },
//       {
//         name: 'Coaching Personnalisé',
//         description: 'Accompagnement individuel',
//         price: '500.000 FC/session',
//         details: 'Sessions individuelles avec des coachs certifiés'
//       }
//     ],
//     stats: [
//       { label: 'Apprenants', value: '200+' },
//       { label: 'Formations', value: '20+' },
//       { label: 'Formateurs', value: '10+' }
//     ],
//     testimonials: [
//       {
//         content: "La qualité des formations et l'accompagnement personnalisé sont exceptionnels.",
//         author: 'Jean Mukeba',
//         role: 'CTO, DigitalCongo',
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
//       }
//     ]
//   }
// };

export function PartnerDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [partner, setPartner] = useState<any>(null)
  const { fetch: fetchEntreprise, loading: isLoading } = useFetchData({ uri: "infos-user/entreprise-profile/get" })

  useEffect(() => {
    (async function () {
      const { data } = await fetchEntreprise({
        id: slug
      }, 'POST')
      if (data) {
        const partner = data?.data
        console.log(partner)
        setPartner(partner)
      }
    })()
  }, []);

  if (isLoading) {
    return <div className="w-full p-8">
      <div className="grid w-1/2 mx-auto grid-cols-1 gap-8">
        {[...Array(1)].map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  } else {
    if (!partner) return <div className="w-full"></div>
    return (
      <div className="min-h-screen pt-20">
        <BackButton />
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src={partner.cover}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src={partner.cover}
                  alt={partner.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover"
                />
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    {partner.name}
                  </h1>
                  {/* <div className="flex flex-wrap gap-3">
                    {partner.expertise.map((exp, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm"
                      >
                        {exp}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
              <p className="text-xl text-white/90 max-w-3xl">
                {partner.description}
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        {/* <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {partner.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border-2 border-black/5 hover:border-highlight transition-colors"
                >
                  <p className="text-4xl font-bold text-highlight mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Services Section */}
        {/* <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partner.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-black/5 hover:border-highlight transition-all duration-300 hover:scale-[1.02]"
                >
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{service.details}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-highlight font-bold">{service.price}</span>
                    <button className="flex items-center gap-2 text-black hover:text-highlight transition-colors">
                      En savoir plus
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partner.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-black text-white rounded-2xl p-8"
                >
                  <div className="flex gap-4 items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-12 bg-highlight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à Collaborer ?
            </h2>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              Contactez-nous
            </button>
          </div>
        </section>
      </div>
    );
  }


}