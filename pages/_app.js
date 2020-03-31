import 'purecss/build/pure-min.css';
import '../styles/font.scss';
import '../styles/global.scss';
import '../styles/reset.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
