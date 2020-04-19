import Layout from '../components/layout';
import SocialLink from '../components/social-link';
import AboutContent from '../site/content/about.json';
import './about.module.scss';

const About = () => (
  <Layout>
    <div className="page columns is-vcentered is-centered">
      <div className="column is-3-fullhd is-4-widescreen is-5-desktop is-6-tablet is-8-mobile is-offset-2-mobile">
        <img className="profile-image" src={AboutContent.profileImage} alt={AboutContent.profileAlt} />
      </div>
      <div className="column is-6 is-offset-1 has-text-centered">
        <h1 className="title is-3">{AboutContent.title}</h1>
        <p className="subtitle is-4">{AboutContent.description}</p>
        <div className="is-relative">
          {AboutContent.links.map((link) => (
            <SocialLink key={link.icon} {...link} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
