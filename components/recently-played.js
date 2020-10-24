import React from 'react';
import { useRecentlyPlayed } from '@maferland/spotify-react';

const RecentlyPlayed = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useRecentlyPlayed(12166023407);

  if (isLoading || error || !data.items) {
    return (
      Array(5)
        .fill(undefined)
        // eslint-disable-next-line react/no-array-index-key
        .map((_, i) => <p key={i}>loading</p>)
    );
  }

  const Track = ({
    track: {
      name,
      album: { name: albumName, images } = { images: [] },
      external_urls: { spotify: url },
    },
  }) => {
    const medium = images.length > 0 ? images[0] : {};
    return (
      <a href={url}>
        <img src={medium.url} alt={`${albumName} album cover`} />
        {name}
      </a>
    );
  };

  return (
    <>
      {data.items.map((item) => (
        <Track key={item.played_at} {...item} />
      ))}
    </>
  );
};

export default RecentlyPlayed;
