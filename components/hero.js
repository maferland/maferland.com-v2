import React from 'react';
import Typed from 'typed.js';
import './hero.scss';

const sentences = ["Hello, I'm Marc-Antoine. Nice to meet you!", "I'm a remote frontend engineer."];

class Hero extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-new
    new Typed('#hero', {
      strings: sentences,
      typeSpeed: 20,
    });
  }

  render() {
    return (
      <div className="hero">
        <div className="is-mono is-size-2 is-flex">
          <div id="hero" />
        </div>
      </div>
    );
  }
}

export default Hero;
