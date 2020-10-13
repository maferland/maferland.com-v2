import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './icon';
import './box-link.module.scss';

const BoxLink = ({ link, cta, children }) => (
  <Link href={link}>
    <a className="post-link">
      <div>{children}</div>
      <div className="cta">
        {cta}
        <Icon icon="arrow-right" />
      </div>
    </a>
  </Link>
);

BoxLink.propTypes = {
  link: PropTypes.string.isRequired,
  cta: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BoxLink.defaultProps = {
  cta: 'READ IT',
};

export default BoxLink;
