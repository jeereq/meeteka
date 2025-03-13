import { ArrowUpRight, Calendar, Clock, Lock, Newspaper } from "lucide-react";
import { formatPrice, parseName } from "../../../../config";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function CardEvent({ ...post }: any) {
    const [type] = useState<any>({
        "broadcast": "Diffusions",
        "blog": "Blog",
        "post": "actualité"
    });
    return <Link
        key={post?.id}
        to={`/events/${post?.id}?name=${parseName(post?.title)}`}
        className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
        <div className="relative aspect-[16/9] overflow-hidden">
            {post?.cover && <img
                src={post?.cover}
                alt={post?.title}
                className="w-full bg-black/5 h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />}
            {post?.isPremium && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Premium</span>
                </div>
            )}
            {type[post?.type] && <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white text-black rounded-full text-sm">
                <Newspaper className="w-4 h-4" />
                <span>{type[post?.type]}</span>
            </div>}
        </div>

        <div className="p-4 sm:p-6 ">
            <div className="flex flex-wrap gap-2 mb-4">
                {post?.sectors?.filter(function (item: any) {
                    return item?.name
                }).map(function (item: any) {
                    return <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {item?.name}
                    </span>
                })}
                {post?.startDate && <span className="px-3 py-1 flex gap-2 items-center bg-black/5 rounded-full text-sm">
                    <Calendar className="w-3 h-3" />   {new Date(post?.startDate).toLocaleDateString()}
                </span>}
                {post?.endDate && <span className="px-3 py-1 flex gap-2 items-center bg-black/5 rounded-full text-sm">
                    <Calendar className="w-3 h-3" />   {new Date(post?.endDate).toLocaleDateString()}
                </span>}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-highlight transition-colors line-clamp-2">
                {post?.title}
            </h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={post?.owner?.cover}
                        alt={post?.owner?.username}
                        className="w-8 h-8 rounded-full bg-black/5 object-cover"
                    />
                    <div className="text-sm">
                        <p className="font-medium">{post?.owner?.username}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
                            <Clock className="w-3 h-3" />
                            <span>{post?.readTime}</span>
                        </div>
                    </div>
                </div>

                {post?.isPremium && (
                    <span className="text-highlight font-bold text-sm sm:text-base">
                        {formatPrice(post?.price)}
                    </span>
                )}
            </div>

            <div className="mt-4 sm:mt-6 flex justify-end">
                <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Lire plus
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </div>
    </Link>
}