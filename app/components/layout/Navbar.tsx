import { Link } from '@remix-run/react'
import { RemixLinkProps } from '@remix-run/react/components'
import { useState } from 'react'
import { useWindowScroll } from 'react-use'

const NavLink: React.FC<RemixLinkProps> = ({ children, ...props }) => (
  <Link className="text-xl font-mono" {...props}>
    <div className="group transition max-w-min whitespace-nowrap">
      {children}
      <div className="gradient w-0 h-1 group-hover:w-full transition-all" />
    </div>
  </Link>
)

enum BurgerColor {
  LIGHT = 'light',
  DARK = 'dark',
}

const Burger: React.FC<{ open?: boolean; onClick: () => void; color: BurgerColor }> = ({
  open,
  onClick: handleClick,
  color,
}) => {
  return (
    <div
      role="button"
      className={`lg:hidden w-0 h-0 sm:w-10 sm:h-10 p-1 burger ${open ? 'active' : color}`}
      onClick={handleClick}
    >
      <div />
    </div>
  )
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { y } = useWindowScroll()

  const hasScrolled = y > 10

  const links = [
    <NavLink key="projects" to="/projects">
      projects
    </NavLink>,
    <NavLink key="blog" to="/blog">
      blog
    </NavLink>,
    <NavLink key="about" to="/about">
      about
    </NavLink>,
  ]

  return (
    <nav
      className={`flex flex-col w-full justify-center h-20 py-4 px-24 fixed bg-purple-1000 transition-all duration-150 ease-in z-10 ${
        open ? 'h-screen bg-pink-100 text-purple-900' : 'text-purple-100 '
      }
      ${hasScrolled ? 'bg-pink-100 text-purple-900' : ''}  `}
    >
      <div className="flex flex-row justify-between items-center">
        <NavLink to="/">
          <h1 className="text-2xl h-max">Marc-Antoine Ferland</h1>
        </NavLink>

        <Burger open={open} onClick={() => setOpen(!open)} color={hasScrolled ? BurgerColor.LIGHT : BurgerColor.DARK} />

        <div className="lg:flex hidden flex-row items-center gap-6 ">{links}</div>
      </div>

      <div className={`mt-32 gap-4 lg:hidden ${open ? 'flex flex-col' : 'hidden'}`}>{links}</div>
    </nav>
  )
}

export default Navbar
