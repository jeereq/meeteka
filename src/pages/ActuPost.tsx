import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { MissionDetails } from '../components/MissionDetails';
import { getAppDeepLink, getWebLink } from '../../config';

export function ActuPost() {
  const { slug } = useParams();
  const { fetch: fetchDiffusions, loading: isLoading } = useFetchData({ uri: "infos-user/user-diffusion/get" })
  const [post, setPost] = useState<any>(null)

  useEffect(function () {
    let timeOutId: any = undefined;
    (async function () {

      const id = slug
      let deepLink = ''

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const { data } = await fetchDiffusions({ id: slug }, "POST")

      if (data) {
        const [post] = data.data

        if (isMobile) {
          if (post?.type ) {
            deepLink = getAppDeepLink("actu", id);
          } 
          timeOutId = setTimeout(() => {
            if (post?.type ) {
              deepLink = getWebLink("actu", id);
            } 
          }, 2000);

          window.location.href = deepLink;
        }
        setPost(post)
      }
    })()

    return function () {
      clearTimeout(timeOutId);
    }
  }, [])

  if (isLoading) {
    return <div className="grid max-w-7xl mx-auto grid-cols-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-fit"></div>
    return <MissionDetails post={post} />;
  }

} 