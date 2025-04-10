import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { EventDetails } from '../components/EventDetails';

export function EventPost() {
  const { slug } = useParams();
  const { fetch: fetchEvents, loading: isLoading } = useFetchData({ uri: "infos-user/user-event/get" })
  const [post, setPost] = useState<any>(null)

  useEffect(function () {
    (async function () {
      const { data } = await fetchEvents({ id: slug }, "POST")
      if (data) {
        const [post] = data.data
        setPost(post)
      }
    })()
  }, [])

  if (isLoading) {
    return <div className="grid max-w-9xl mx-auto grid-clos-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-fit"></div>
    return <EventDetails post={post} />;
  }

} 