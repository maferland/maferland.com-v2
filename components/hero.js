import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import './hero.module.scss';

const prefix = "Hello, I'm ";
const name = 'Marc-Antoine';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) {
      return () => {};
    }
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

const Hero = (props) => {
  const [suffixIndex, setSuffixIndex] = useState(0);

  useInterval(() => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * props.suffixes.length);
    } while (randomIndex === suffixIndex);
    setSuffixIndex(randomIndex);
  }, 3000);

  return (
    <div className={`hero has-text-centered-mobile ${props.className} is-mono is-size-2`}>
      <span>
        {prefix}
        <nobr>{name}</nobr>
        &nbsp;
      </span>

      {props.suffixes.map((suffix, i) => (
        <div key={`suffix-${i.toString()}`} className={`suffix is-gradient-after ${i === suffixIndex ? 'active' : ''}`}>
          {suffix}
        </div>
      ))}
    </div>
  );
};

Hero.propTypes = { suffixes: PropTypes.arrayOf(PropTypes.string).isRequired };

export default Hero;
