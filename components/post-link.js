import Link from 'next/link';
import PropTypes from 'prop-types';
import './post-link.scss';

const BlogThumbnail = (props) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <a className="is-mono is-size-3">
        <h2>{props.title}</h2>
      </a>
    </Link>
  );
};

BlogThumbnail.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogThumbnail;
