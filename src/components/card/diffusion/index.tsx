import { ArrowUpRight, Calendar, Clock, Lock, Newspaper } from "lucide-react";
import { formatPrice, parseName } from "../../../../config";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { isOnlyDigits } from "../../../../helpers";

export default function CardDiffusion({ ...post }: any) {
    const [type] = useState<any>({
        "broadcast": "Diffusions",
        "blog": "Blog",
        "post": "actualité",
        "fiscality": "Fiscalité"
    });
    const [level] = useState<any>({
        "beginner": "Débutant",
        "intermediate": "Intermediaire",
        "advanced": "Avancé"
    });
    return <Link
        key={post.id}
        title={post.title}
        to={`/${post.type == "blog" ? "blogs" : "diffusions"}/${post.id}?name=${parseName(post.title)}`}
        className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
        <div className="relative aspect-[16/9] bg-black/5 overflow-hidden">
            <img
                src={post.cover}
                alt={post.title}
                className="w-full bg-black/5 h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {post.isPremium && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Payant</span>
                </div>
            )}
        </div>

        <div className="p-4">
            <div className="flex mb-1">
                {level[post?.level] && <span className="px-3 py-1 bg-highlight rounded-full text-sm text-white">
                    {level[post?.level]}
                </span>}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
                {post?.sectors?.filter(function (item: any, index: number) {
                    return item?.name && index <= 2
                }).map(function (item: any, index: number) {
                    return <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {item?.name}
                    </span>
                })}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-highlight transition-colors line-clamp-2">
                {post.title}
            </h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {post?.organisation ? <img
                        src={post?.organisation?.cover}
                        alt={post.organisation.username}
                        className="w-8 h-8 rounded-lg bg-black/5 object-cover"
                    /> : post?.owner?.cover && <img
                        src={post?.owner?.cover}
                        alt={post.owner.username}
                        className="w-8 h-8 rounded-lg bg-black/5 object-cover"
                    />}
                    <div className="text-sm">
                        <p className="font-medium">{post.organisation ? post.organisation.name : post.owner.username}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                            <Clock className="w-3 h-3" />
                            <span>{isOnlyDigits(post.readTime) ? post.readTime + ' Min' : `${`${post.readTime}`.replace('minutes', '')} Min`}</span>
                        </div>
                    </div>
                </div>

                {post.isPremium && (
                    <span className="text-highlight font-bold text-sm sm:text-base">
                        {formatPrice(post.price)}
                    </span>
                )}
            </div>
            <div className="mt-4 sm:mt-6 group-hover:font-bold flex justify-end">
                <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Lire plus
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </div>
    </Link>
}