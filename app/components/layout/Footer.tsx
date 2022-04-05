const year = new Date().getFullYear()
const content = `© Built with <3 by Marc-Antoine Ferland - ${year}`
const Footer: React.FC = () => (
  <footer className="py-4 text-center gradient mix-blend-difference text-black font-mono">{content}</footer>
)

export default Footer
