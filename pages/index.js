import Hero from '../components/hero';
import Layout from '../components/layout';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import IndexContent from '../site/content/home.json';

const Index = () => (
  <Layout>
    <Section className="page">
      <Hero className="fullheight" suffixes={IndexContent.suffixes} />
      <SeeMore
        sectionId="identity"
        css={{
          width: '100%',
        }}
      />
    </Section>
    <Section id="identity" className="fullheight" css={{ position: 'relative', display: 'block' }}>
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          opacity: 0.95,
        }}
      >
        <div>
          <h2 css={{ fontSize: 'var(--font-xxl)' }}>Identity</h2>
          <p css={{ fontSize: 'var(--font-m)', marginTop: '-1em' }}>/aɪˈdentɪti/</p>
        </div>
        <div css={{ fontSize: 'var(--font-m)', maxWidth: '375px' }}>
          {IndexContent.identity.line1}
          <br />
          {IndexContent.identity.line2}
          <br />
          {IndexContent.identity.line3}
        </div>
      </div>
    </Section>
  </Layout>
);

export default Index;
