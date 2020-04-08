import Layout from '../components/layout';
import SocialLink from '../components/social-link';
import AboutContent from '../site/content/about.json';
import './about.scss';

const About = () => (
  <Layout>
    <div className="page fullheight">
      <h1>{AboutContent.title}</h1>
      <p>{AboutContent.description}</p>
      {AboutContent.links.map((link) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </div>
  </Layout>
);

export default About;
