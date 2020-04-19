import Footer from './footer';
import Header from './header';
import './layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
      <Footer className="footer" />
    </>
  );
};

export default Layout;
