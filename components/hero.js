/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useInterval } from '@maferland/hooks';
import facepaint from 'facepaint';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './hero.module.scss';

const prefix = "Hello, I'm ";
const name = 'Marc-Antoine';

const mq = facepaint(['@media(max-width: 1200px)']);

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
    <div
      className={`has-text-centered-mobile ${props.className} is-mono is-size-2`}
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div
        css={mq({
          display: 'flex',
          width: ['100%', '1000px'],
          overflow: 'hidden',
          flexDirection: ['', 'column'],
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <div
          css={mq({
            whiteSpace: 'nowrap',
            margin: ['3em 0', '1.75em 0'],
            padding: ['', '0 300px'],
          })}
        >
          {prefix}
          <nobr>{name}</nobr>
          &nbsp;
        </div>

        <div
          css={{
            width: '100%',
            position: 'relative',
          }}
        >
          {props.suffixes.map((suffix, i) => (
            <div key={`suffix-${i.toString()}`} className={`suffix ${i === suffixIndex ? 'active' : ''}`}>
              {suffix}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = { suffixes: PropTypes.arrayOf(PropTypes.string).isRequired };

export default Hero;
