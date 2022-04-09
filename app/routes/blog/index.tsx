import Title from '~/components/typography/title'
import { json, Link, useLoaderData } from 'remix'

import * as postA from './__posts/im-joining-capdesk.mdx'
import Subtitle from '~/components/typography/subtitle'
import Paragraph from '~/components/typography/paragraph'

type PostAttributes = {
  meta: {
    title: string
    description: string
    date: string
    image: { url: string; alt: string }
  }
}

type Post = { slug: string } & PostAttributes['meta']

function postFromModule({ filename, attributes }: { filename: string; attributes: PostAttributes }): Post {
  return {
    slug: filename.replace(/\.mdx?$/, ''),
    ...attributes.meta,
  }
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([postFromModule(postA)])
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat(undefined, {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))

export default function Index() {
  const posts = useLoaderData<Post[]>()

  return (
    <>
      <Title>Blog</Title>

      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="aspect-square box-shadow p-4 bg-purple-800 rounded-sm">
            <Link to={post.slug}>
              <div className="h-full flex flex-col justify-between">
                <span className="font-mono">{formatDate(posts[0].date)}</span>
                <div>
                  <Subtitle>{post.title}</Subtitle>
                  <Paragraph>{post.description}</Paragraph>
                </div>
                <div></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
