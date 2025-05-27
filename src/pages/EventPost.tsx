import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { LoadingCard } from '../components/LoadingCard';
import { EventDetails } from '../components/EventDetails';
import { getAppDeepLink, getWebLink } from '../../config';

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
  useEffect(() => {
    const id = slug
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deepLink = getAppDeepLink("event", id);
    let timeOutId = undefined
    if (isMobile) {
      window.location.href = deepLink;
      timeOutId = setTimeout(() => {
        window.location.href = getWebLink("event", id);
      }, 2000);
    }

    return function () {
      clearTimeout(timeOutId);
    }
  }, [slug]);

  if (isLoading) {
    return <div className="grid max-w-7xl mx-auto grid-clos-1 p-8">
      {[...Array(1)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  } else {
    if (!post) return <div className="w-fit"></div>
    return <EventDetails post={post} />;
  }

} 