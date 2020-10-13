import Layout from '../components/layout';
import { getProjects } from '../services/cms';
import ProjectsContent from '../site/content/projects.json';
import ProjectLink from '../components/project-link';

const Projects = ({ projects }) => (
  <Layout>
    <div className="page">
      <h1 className="title is-3">{ProjectsContent.title}</h1>
      <p className="subtitle is-5">{ProjectsContent.description}</p>
      <div className="post-links">
        {projects && projects.map((project) => <ProjectLink key={project.link} {...project} />)}
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
