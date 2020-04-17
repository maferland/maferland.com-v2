import Layout from '../components/layout';
import ErrorContent from '../site/content/error.json';

const Custom404 = () => (
  <Layout>
    <div className="page fullheight">
      <div className="columns is-vcentered is-mobile is-marginless" style={{ height: '100%' }}>
        <h1 className="is-mono is-size-2">{ErrorContent.title}</h1>
      </div>
    </div>
  </Layout>
);

export default Custom404;
