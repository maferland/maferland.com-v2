import facepaint from 'facepaint';
import Arrow from './arrow';

const mq = facepaint(['@media(max-width: 1200px)']);

const SeeMore = ({ sectionId, mobileHidden = false, css: customCss }) => (
  <div
    css={mq(
      {
        position: 'absolute',
        bottom: 0,
        display: ['flex', mobileHidden ? 'none' : 'flex'],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '1.5em',
      },
      customCss,
    )}
  >
    <a href={`#${sectionId}`}>
      <Arrow />
    </a>
  </div>
);

export default SeeMore;
