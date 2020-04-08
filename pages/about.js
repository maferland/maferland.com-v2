import Layout from '../components/layout';
import AboutContent from '../site/content/about.json';
import './about.scss';

const About = () => (
  <Layout>
    <div className="page fullheight">
      <h1>{AboutContent.title}</h1>
      <p>{AboutContent.description}</p>
      {AboutContent.links.map((link) => (
        <a key={link.title} href={link.url}>
          {link.title}
        </a>
      ))}
    </div>
  </Layout>
);

export default About;
