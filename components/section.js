/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';

const mq = facepaint(['@media(max-width: 1200px)']);

const sectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = ({ children, className, css: customCss, id, fullheight = true }) => (
  <section
    id={id}
    className={`${fullheight ? 'fullheight' : ''} ${className}`}
    css={mq(sectionStyle, { flexDirection: ['row', 'column'] }, customCss)}
  >
    {children}
  </section>
);

export default Section;
