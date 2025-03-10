import { Link } from "react-router-dom";
import { parseName } from "../../../../config";
import { ArrowUpRight } from "lucide-react";

export default function CardEntreprise({ ...partner }) {
    return <Link
        key={partner?.id}
        to={`/entreprises/${partner?.id}?name=${parseName(partner?.name)}`}
        className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <img
                    src={partner?.cover}
                    alt={partner?.name}
                    className="w-12 h-12 bg-black/5 sm:w-16 sm:h-16 rounded-xl object-cover"
                />
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                        {partner?.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                            {partner?.legalForm?.name}
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: partner?.description }} />

            {partner?.services.length != 0 && <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                Services
            </h2>}
            <div className="gap-3 sm:gap-4 grid grid-cols-2 pb-5">
                {partner?.services.map(({ sector: service }: any, i: number) => (
                    <div
                        key={i}
                        className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl"
                    >
                        <div>
                            <h3 className="text-sm sm:text-base font-medium mb-1">{service.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                                {service.description}
                            </p>
                        </div>
                        <span className="text-highlight font-bold text-sm sm:text-base whitespace-nowrap ml-4">
                            {service.price}
                        </span>
                    </div>
                ))}
            </div>
            {partner?.sectors.length != 0 && <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                Secteurs
            </h2>}
            <div className="gap-3 sm:gap-4 grid grid-cols-2">
                {partner?.sectors.map(({ sector: service }: any, i: number) => (
                    <div
                        key={i}
                        className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl"
                    >
                        <div>
                            <h3 className="text-sm sm:text-base font-medium mb-1">{service.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-end">
                <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Voir les détails
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </div>
    </Link>
}