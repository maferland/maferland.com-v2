import React from 'react';
import { useRecentlyPlayed } from '@maferland/spotify-react';

const Track = ({ trackName, trackUrl, albumName, albumImageUrl }) => {
  return (
    <a href={trackUrl} style={{ color: '#303030', fontWeight: '700', textDecoration: 'underline' }}>
      <img
        src={albumImageUrl || ''}
        alt={albumName ? `${albumName} album cover` : ''}
        style={{
          borderRadius: '0.25em',
          boxShadow: '4px 2px 2px DimGray',
          paddingTop: !albumName ? '100%' : undefined,
          backgroundColor: 'rgb(220, 220, 220, 0.2)',
        }}
        height="300"
        width="300"
      />
      {trackName || 'Loading...'}
    </a>
  );
};

const Grid = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '1em' }}>{children}</div>
);
const RecentlyPlayed = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useRecentlyPlayed(12166023407);

  if (isLoading || error || !data.items) {
    return (
      <Grid>
        {Array(10)
          .fill(undefined)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Track key={i} />
          ))}
      </Grid>
    );
  }

  return (
    <Grid>
      {data.items.map((item) => {
        const {
          track: {
            name: trackName,
            album: { name: albumName, images } = { images: [] },
            external_urls: { spotify: trackUrl },
          },
        } = item;
        const medium = images.length > 0 ? images[1] : {};
        return (
          <Track
            key={item.played_at}
            trackName={trackName}
            trackUrl={trackUrl}
            albumName={albumName}
            albumImageUrl={medium.url}
          />
        );
      })}
    </Grid>
  );
};

export default RecentlyPlayed;
