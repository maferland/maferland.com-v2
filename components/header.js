import Link from 'next/link';
import React from 'react';
import HeaderLink from './header-link';
import './header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => {
      return { active: !prevState.active };
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="brand">
          <Link href="/">
            <a className="is-mono is-size-3">
              <img src="/img/maferland-horizontal.png" height="68px" alt="maferland logo" />
            </a>
          </Link>
          {/* TODO Fix A11y issues (see .eslintrc) */}
          <div role="button" className={`burger ${this.state.active ? 'active' : ''}`} onClick={this.toggle}>
            <div />
          </div>
        </div>

        <div className={`links ${this.state.active ? 'active' : ''}`}>
          <HeaderLink href="/blog">
            <a className="link is-mono is-size-5">blog</a>
          </HeaderLink>
          <HeaderLink href="/about">
            <a className="link is-mono is-size-5">about</a>
          </HeaderLink>
        </div>
      </div>
    );
  }
}

export default Header;
