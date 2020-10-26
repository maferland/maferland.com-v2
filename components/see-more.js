import Arrow from './arrow';

const SeeMore = ({ sectionId }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '1.5em',
    }}
  >
    <a href={`#${sectionId}`}>
      <Arrow />
    </a>
  </div>
);

export default SeeMore;
