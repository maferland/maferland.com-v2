import React from 'react';
import './hero.scss';

const prefix = "Hello, I'm Marc-Antoine";
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
    setTimeout(() => this.randomizeSuffix());
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
      <div className="hero">
        <div className="is-mono is-size-2 is-flex">
          <span>
            {prefix}
            &nbsp;
          </span>
          <div className="is-relative">
            {suffixes.map((suffix, i) => (
              <div
                key={i.toString()}
                className={`suffix ${i === this.state.suffixIndex ? 'active' : ''}`}
              >
                <span>{suffix}</span>
                <span className="timer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
