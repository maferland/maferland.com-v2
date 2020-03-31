import Footer from './footer';
import Header from './header';
import './layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="columns is-centered is-marginless main">
        <div className="column is-11 is-flex">
          <div>{props.children}</div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
