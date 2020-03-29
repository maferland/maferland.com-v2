import { useRouter } from 'next/router';
import withLayout from '../../components/layout';

const Post = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}

export default withLayout(Post);

