/** @jsx jsx */
import { jsx } from '@emotion/core';
import facepaint from 'facepaint';
import Layout from '../components/layout';
import RecentlyPlayed from '../components/recently-played';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import AboutComponent from '../components/about';
import AboutContent from '../site/content/about.json';
import './about.module.scss';

const mq = facepaint(['@media(max-width: 1200px)']);

const About = () => (
  <Layout>
    <Section className="page">
      <AboutComponent />
      <SeeMore sectionId="spotify" />
    </Section>

    <Section
      css={mq({ backgroundColor: '#f3e2ea', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
      id="spotify"
    >
      <div className="page columns is-mobile is-vcentered is-centered is-marginless">
        <div>
          <h2 className="title is-size-3-desktop is-size-4-touch">{AboutContent.spotifyTitle}</h2>
          <p className="subtitle is-size-4-desktop is-size-5-touch">{AboutContent.spotifyDescription}</p>
          <RecentlyPlayed />
        </div>
      </div>
    </Section>
  </Layout>
);

export default About;
