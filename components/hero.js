/** @jsx jsx */
import { keyframes } from '@emotion/core';
import { useInterval } from '@maferland/hooks';
import facepaint from 'facepaint';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './hero.module.scss';

const prefix = "Hello, I'm ";
const name = 'Marc-Antoine';

const mq = facepaint(['@media(max-width: 1200px)']);

const horizontalShow = keyframes`
  0% {
    left: -800px;
    opacity: 0;
  }
  20% {
    left: 50px;
  }
  30% {
    left: 0;
    opacity: 1;
  }
  95% {
    left: 0;
    opacity: 1;
  }
  100% {
    left: 800px;
    opacity: 0;
  }
`;

const verticalShow = keyframes`
  0% {
    bottom: -200px;
    opacity: 0;
  }
  20% {
    bottom: calc(50% + 10px);
  }
  30% {
    bottom: calc(50% - 30px);
    opacity: 1;
  }
  95% {
    bottom: calc(50% - 30px);
    opacity: 1;
  }
  100% {
    bottom: 200px;
    opacity: 0;
  }
`;

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
          alignItems: ['', 'center'],
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
            <div
              key={`suffix-${i.toString()}`}
              className={`${i === suffixIndex ? 'active' : ''}`}
              css={mq({
                position: 'absolute',
                bottom: ['-200px', 0],
                left: ['', '-800px'],
                width: ['', '100%'],
                textAlign: ['', 'center'],
                animation: `${verticalShow} 3s ease-out 1`,
                '&.active': `${horizontalShow} 3s ease-out 1`,
              })}
            >
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
