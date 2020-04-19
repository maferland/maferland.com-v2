import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import './header-link.module.scss';

const HeaderLink = ({ href, children }) => {
  const router = useRouter();
  const active = router.pathname.includes(href);
  const { className } = children.props;

  return (
    <Link href={href}>
      <div className={`link-container ${active ? 'active' : ''}`}>
        {React.cloneElement(children, { className })}
        <span className="underline is-gradient" />
      </div>
    </Link>
  );
};

export default HeaderLink;
