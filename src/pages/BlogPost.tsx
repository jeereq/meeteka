import { useParams } from 'react-router-dom';
import { DiffusionDetails } from '../components/DiffusionDetails';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';

export function BlogPostDetails() {
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
    const deepLink = `meeteka://service/${id}`;
    console.log(isMobile)
    if (isMobile) {
      window.location.href = deepLink;
      setTimeout(() => {
        window.location.href = `/service/${id}`;
      }, 1000);
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