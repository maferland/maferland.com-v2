/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const arrow = css`
  border: 3px solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
`;

const directions = {
  right: css`
    transform: rotate(-45deg);
  `,
  left: css`
    transform: rotate(135deg);
  `,
  up: css`
    transform: rotate(-135deg);
  `,
  down: css`
    transform: rotate(45deg);
  `,
};

const defaultDirection = directions.down;

const Arrow = (direction = 'down') => {
  return (
    <div>
      <span
        css={css`
          ${arrow};
          ${directions[direction] || defaultDirection};
        `}
      />
    </div>
  );
};
export default Arrow;
