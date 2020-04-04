import Hero from '../components/hero';
import Layout from '../components/layout';
import './index.scss';

const Index = () => (
  <Layout>
    <Hero className="page fullheight" />
    <Hero className="page fullheight" />
    <Hero className="page fullheight" />
  </Layout>
);

export default Index;
