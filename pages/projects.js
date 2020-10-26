/** @jsx jsx */
import { jsx } from '@emotion/core';
import { UserActivityFeed } from '@maferland/github-activity';
import facepaint from 'facepaint';
import BoxLink from '../components/box-link';
import Grid from '../components/grid';
import Layout from '../components/layout';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import { getProjects } from '../services/cms';
import ProjectsContent from '../site/content/projects.json';

const mq = facepaint(['@media(max-width: 1200px)']);

const Projects = ({ projects }) => (
  <Layout>
    <Section className="page">
      <div
        css={mq({
          '.post-link': {
            alignItems: [undefined, 'center'],
            '--post-link-height': [undefined, '120px'],
          },
        })}
      >
        <h1 className="title is-3" style={{ marginTop: 0 }}>
          {ProjectsContent.title}
        </h1>
        <p className="subtitle is-5">{ProjectsContent.description}</p>
        <Grid width={2} mobileWidth={1}>
          {projects &&
            projects.map(({ title, description, link }) => (
              <BoxLink key={title} link={link} cta={ProjectsContent.cta}>
                <h2 className="title is-4 is-mono" style={{ marginBottom: '0.5rem' }}>
                  {title}
                </h2>
                <p css={mq({ fontSize: '1.15em', display: [undefined, 'none'] })}>{description}</p>
              </BoxLink>
            ))}
        </Grid>
      </div>
      <SeeMore sectionId="activity" mobileHidden />
    </Section>

    <Section className="page" id="activity">
      <div>
        <h2 className="subtitle is-3">{ProjectsContent.github}</h2>
        <UserActivityFeed username="maferland" limit={5} />
      </div>
    </Section>
  </Layout>
);

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
