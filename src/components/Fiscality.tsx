import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useFetchData } from '../../hooks/useFetchData';
import CardDiffusion from './card/diffusion';
import { LoadingCard } from './LoadingCard';

export function Fiscality() {
  const { t } = useLanguage()
  const [fiscalities, setFiscalities] = useState<any[]>([])
  const { fetch: fetchFiscalities, loading: isLoading } = useFetchData({ uri: "infos-user/user-fiscality/get" })

  useEffect(() => {
    (async function () {
      const { data } = await fetchFiscalities({
        type: "fiscality",
        page: 1,
        limit: 4
      }, "POST")
      if (data?.data) {
        setFiscalities(data.data)
      }
    })()
  }, []);

  return (
    <section className="section-padding bottom max-w-9xl" id="fiscality">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          {t("fiscalities.title").split(" ").map(function (item, index: number) {
            if (index == 0) {
              return <span key={index} className="px-2">{item}</span>
            } else {
              return <span key={index} className="heading-highlight">{item}</span>
            }
          })}
        </h2>
        <p className="text-xl text-gray-600">
          {t("fiscalities.description")}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading ?
          [...Array(4)].map((_, index) => (
            <LoadingCard key={index} />
          ))
          : fiscalities.map((post, index) => (
            <CardDiffusion {...post} key={index} />
          ))}
      </div>

      <div className="mt-12 w-full text-center flex flex-start">
        <Link
          to="/fiscalities"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-highlight transition-all duration-300 hover:scale-105"
        >
          <span>{t("fiscalities.more")}</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}