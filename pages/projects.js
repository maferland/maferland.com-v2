/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { UserActivityFeed } from '@maferland/github-activity';
import BoxLink from '../components/box-link';
import Layout from '../components/layout';
import Section from '../components/section';
import SeeMore from '../components/see-more';
import { getProjects } from '../services/cms';
import ProjectsContent from '../site/content/projects.json';

const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1.5em;

  @include touch {
    grid-template-columns: 1fr;
  }
`;

const Projects = ({ projects }) => (
  <Layout>
    <Section className="page">
      <div>
        <h1 className="title is-3" style={{ marginTop: 0 }}>
          {ProjectsContent.title}
        </h1>
        <p className="subtitle is-5">{ProjectsContent.description}</p>
        <div css={grid}>
          {projects &&
            projects.map(({ title, description, link }) => (
              <BoxLink key={title} link={link} cta={ProjectsContent.cta}>
                <h2 className="title is-4 is-mono" style={{ marginBottom: '0.5rem' }}>
                  {title}
                </h2>
                <p css={{ fontSize: '1.15em' }}>{description}</p>
              </BoxLink>
            ))}
        </div>
      </div>
      <SeeMore sectionId="activity" />
    </Section>

    <Section className="page" css={grid} id="activity">
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
