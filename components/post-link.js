import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './icon';
import './post-link.module.scss';

const BlogThumbnail = (props) => {
  return (
    <Link href={`/blog/${props.slug}`}>
      <a className="post-link">
        <div>
          <h2 className="title is-4 is-mono">{props.title}</h2>
        </div>
        <div className="cta">
          READ IT
          <Icon icon="arrow-right" />
        </div>
      </a>
    </Link>
  );
};

BlogThumbnail.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogThumbnail;
