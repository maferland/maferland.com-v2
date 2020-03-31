import Footer from './footer';
import Header from './header';
import './layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{props.children}</div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
