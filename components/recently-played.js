/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRecentlyPlayed } from '@maferland/spotify-react';
import facepaint from 'facepaint';

const mq = facepaint(['@media(max-width: 1200px)']);

const Track = ({ trackName, trackUrl, albumName, albumImageUrl, index }) => {
  return (
    <a
      css={
        index > 3
          ? mq({
              display: ['flex', 'none'],
            })
          : { display: 'flex' }
      }
      href={trackUrl}
      style={{
        color: '#303030',
        fontWeight: '700',
        textDecoration: 'underline',
        flexDirection: 'column',
      }}
    >
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
      <p style={{ marginTop: '0.25em' }}>{trackName || 'Loading...'}</p>
    </a>
  );
};

const Grid = ({ children }) => (
  <div css={mq({ display: 'grid', gridTemplateColumns: ['repeat(5, 1fr)', 'repeat(2,1fr)'], gridGap: '1em' })}>
    {children}
  </div>
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
            <Track key={i} index={i} />
          ))}
      </Grid>
    );
  }

  return (
    <Grid>
      {data.items.map((item, i) => {
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
            index={i}
          />
        );
      })}
    </Grid>
  );
};

export default RecentlyPlayed;
