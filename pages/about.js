import Layout from '../components/layout';
import ProfileImage from '../components/profile-image';
import SocialLink from '../components/social-link';
import AboutContent from '../site/content/about.json';
import './about.module.scss';

const About = () => (
  <Layout>
    <div className="page columns is-vcentered is-centered">
      <div className="column is-4-widescreen is-5-desktop is-6-tablet is-8-mobile is-offset-2-mobile">
        <ProfileImage
          image={AboutContent.profileImage}
          underImage={AboutContent.underProfileImage}
          alt={AboutContent.profileAlt}
        />
      </div>
      <div className="column is-6 is-offset-1 has-text-centered-desktop">
        <h1 className="title is-size-3-desktop is-size-4-touch">{AboutContent.title}</h1>
        <p className="subtitle is-size-4-desktop is-size-5-touch">{AboutContent.description}</p>
        <div className="is-relative has-text-centered">
          {AboutContent.links.map((link) => (
            <SocialLink key={link.icon} {...link} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
