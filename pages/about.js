import Layout from '../components/layout';
import SocialLink from '../components/social-link';
import AboutContent from '../site/content/about.json';
import './about.scss';

const About = () => (
  <Layout>
    <div className="page fullheight columns is-vcentered">
      <div className="column is-6" />
      <div className="column is-6 has-text-centered">
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
