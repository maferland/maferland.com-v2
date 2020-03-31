import './footer.scss';

const year = new Date().getFullYear();
const footerMessage = `© Built with ❤️ by maferland - ${year}`;

const Footer = () => {
  return <div className="footer is-size-6 has-text-centered is-mono">{footerMessage}</div>;
};

export default Footer;
