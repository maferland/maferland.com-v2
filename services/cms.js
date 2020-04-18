const getPosts = async () => {
  const files = await require.context('~/site/blog', false, /\.json$/);
  return files.keys().map((key) => files(key));
};

const getPost = async (slug) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};

export { getPosts, getPost };
