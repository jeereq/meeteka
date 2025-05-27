import { useParams } from 'react-router-dom';
import { DiffusionDetails } from '../components/DiffusionDetails';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { getAppDeepLink, getWebLink } from '../../config';

export function DiffusionPost() {
  const { slug } = useParams();
  const { fetch: fetchDiffusions, loading: isLoading } = useFetchData({ uri: "infos-user/user-diffusion/get" })
  const [post, setPost] = useState<any>(null)

  useEffect(function () {
    (async function () {
      const { data } = await fetchDiffusions({ id: slug }, "POST")
      if (data) {
        const [post] = data.data
        setPost(post)
      }
    })()
  }, [])

  useEffect(() => {
    const id = slug
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deepLink = getAppDeepLink("diffusion", id);
    let timeOutId = undefined
    if (isMobile) {
      window.location.href = deepLink;
      timeOutId = setTimeout(() => {
        window.location.href = getWebLink("diffusion", id);
      }, 2000);
    }

    return function () {
      clearTimeout(timeOutId);
    }
  }, [slug]);

  if (isLoading) {
    return <div className="grid w-1/2 mx-auto grid-cols-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-fit"></div>
    return <DiffusionDetails post={post} />;
  }

} 