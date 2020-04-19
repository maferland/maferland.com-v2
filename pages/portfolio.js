import Layout from '../components/layout';
import PortfolioContent from '../site/content/portfolio.json';
import './portfolio.module.scss';

const Portfolio = () => (
  <Layout>
    <div className="page">
      <h1 className="title is-3">{PortfolioContent.title}</h1>
      <p className="subtitle is-5">{PortfolioContent.description}</p>
    </div>
  </Layout>
);

export default Portfolio;
