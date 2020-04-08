import PropTypes from 'prop-types';
import './social-link.scss';

const SocialLink = (props) => {
  return (
    <a className={props.icon} href={props.url}>
      {props.title}
    </a>
  );
};

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
