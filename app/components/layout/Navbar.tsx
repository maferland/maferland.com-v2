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
    <div role="button" className={`lg:hidden w-10 h-10 p-1 burger ${open ? 'active' : color}`} onClick={handleClick}>
      <div />
    </div>
  )
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { y } = useWindowScroll()

  const hasScrolled = y > 30

  const close = () => setOpen(false)

  const links = [
    // <NavLink key="projects" to="/projects">
    //   projects
    // </NavLink>,
    <NavLink key="blog" to="/blog" onClick={close}>
      blog
    </NavLink>,
    <NavLink key="podcasts" to="/podcasts" onClick={close}>
      podcasts
    </NavLink>,
    <NavLink key="about" to="/about" onClick={close}>
      about
    </NavLink>,
  ]

  const textColor = open || hasScrolled ? 'text-violet-900' : 'text-violet-100'
  const bgColor = open || hasScrolled ? 'bg-violet-100' : 'bg-violet-1000'

  return (
    <nav
      className={`
      flex flex-col w-full justify-center h-20 py-4 px-8 md:px-24 fixed  transition-all duration-150 ease z-10 bg-opacity-97 ${textColor} ${bgColor}
      ${open ? 'h-screen' : ''}
      `}
    >
      <div className="flex flex-row justify-between items-center">
        <NavLink to="/" onClick={close}>
          <h1 className="text-2xl h-full"> Marc-Antoine Ferland</h1>
        </NavLink>

        <Burger open={open} onClick={() => setOpen(!open)} color={hasScrolled ? BurgerColor.LIGHT : BurgerColor.DARK} />

        <div className="lg:flex hidden flex-row items-center gap-6 ">{links}</div>
      </div>

      <div className={`mt-32 gap-4 lg:hidden ${open ? 'flex flex-col' : 'hidden'}`}>{links}</div>
    </nav>
  )
}

export default Navbar
