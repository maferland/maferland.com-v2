/** @jsx jsx */
import { jsx } from '@emotion/core';
import facepaint from 'facepaint';

const mq = facepaint(['@media(max-width: 1200px)']);

const Grid = ({ children, width = 5, mobileWidth = 2 }) => (
  <div
    css={mq({
      display: 'grid',
      gridTemplateColumns: [`repeat(${width}, 1fr)`, `repeat(${mobileWidth},1fr)`],
      gridGap: '1em',
    })}
  >
    {children}
  </div>
);

export default Grid;
