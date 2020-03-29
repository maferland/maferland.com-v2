import withLayout from "../components/layout";
import PostLink from "../components/post/post-link";

const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </div>
  );
};

export default withLayout(Blog);
