import Layout from '../components/layout';
import PostLink from '../components/post-link';
import { getPosts } from '../services/cms';
import BlogContent from '../site/content/blog.json';
import './blog.module.scss';

const Blog = (props) => (
  <Layout>
    <div className="page">
      <h1 className="title is-3">{BlogContent.title}</h1>
      <p className="subtitle is-5">{BlogContent.description}</p>
      <div className="post-links">
        {props.posts.map((post) => (
          <PostLink key={post.slug} {...post} />
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
