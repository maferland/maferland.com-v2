const Box: React.FC = ({ children }) => (
  <div className="h-full shadow-md drop-shadow-md bg-purple-900 p-2 rounded-md">{children}</div>
)

export default function Index() {
  return (
    <div className="flex flex-col gap-10 px-16">
      <h1 className="text-slate-100 text-6xl">Welcome!</h1>

      <h2 className="text-slate-100 text-4xl">Podcasts</h2>
      <div className="grid gap-4 grid-cols-1">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/6tjggH5MFxA8sHIj3VuUvK?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/6tjggH5MFxA8sHIj3VuUvK?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      <h2 className="text-slate-100 text-4xl">Post</h2>
      <div className="grid gap-4 grid-cols-3">
        <Box>Ur dur post #1</Box>
        <Box>Ur dur post #2</Box>
        <Box>Ur dur post #3</Box>
      </div>

      <h2 className="text-slate-100 text-4xl">Projects</h2>
      <div className="grid gap-4 grid-cols-3">
        <Box>Ur dur project #1</Box>
        <Box>Ur dur project #2</Box>
        <Box>Ur dur project #3</Box>
      </div>
    </div>
  )
}
