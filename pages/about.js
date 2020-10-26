/** @jsx jsx */
import { jsx } from '@emotion/core';
import facepaint from 'facepaint';
import Layout from '../components/layout';
import ProfileImage from '../components/profile-image';
import RecentlyPlayed from '../components/recently-played';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import SocialLink from '../components/social-link';
import AboutContent from '../site/content/about.json';
import './about.module.scss';

const mq = facepaint(['@media(max-width: 1200px)']);

const About = () => (
  <Layout>
    <Section className="page">
      <div className="column is-4-widescreen is-5-desktop is-6-tablet is-8-mobile">
        <ProfileImage
          image={AboutContent.profileImage}
          underImage={AboutContent.underProfileImage}
          alt={AboutContent.profileAlt}
        />
      </div>
      <div className="column is-6 is-offset-1 has-text-centered-desktop" css={mq({ flex: [1, 0] })}>
        <h1 className="title is-size-3-desktop is-size-4-touch">{AboutContent.title}</h1>
        <p className="subtitle is-size-4-desktop is-size-5-touch">{AboutContent.description}</p>
        <div className="is-relative has-text-centered">
          {AboutContent.links.map((link) => (
            <SocialLink key={link.icon} {...link} />
          ))}
        </div>
      </div>
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
