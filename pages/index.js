import Hero from '../components/hero';
import Layout from '../components/layout';
import IndexContent from '../site/content/home.json';
import './index.module.scss';

const Index = () => (
  <Layout>
    <section className="page fullheight">
      <Hero className="fullheight" suffixes={IndexContent.suffixes} />
    </section>
    <section className="fullheight" css={{ position: 'relative' }}>
      <div
        css={{
          position: 'absolute',
          width: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
          zIndex: -1,
        }}
        id="background"
      >
        <div
          css={{
            backgroundColor: 'black',
            opacity: 0.5,
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
        />
        <video
          autoPlay
          muted
          loop
          css={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="page"
        css={{
          color: 'var(--white)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          opacity: 0.95,
        }}
      >
        <h2 css={{ fontSize: 'var(--font-xxl)' }}>Identity</h2>
        <p css={{ fontSize: 'var(--font-m)', marginTop: '-1em' }}>/aɪˈdentɪti/</p>
      </div>
    </section>
  </Layout>
);

export default Index;
