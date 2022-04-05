import { useLocalStorage } from 'react-use'
import { Link } from '@remix-run/react'
import { RemixLinkProps } from '@remix-run/react/components'

const NavLink: React.FC<RemixLinkProps> = ({ children, ...props }) => (
  <Link className="text-purple-100 text-xl font-mono underlined" {...props}>
    <div className="group transition">
      {children}
      <div className="gradient w-0 h-1 group-hover:w-full transition-all" />
    </div>
  </Link>
)

const Navbar: React.FC = () => {
  const [open, setOpen] = useLocalStorage('navbarOpen', false)

  return (
    <nav className="flex flex-row justify-between items-center w-full py-4 px-24">
      <NavLink to="/">
        <h1 className="text-2xl ">Marc-Antoine Ferland</h1>
      </NavLink>

      <div className="flex flex-row items-center gap-6">
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
