import Link from 'next/link';
import './header.scss';

const Header = () => (
  <div className="columns is-centered is-marginless">
    <div className="column is-11 is-flex">
      <div className="nav">
        <Link href="/">
          <a className="is-mono is-size-3">maferland</a>
        </Link>

        <div>
          <Link href="/">
            <a className="is-link is-mono is-size-5">projects</a>
          </Link>
          <Link href="/">
            <a className="is-link is-mono is-size-5">blog</a>
          </Link>
          <Link href="/">
            <a className="is-link is-mono is-size-5">contact</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
