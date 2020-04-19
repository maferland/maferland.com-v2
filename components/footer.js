import './footer.module.scss';

const year = new Date().getFullYear();
const footerMessage = `© Built with <3 by maferland - ${year}`;

const Footer = () => {
  return (
    <div className="footer is-size-6 has-text-centered is-mono is-gradient">
      <span>{footerMessage}</span>
    </div>
  );
};

export default Footer;
