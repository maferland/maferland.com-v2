import Header from "./header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export const withLayout = Page => {
  class Layout extends React.Component {
    static async getInitialProps(ctx) {
      let pageProps = {};

      if (Page.getInitialProps) {
        pageProps = await Page.getInitialProps(ctx);
      }

      return {
        pageProps: pageProps
      };
    }

    render() {
      return (
        <div style={layoutStyle}>
          <Header />
          <Page {...this.props.pageProps} />
        </div>
      );
    }
  }

  return Layout;
};

export default withLayout;
