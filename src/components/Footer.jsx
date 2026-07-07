import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/75 pt-[72px]">

      {/* Main grid */}
      <div
        className="grid grid-cols-1 gap-12 max-w-[1280px] mx-auto px-[52px] pb-14 sm:grid-cols-2 lg:grid-cols-4 max-lg:gap-9 max-sm:px-6 max-sm:gap-8 max-sm:pb-12"
      >

        {/* Brand column */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3 mb-5">
            <span className="grid w-11 h-11 place-items-center bg-accent text-white rounded-lg text-[22px] font-extrabold shrink-0">
              D
            </span>
            <span>
              <strong className="block text-xl font-extrabold text-white leading-tight">
                Disha Realty
              </strong>
              <small className="block text-[11px] text-white/50 mt-0.5 tracking-[0.5px]">
                Real Estate Solutions
              </small>
            </span>
          </Link>

          <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
            "Guiding You Towards the Right Property."
          </p>

          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook"
              className="grid w-10 h-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram"
              className="grid w-10 h-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp"
              className="grid w-10 h-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-[1.5px] mb-5">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/properties', label: 'Properties' },
              { to: '/contact', label: 'Contact Us' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="text-white/55 text-sm leading-snug transition-[color,padding-left] duration-[250ms] hover:text-accent-light hover:pl-1.5"
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-[1.5px] mb-5">
            Our Services
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              ['/properties', 'Residential Properties'],
              ['/properties', 'Residential Plots'],
              ['/properties', 'Commercial Properties'],
              ['/contact', 'Investment Consulting'],
              ['/contact', 'Legal & Documentation'],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="text-white/55 text-sm leading-snug transition-[color,padding-left] duration-[250ms] hover:text-accent-light hover:pl-1.5"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-[1.5px] mb-5">
            Contact Us
          </h4>
          <address className="flex flex-col gap-3.5 not-italic">
            <a href="tel:+91XXXXXXXXXX"
              className="flex items-start gap-2.5 text-white/55 text-sm leading-snug transition-colors duration-[250ms] hover:text-accent-light">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 XXXXX XXXXX
            </a>
            <a href="mailto:info@Disharealty.com"
              className="flex items-start gap-2.5 text-white/55 text-sm leading-snug transition-colors duration-[250ms] hover:text-accent-light">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@Disharealty.com
            </a>
            <span className="flex items-start gap-2.5 text-white/55 text-sm leading-snug">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Your Office Address, City
            </span>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center gap-4 border-t border-white/8 px-[52px] py-5 max-sm:flex-col max-sm:text-center max-sm:px-6 max-sm:gap-2">
        <p className="m-0 text-white/35 text-[13px]">
          © {year} Disha Realty. All rights reserved.
        </p>
        <p className="m-0 text-white/35 text-[13px]">
          Designed with care for your property journey.
        </p>
      </div>
    </footer>
  )
}
