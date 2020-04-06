import React from 'react';
import '../styles/gradient.scss';
import './hero.scss';

const prefix = "Hello, I'm ";
const name = 'Marc-Antoine';
const suffixes = [
  'a frontend engineer.',
  'a remote enthusiast.',
  'a coffee aficionado.',
  'a lifelong learner.',
];

const getRandomSuffixIndex = () => {
  return Math.floor(Math.random() * suffixes.length);
};

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

  randomizeSuffix() {
    let randomIndex;
    do {
      randomIndex = getRandomSuffixIndex();
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

        {suffixes.map((suffix, i) => (
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

export default Hero;
