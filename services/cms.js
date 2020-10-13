const getPosts = async () => {
  const files = await require.context('~/site/blog', false, /\.json$/);
  return files
    .keys()
    .map((key) => files(key))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getPost = async (slug) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};

const getProjects = async () => {
  const files = await require.context('~/site/projects', false, /\.json$/);
  return files
    .keys()
    .map((key) => files(key))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export { getProjects, getPosts, getPost };
