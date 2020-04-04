import Footer from './footer';
import Header from './header';
import './layout.scss';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
