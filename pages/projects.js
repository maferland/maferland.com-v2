import BoxLink from '../components/box-link';
import Layout from '../components/layout';
import { getProjects } from '../services/cms';
import ProjectsContent from '../site/content/projects.json';

const Projects = ({ projects }) => (
  <Layout>
    <div className="page">
      <h1 className="title is-3">{ProjectsContent.title}</h1>
      <p className="subtitle is-5">{ProjectsContent.description}</p>
      <div className="post-links">
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
