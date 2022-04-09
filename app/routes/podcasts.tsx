import Paragraph from '~/components/typography/paragraph'
import Subtitle from '~/components/typography/subtitle'
import Title from '~/components/typography/title'

export default function Index() {
  const episodes: any[] = [
    {
      title: 'Best practice in software development - can startups do it?',
      url: 'https://open.spotify.com/embed/episode/6tjggH5MFxA8sHIj3VuUvK?utm_source=generator&theme=0',
      description:
        'In software development, a best practice is a well-defined method that contributes to a successful step in product development. But with the pressures tech startups face in getting their product out as quickly as possible how realistic is it to implement best practice as they develop their tech product?',
    },
    {
      title: 'Best practice in software development - can startups do it?',
      url: 'https://open.spotify.com/embed/episode/6tjggH5MFxA8sHIj3VuUvK?utm_source=generator&theme=0',
      description:
        'In software development, a best practice is a well-defined method that contributes to a successful step in product development. But with the pressures tech startups face in getting their product out as quickly as possible how realistic is it to implement best practice as they develop their tech product?',
    },
    ,
  ]
  return (
    <>
      <Title>Podcasts</Title>

      <div className="grid gap-8 grid-cols-1">
        {episodes.map(({ title, description, url }) => (
          <article key={title} className="flex flex-col gap-2">
            <Subtitle>{title}</Subtitle>
            <Paragraph>{description}</Paragraph>
            <iframe
              style={{ borderRadius: '12px' }}
              src={url}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </article>
        ))}
      </div>
    </>
  )
}
