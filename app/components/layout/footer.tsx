const year = new Date().getFullYear()
const content = `© Built with <3 by Marc-Antoine Ferland - ${year}`
const Footer: React.FC = () => (
  <footer className="py-3 text-xs text-center gradient text-violet-900 font-mono">{content}</footer>
)

export default Footer
