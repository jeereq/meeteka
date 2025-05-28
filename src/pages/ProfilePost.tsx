import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { getAppDeepLink, getWebLink } from '../../config';
import CardEntreprise from '../components/card/entreprise';
import CardService from '../components/card/service';

export function ProfilePost() {
  const { slug } = useParams();
  const { fetch, loading: isLoading } = useFetchData({ uri: "infos-user/profile/get" })
  const [post, setPost] = useState<any>(null)

  useEffect(function () {
    (async function () {
      const { data } = await fetch({ id: slug }, "POST")
      console.log("data", data)
      if (data) {
        const { user } = data
        console.log("post", data)
        setPost(user)
      }
    })()
  }, [])

  useEffect(() => {
    const id = slug
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deepLink = getAppDeepLink("profile", id);

    if (isMobile) {
      window.location.href = deepLink;
      setTimeout(() => {
        window.location.href = getWebLink("profile", id);
      }, 2000);
    }
  }, [slug]);

  if (isLoading) {
    return <div className="grid max-w-9xl mx-auto grid-clos-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-full h-screen bg-gray-100"></div>
    return <div className="w-full  bg-gray-100">
      {post.banner && <div className={`w-full h-[350px] relative bg-cover bg-[url(${post.banner})]`}>
        <img src={post.banner} style={{ objectFit: "cover" }} className='h-full w-full bg-cover' alt={post.username} />
        <div className="w-full h-fit absolute -bottom-[50px]">
          <img src={post.cover} style={{ objectFit: "cover" }} className='h-[100px] border-2 border-red-500 rounded-full w-[100px] mx-auto bg-cover' alt={post.username} />
        </div>
      </div>}
      <div className="max-w-7xl min-h-[50vh] md:max-w-4xl bg-white mx-auto px-4 sm:px-6 lg:px-8">
        <header className='pt-[50px] pb-8 group text-center border-b'>
          <h1 className="font-bold text-2xl  text-gray-900 mt-4 mb-2">{post.username}</h1>
          {post.email && <a href={`mailto:${post.email}`} target='_blank' className="group-hover:text-red-500 group-hover:font-bold text-gray-600 mb-4">{post.email}</a>}
          {post.phone && <p className="text-gray-600 mb-4">{post.phone}</p>}
        </header>
        <main className="w-full py-4">
          {post?.skills && post?.skills?.length != 0 && <div className="w-full">
            <h2 className='font-bold text-xl text-gray-900 mb-4'>
              Compétences
            </h2>
            <div className="w-full flex flex-wrap justify-between">
              {post.skills && post.skills.map((skill: any, index: number) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 mr-2 mb-2">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>}
          {(post?.entreprises && post?.entreprises?.length != 0) && <div className="w-full">
            <h2 className='font-bold text-xl text-gray-900 my-4'>
              Entreprises
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {post.entreprises.map((partner: any, index: number) => (
                <CardEntreprise {...partner} key={index} />
              ))}
            </div>
          </div>}
          {(post?.projets && post?.projets?.length != 0) && <div className="w-full">
            <h2 className='font-bold text-xl text-gray-900 my-4'>
              Missions Réalisés
            </h2>
            <div className="w-full flex flex-wrap justify-between"></div>
          </div>}
          {(post?.projets && post?.projets?.length != 0) && <div className="w-full">
            <h2 className='font-bold text-xl text-gray-900 my-4'>
              Projets
            </h2>
          </div>}
          <div className="w-full flex flex-wrap justify-between"></div>
          {(post?.services && post?.services?.length != 0) && <div className="w-full">
            <h2 className='font-bold text-xl text-gray-900 my-4'>
              Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {post?.services?.map((service: any, index: number) => (
                <CardService {...service} key={index} />
              ))}
            </div>
          </div>}
        </main>
      </div>
    </div>
  }

} 