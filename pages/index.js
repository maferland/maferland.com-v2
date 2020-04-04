import Hero from '../components/hero';
import Layout from '../components/layout';
import './index.scss';

const Index = () => (
  <Layout>
    <Hero className="page fullheight" />
    <div className="fullheight has-pink-background" />
    <div className="fullheight has-purple-background" />
  </Layout>
);

export default Index;
