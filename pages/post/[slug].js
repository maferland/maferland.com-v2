import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import { getPost, getPosts } from '../../services/cms';

const Post = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>{props.title}</h1>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = (await getPost(context.params.slug)) || {};
  return {
    props: {
      ...post,
    },
  };
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
