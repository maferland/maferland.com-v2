import Hero from '../components/hero';
import Layout from '../components/layout';
import IndexContent from '../site/content/home.json';
import './index.module.scss';

const Index = () => (
  <Layout>
    <div className="page">
      <Hero className="fullheight" suffixes={IndexContent.suffixes} />
    </div>
  </Layout>
);

export default Index;
