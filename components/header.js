import Link from 'next/link';
import HeaderLink from './header-link';
import './header.scss';

const Header = () => (
  <div className="nav">
    <Link href="/">
      <a className="is-mono is-size-3">maferland</a>
    </Link>

    <div className="links">
      <HeaderLink href="/portfolio">
        <a className="link is-mono is-size-5">portfolio</a>
      </HeaderLink>
      <HeaderLink href="/blog">
        <a className="link is-mono is-size-5">blog</a>
      </HeaderLink>
      <HeaderLink href="/contact">
        <a className="link is-mono is-size-5">contact</a>
      </HeaderLink>
    </div>
  </div>
);

export default Header;
