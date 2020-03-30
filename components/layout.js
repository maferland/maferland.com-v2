import Header from "./header";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
