export default function Index() {
  const episodes = [
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
      <h1 className="text-violet-100 text-6xl">Podcasts</h1>

      <div className="grid gap-8 grid-cols-1">
        {episodes.map(({ title, description, url }) => (
          <article className="text-violet-100 flex flex-col gap-2">
            <h2 className="text-3xl">{title}</h2>
            <p className="text-lg">{description}</p>
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
