import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { scrollToCars } from '../../utils/scrollToCars'

const linkClass = ({ isActive }) =>
  `hover:opacity-80 transition-opacity ${isActive ? 'opacity-100 underline underline-offset-4' : 'opacity-90'}`

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 text-lg font-bold tracking-tighter text-white">
      MH
    </span>
    <span className="flex flex-col leading-none">
      <span className="font-outfit text-xl font-semibold tracking-[0.18em] text-white">
        MOTOR
      </span>
      <span className="font-outfit text-lg font-light tracking-[0.35em] text-white/75">
        HEADS
      </span>
    </span>
  </span>
)

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleExploreClick = (event) => {
    event.preventDefault()

    if (location.pathname === '/') {
      scrollToCars()
      return
    }

    navigate('/', { state: { scrollTo: 'explore-cars' } })
  }

  return (
    <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-8 py-6 text-white">
      <NavLink to="/" className="hover:opacity-90 transition-opacity">
        <Logo />
      </NavLink>
      <ul className="flex list-none items-center gap-7 text-base">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <a
            href="#explore-cars"
            onClick={handleExploreClick}
            className="opacity-90 transition-opacity hover:opacity-80"
          >
            Explore
          </a>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-6 py-2.5 transition-colors ${
                isActive
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
