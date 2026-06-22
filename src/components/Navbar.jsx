import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import useBodyScrollLock from '../hooks/useBodyScrollLock'

const navItems = [
  { to: '/', end: true, label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/properties', label: 'Properties' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useBodyScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    [
      'nav-link',
      isActive ? 'active' : '',
      scrolled
        ? `text-muted hover:text-ink ${isActive ? 'text-ink' : ''}`
        : `text-white/85 hover:text-white ${isActive ? 'text-white' : ''}`,
    ].join(' ')

  const mobileNavLinkClass = ({ isActive }) =>
    ['nav-link', isActive ? 'active' : ''].join(' ')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[1100] flex items-center justify-between gap-6 transition-all duration-[400ms] ease-in-out px-[52px] max-[900px]:px-6 max-[480px]:px-5 ${
          scrolled
            ? 'bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)] py-3.5 backdrop-blur-[12px]'
            : 'py-[22px] max-[900px]:py-[18px]'
        }`}
      >
        {/* Brand */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 shrink-0"
          onClick={closeMenu}
          aria-label="Dhisha Realty home"
        >
          <span
            className={`grid w-11 h-11 place-items-center text-white rounded-lg text-[22px] font-extrabold transition-colors duration-300 ${
              scrolled ? 'bg-ink' : 'bg-accent'
            }`}
          >
            D
          </span>
          <span>
            <strong
              className={`block text-xl font-extrabold leading-tight transition-colors duration-300 ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              Dhisha
            </strong>
            <small
              className={`block text-[11px] font-medium tracking-[0.5px] mt-0.5 transition-colors duration-300 ${
                scrolled ? 'text-muted' : 'text-white/65'
              }`}
            >
              Real Estate Solutions
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="flex items-center gap-2 max-[900px]:hidden"
          aria-label="Primary navigation"
        >
          {navItems.map(({ to, end, label }) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn btn-primary !min-h-[42px] !py-0 !px-[22px] ml-3"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className={`hidden max-[900px]:flex flex-col justify-between w-7 h-5 bg-transparent border-none cursor-pointer p-0 ${
            menuOpen ? 'hamburger-open' : ''
          }`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-full h-0.5 rounded-sm transition-all duration-[350ms] origin-center ${
                menuOpen ? 'bg-white' : (scrolled ? 'bg-ink' : 'bg-white')
              }`}
            />
          ))}
        </button>
      </header>

      {/* Mobile overlay — outside header so fixed positioning uses the viewport */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[1040] hidden h-[100dvh] w-full bg-black/50 backdrop-blur-sm max-[900px]:block touch-none"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile nav panel */}
      <nav
        id="mobile-nav-panel"
        className={`hidden max-[900px]:flex fixed top-0 right-0 z-[1050] w-[min(300px,100vw)] h-[100dvh] flex-col items-start gap-1 bg-ink pt-[90px] px-7 pb-10 shadow-[-8px_0_40px_rgba(0,0,0,0.2)] transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto overscroll-contain ${
          menuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map(({ to, end, label }) => (
          <NavLink key={to} to={to} end={end} onClick={closeMenu} className={mobileNavLinkClass}>
            {label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="btn btn-primary !min-h-[42px] !py-0 !px-[22px] w-full mt-4 justify-center"
        >
          Get In Touch
        </Link>
      </nav>
    </>
  )
}
