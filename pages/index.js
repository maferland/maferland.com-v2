import facepaint from 'facepaint';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import IndexContent from '../site/content/home.json';

const mq = facepaint(['@media(max-width: 1200px)']);

const Index = () => (
  <Layout>
    <Section className="page">
      <Hero className="fullheight" suffixes={IndexContent.suffixes} />
    </Section>
  </Layout>
);

export default Index;
