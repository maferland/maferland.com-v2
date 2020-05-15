import Markdown from 'markdown-to-jsx';
import moment from 'moment';
import 'prismjs';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Meta from '../../components/meta';
import { getPost, getPosts } from '../../services/cms';
import './post.module.scss';

const wordsPerMinute = 200; // Average case.

const getReadingTime = (body) => {
  const textLength = body.split(' ').length; // Split by words
  return textLength > 0 ? Math.ceil(textLength / wordsPerMinute) : '';
};

const Post = (props) => {
  const date = moment(props.date).format('MMMM Do YYYY');
  const readingTime = getReadingTime(props.body);
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Layout>
        <div className="page">
          <article>
            <div className="header">
              <span className="header-content">
                <h1 className="title is-3">{props.title}</h1>
                <p className="subtitle is-5">{props.description}</p>
              </span>
              <span style={{ textAlign: 'right' }}>
                <p>{`${readingTime} min read`}</p>
                <p className="date">{date}</p>
              </span>
            </div>
            <img
              src={props.image.url}
              alt={props.image.alt}
              style={{ width: '100%', height: 'auto', marginBottom: '25px' }}
            />
            <Markdown className="body">{props.body}</Markdown>
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
