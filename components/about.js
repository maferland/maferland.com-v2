import facepaint from 'facepaint';
import ProfileImage from './profile-image';
import SocialLink from './social-link';
import AboutContent from '../site/content/about.json';
import Section from './section';
import '../pages/about.module.scss';

const mq = facepaint(['@media(max-width: 1200px)']);

const About = ({ small = false }) => {
  return (
    <Section fullheight={false}>
      <div className="column is-4-widescreen is-5-desktop is-6-tablet is-8-mobile">
        <ProfileImage
          image={AboutContent.profileImage}
          underImage={AboutContent.underProfileImage}
          alt={AboutContent.profileAlt}
        />
      </div>
      <div
        className="column is-6 is-offset-1-widescreen"
        css={mq({
          flex: [1, 0],
          whiteSpace: ['break-spaces'],
        })}
      >
        <h1
          className={`title is-size-${small ? '5' : '3'}-desktop is-size-${
            small ? '5' : '4'
          }-touch has-text-centered-desktop`}
        >
          {AboutContent.title}
        </h1>
        <p className={`subtitle is-size-${small ? '6' : '4'}-desktop is-size-${small ? '6' : '5'}-touch`}>
          {AboutContent.description}
        </p>
        <div className="is-relative has-text-centered">
          {AboutContent.links.map((link) => (
            <SocialLink key={link.icon} {...link} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
