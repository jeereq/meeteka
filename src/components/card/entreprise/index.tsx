import { Link } from "react-router-dom";
import { parseName } from "../../../../config";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function CardEntreprise({ ...partner }) {
    return <Link
        key={partner?.id}
        title={partner?.name}
        to={`/entreprises/${partner?.id}?name=${parseName(partner?.name)}`}
        className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
        <div className="p-4 sm:p-5 lg:p-6">
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
                    <div className="gap-2 flex items-center lowercase justify-start flex-wrap">
                        <span className="px-3 block w-fit py-1 bg-black/20 rounded-full text-sm">
                            {partner?.legalForm?.name}
                        </span>
                        {partner.phone && <a onClick={(e) => {
                            e.stopPropagation();
                        }} href={`tel:${partner.phone}`} target="_blank" className="px-3 block w-fit py-1 bg-black/20 rounded-full text-sm">
                            <Phone className="w-4 h-4" />
                        </a>}
                        {partner.email && <a onClick={(e) => {
                            e.stopPropagation();
                        }} href={`mailto:${partner.email}`} target="_blank" className="px-3 block w-fit py-1 bg-black/20 rounded-full text-sm">
                            <Mail className="w-4 h-4" />
                        </a>}
                    </div>
                </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: partner?.description }} />
            {partner?.sectors && partner?.sectors?.length != 0 && <h2 className="text-md sm:text-lg font-bold mb-2 group-hover:text-highlight transition-colors">
                Secteurs
            </h2>}
            <div className="gap-2 sm:gap-3 flex items-center flex-wrap pb-5">
                {partner?.sectors && partner?.sectors?.map(({ sector: service }: any, i: number) => (
                    (i <= 2) ?
                        <div
                            key={i}
                            className="flex justify-center items-center py-2 px-3 bg-gray-100 rounded-full"
                        >
                            <h3 className="text-xs sm:text-sm font-medium mb-1">{service.name}</h3>
                        </div> : null
                ))}
            </div>
            <div className="mt-6 flex justify-end">
                <span className="inline-flex group-hover:font-bold items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Contactez nous
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </div>
    </Link>
}