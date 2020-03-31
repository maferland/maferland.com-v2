import Link from 'next/link';

const Header = () => (
  <div className="columns is-centered is-marginless">
    <div className="column is-11 is-flex">
      <div>
        <Link href="/">
          <span className="is-mono is-size-3">maferland</span>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
