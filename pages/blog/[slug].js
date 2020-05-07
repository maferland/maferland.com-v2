import Markdown from 'markdown-to-jsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Meta from '../../components/meta';
import { getPost, getPosts } from '../../services/cms';
import './post.module.scss';

const Post = (props) => {
  const date = moment().format('MMMM Do YYYY');
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Layout>
        <div className="page">
          <div className="header">
            <h1 className="title is-3">{props.title}</h1>
            <p className="subtitle is-5">{props.description}</p>
            <p className="date">{date}</p>
          </div>
          <article>
            <Markdown>{props.body}</Markdown>
          </article>
        </div>
      </Layout>
    </>
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
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
