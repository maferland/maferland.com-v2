import Layout from '../components/layout';
import { getPosts } from '../services/cms';
import BlogContent from '../site/content/blog.json';
import './blog.module.scss';
import BoxLink from '../components/box-link';

const Blog = ({ posts }) => (
  <Layout>
    <div className="page">
      <h1 className="title is-3">{BlogContent.title}</h1>
      <p className="subtitle is-5">{BlogContent.description}</p>
      <div className="post-links">
        {posts &&
          posts.map(({ title, slug }) => (
            <BoxLink key={slug} link={`/${slug}`}>
              <h2 className="title is-4 is-mono">{title}</h2>
            </BoxLink>
          ))}
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
