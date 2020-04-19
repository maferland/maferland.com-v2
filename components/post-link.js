import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './icon';
import './post-link.scss';

const BlogThumbnail = (props) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <a className="post-link">
        <div>
          <h2 className="title is-4 is-mono">{props.title}</h2>
          <p className="subtitle is-5">{props.description}</p>
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
