import PropTypes from 'prop-types';
import Icon from './icon';
import './social-link.scss';

const SocialLink = (props) => {
  return (
    <a className="social-link gradient-box" href={props.url}>
      <Icon className="is-size-1 icon-gradient" icon={props.icon} />
    </a>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
