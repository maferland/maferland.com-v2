import PropTypes from 'prop-types';
import React from 'react';
import '../styles/gradient.scss';
import './hero.scss';

const prefix = "Hello, I'm ";
const name = 'Marc-Antoine';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { suffixIndex: undefined };
  }

  componentDidMount() {
    this.setState({ suffixIndex: 0 });
    this.interval = setInterval(() => this.randomizeSuffix(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRandomSuffixIndex = () => {
    return Math.floor(Math.random() * this.props.suffixes.length);
  };

  randomizeSuffix() {
    let randomIndex;
    do {
      randomIndex = this.getRandomSuffixIndex();
    } while (randomIndex === this.state.suffixIndex);
    this.setState({ suffixIndex: randomIndex });
  }

  changeSuffix() {
    this.setState({ suffixIndex: 1 });
  }

  render() {
    return (
      <div className={`hero has-text-centered-mobile ${this.props.className} is-mono is-size-2`}>
        <span>
          {prefix}
          <nobr>{name}</nobr>
          &nbsp;
        </span>

        {this.props.suffixes.map((suffix, i) => (
          <div
            key={`suffix-${i.toString()}`}
            className={`suffix is-gradient-after ${i === this.state.suffixIndex ? 'active' : ''}`}
          >
            {suffix}
          </div>
        ))}
      </div>
    );
  }
}

Hero.propTypes = { suffixes: PropTypes.arrayOf(PropTypes.string).isRequired };

export default Hero;
