import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { MissionDetails } from '../components/MissionDetails';

export function MissionPost() {
  const { slug } = useParams();
  const { fetch: fetchDiffusions, loading: isLoading } = useFetchData({ uri: "infos-user/connection/get" })
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

  if (isLoading) {
    return <div className="grid w-1/2 mx-auto grid-cols-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-fit"></div>
    return <MissionDetails post={post} />;
  }

} 