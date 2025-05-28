import { ArrowUpRight } from "lucide-react";

export default function CardService({ ...service }) {
    return <a
        key={service?.id}
        title={service?.title}
        target="_blank"
        href={`mailto:${service?.email}?subject=${service?.title}&body=Bonjour, je suis intéressé par votre service ${service?.title} et j'aimerais en savoir plus.`}
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
        <div className="p-4 sm:p-5 lg:p-6">
            <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <img
                    src={service?.cover}
                    alt={service?.name}
                    className="w-12 h-12 bg-black/5 sm:w-16 sm:h-16 rounded-xl object-cover"
                />
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                        {service?.title}
                    </h2>
                    <div className="gap-2 flex items-center lowercase justify-start flex-wrap">
                        <span className="px-3 block w-fit py-1 bg-black/5 rounded-full text-xs">
                            {service.minPrice}  {service?.currency?.symbol}
                        </span> -
                        <span className="px-3 block w-fit py-1 bg-black/5 rounded-full text-xs">
                            {service.maxPrice}   {service?.currency?.symbol}
                        </span>
                    </div>
                </div>
            </div>
            <h2 className="text-md mb-2 group-hover:text-highlight transition-colors">
                {service?.email}
            </h2>
            <div className="mt-6 flex justify-end">
                <span className="inline-flex group-hover:font-bold items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Contactez nous
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </div>
    </a>
}