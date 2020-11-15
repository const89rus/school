import React, { useCallback, useState, useEffect, useContext, useRef } from 'react';

import { AuthContext } from 'data/auth/AuthContext';

interface Props {
  component: React.ElementType<any>;
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/channels';

export const PlayListContainer: React.FC<Props> = ({ component: Component }) => {
  const [videos, setVideos] = useState<any>(null);

  const mountedRef = useRef(true);

  const { currentUser } = useContext(AuthContext);

  const getVideos = useCallback(async () => {
    if (!currentUser) return;
    try {
      console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

      const res = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&id=UCN8VVKCpk37FUD6FK5XyqCQ&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();

      if (!data || !data.items) return;

      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    getVideos();
  }, [currentUser, getVideos]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return <Component videos={videos} />;
};
