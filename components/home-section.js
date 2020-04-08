import './home-section.scss';

const HomeSection = (props) => {
  return (
    <div className="page home-section">
      <div>
        <h2 className="title is-1 has-text-white is-roboto">{props.title}</h2>
        <h3 className="subtitle is-2 has-text-white">{props.subtitle}</h3>
      </div>
    </div>
  );
};

export default HomeSection;
