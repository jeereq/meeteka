import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { LoadingCard } from '../components/LoadingCard';
import { useFetchData } from '../../hooks/useFetchData';
import { ArrowUpRight } from 'lucide-react';
import { getAppDeepLink, getWebLink } from '../../config';

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
        setPartner(partner)
      }
    })()
  }, []);

  
  useEffect(() => {
    const id = slug
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deepLink = getAppDeepLink("entreprise", id);

    if (isMobile) {
      window.location.href = deepLink;
      setTimeout(() => {
        window.location.href = getWebLink("entreprise", id);
      }, 2000);
    }
  }, [slug]);

  if (isLoading) {
    return <div className="w-full p-8">
      <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8">
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
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                      {partner?.legalForm?.name}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-white/90 max-w-3xl">
                {partner.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {partner.sectors.length != 0 && <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Nos secteurs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partner.sectors.map(({ sector: service }: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-black/5 hover:border-highlight transition-all duration-300 hover:scale-[1.02]"
                >
                  <h3 className="text-xl font-bold mb-3">{service?.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {/* Services Section */}
        {partner.services.length != 0 && <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partner.services.map((service: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-black/5 hover:border-highlight transition-all duration-300 hover:scale-[1.02]"
                >
                  <h3 className="text-xl font-bold mb-3">{service?.title}</h3>
                  <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: service?.description }} />
                  <div className="flex items-center justify-between">
                    <span className="text-highlight font-bold">{service?.minPrice} à {service?.maxPrice} {service?.currency?.symbol}</span>
                    <button className="flex items-center gap-2 text-black hover:text-highlight transition-colors">
                      En savoir plus
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {/* Testimonials Section */}
        {partner.testimonies.length != 0 && <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partner.testimonies.map((testimonial: any, index: number) => (
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
        </section>}

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