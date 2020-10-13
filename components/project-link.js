import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './icon';
import './post-link.module.scss';

const ProjectLink = ({ title, description, link }) => {
  return (
    <Link href={link}>
      <a className="post-link">
        <div>
          <h2 className="title is-4 is-mono">{title}</h2>
          <p className="is-mono">{description}</p>
        </div>
        <div className="cta">
          SHOW ME
          <Icon icon="arrow-right" />
        </div>
      </a>
    </Link>
  );
};

ProjectLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectLink;
