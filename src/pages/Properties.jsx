import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import SkeletonPropertyGrid from '../components/SkeletonCard'

const categories = ['All', 'Residential', 'Commercial', 'Plots']

const properties = [
  {
    id: 1,
    title: 'Premium Residential Plot',
    category: 'Plots',
    location: 'Coimbatore, Tamil Nadu',
    size: '2400 sq.ft',
    price: 'On Request',
    tag: 'DTCP Approved',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    features: ['Prime Location', 'DTCP / RERA Approved', 'Excellent Road Connectivity', 'Ready for Construction'],
  },
  {
    id: 2,
    title: 'Luxury Villa',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '3800 sq.ft',
    price: 'On Request',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    features: ['Modern Architecture', 'Spacious Interiors', 'Premium Amenities', 'Secure Community Living'],
  },
  {
    id: 3,
    title: 'Commercial Office Space',
    category: 'Commercial',
    location: 'Coimbatore, Tamil Nadu',
    size: '5200 sq.ft',
    price: 'On Request',
    tag: 'Investment',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    features: ['High Visibility Location', 'Business-Friendly Environment', 'Excellent Investment Potential'],
  },
  {
    id: 4,
    title: 'Gated Community Apartment',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '1650 sq.ft',
    price: 'On Request',
    tag: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    features: ['Gated Community', 'Lift & Parking', 'Kids Play Area', 'Power Backup'],
  },
  {
    id: 5,
    title: 'Farm Land / Agricultural Plot',
    category: 'Plots',
    location: 'Pollachi, Tamil Nadu',
    size: '2 Acres',
    price: 'On Request',
    tag: 'Investment',
    image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=900&q=80',
    features: ['Clear Title', 'Water Source Available', 'Good Road Access', 'Fertile Land'],
  },
  {
    id: 6,
    title: 'Retail Shop / Showroom',
    category: 'Commercial',
    location: 'Coimbatore, Tamil Nadu',
    size: '1100 sq.ft',
    price: 'On Request',
    tag: 'High ROI',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    features: ['Main Road Frontage', 'High Footfall Area', 'Immediate Possession', 'CCTV & Security'],
  },
  {
    id: 7,
    title: 'Independent House',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '2100 sq.ft',
    price: 'On Request',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    features: ['Individual House', '3 BHK', 'Car Parking', 'Solar Panel Ready'],
  },
  {
    id: 8,
    title: 'Villa Plot in Gated Layout',
    category: 'Plots',
    location: 'Coimbatore, Tamil Nadu',
    size: '3000 sq.ft',
    price: 'On Request',
    tag: 'RERA Approved',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=900&q=80',
    features: ['RERA Registered', 'Underground Electricity', 'Tar Road Layout', 'Park & Club House'],
  },
  {
    id: 9,
    title: 'Warehouse / Industrial Space',
    category: 'Commercial',
    location: 'Tirupur, Tamil Nadu',
    size: '12,000 sq.ft',
    price: 'On Request',
    tag: 'Industrial',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    features: ['Highway Connectivity', 'High Ceiling', 'Loading Bay', 'Power 3-Phase'],
  },
]

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState({})
  useScrollReveal(`${isLoading}-${activeFilter}-${query}`)

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()

    return properties.filter((p) => {
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter
      const searchableText = [
        p.title,
        p.category,
        p.location,
        p.size,
        p.tag,
        ...p.features,
      ].join(' ').toLowerCase()

      return matchesCategory && (!search || searchableText.includes(search))
    })
  }, [activeFilter, query])

  useEffect(() => {
    setIsLoading(true)
    setLoadedImages({})
    const timer = window.setTimeout(() => setIsLoading(false), 420)
    return () => window.clearTimeout(timer)
  }, [activeFilter, query])

  const markImageLoaded = (id) => {
    setLoadedImages((current) => ({ ...current, [id]: true }))
  }

  return (
    <main className="w-full overflow-x-hidden">

      {/* Page Hero */}
      <section className="relative pt-[160px] px-[52px] pb-[100px] overflow-hidden bg-gradient-to-br from-[#0a1520] to-[#1a3040] flex items-center justify-center text-center min-h-screen">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <svg className="w-full h-full object-cover" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect x="600" y="50" width="240" height="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="4"/>
            <rect x="640" y="80" width="160" height="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" rx="4"/>
            <rect x="20" y="100" width="120" height="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="2"/>
            <line x1="0" y1="300" x2="800" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[700px]">
          <p className="section-kicker !text-accent-light">Our Portfolio</p>
          <h1 className="text-[clamp(36px,5vw,62px)] font-black text-white mb-5 tracking-[-0.02em]">Explore Our Properties</h1>
          <p className="text-lg text-white/65 max-w-[560px] mx-auto leading-[1.7]">Browse our handpicked selection of residential plots, luxury villas, apartments, and commercial spaces.</p>
        </div>
      </section>

      {/* Info Strip */}
      <div className="flex items-center justify-center flex-wrap gap-y-2 bg-accent py-3.5 px-[52px] overflow-hidden max-md:py-3 max-md:px-5 max-md:gap-2">
        <span className="text-[13px] font-semibold text-white/90 tracking-wide px-6 border-r border-white/30 last:border-r-0 max-md:px-3 max-md:text-[12px] max-md:border-r-0">✦ All properties are legally verified</span>
        <span className="text-[13px] font-semibold text-white/90 tracking-wide px-6 border-r border-white/30 last:border-r-0 max-md:px-3 max-md:text-[12px] max-md:border-r-0">✦ DTCP & RERA approved options available</span>
        <span className="text-[13px] font-semibold text-white/90 tracking-wide px-6 border-r border-white/30 last:border-r-0 max-md:px-3 max-md:text-[12px] max-md:border-r-0">✦ End-to-end documentation support</span>
        <span className="text-[13px] font-semibold text-white/90 tracking-wide px-6 border-r border-white/30 last:border-r-0 max-md:px-3 max-md:text-[12px] max-md:border-r-0">✦ Contact us for pricing & site visits</span>
      </div>

      {/* Filters + Grid */}
      <section className="py-18 pb-23 max-sm:py-12 bg-soft">
        <div className="max-w-[1280px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">

          {/* Filter Tabs */}
          <div className="grid grid-cols-1 items-center gap-5 mb-10 max-lg:grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_auto] reveal">
            <div className="grid gap-2 max-w-[540px] max-lg:max-w-none">
              <label className="text-xs font-bold text-muted uppercase tracking-[1.4px]" htmlFor="property-search">Search properties</label>
              <div className="min-h-[50px] flex items-center gap-2.5 px-4 bg-white border-1.5 border-line rounded-md text-muted transition-all duration-250 focus-within:border-accent focus-within:shadow-[0_10px_28px_rgba(26,122,110,0.12)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  id="property-search"
                  className="w-full border-0 outline-none text-ink bg-transparent text-sm placeholder:text-muted"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by keyword, type, location, feature..."
                  aria-label="Search properties"
                />
              </div>
            </div>

            <div className="flex items-center gap-3.5 flex-wrap">
              <p className="text-sm font-semibold text-muted m-0 uppercase tracking-wider whitespace-nowrap">Filter by:</p>
              <div className="flex gap-2 flex-wrap" role="tablist">
                {categories.map(cat => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeFilter === cat}
                    className={`px-[22px] py-[9px] border-1.5 rounded text-sm font-semibold cursor-pointer transition-all duration-250 tracking-wide ${activeFilter === cat ? 'bg-accent border-accent text-white' : 'border-line bg-white text-body hover:border-accent hover:text-accent'}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="ml-auto max-lg:ml-0 text-[13px] text-muted font-medium whitespace-nowrap">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
          </div>

          {/* Grid */}
          <div className={isLoading ? 'pointer-events-none select-none' : ''} aria-busy={isLoading}>
            {isLoading ? (
              <SkeletonPropertyGrid count={6} />
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {filtered.map((p, i) => {
                  const imageReady = Boolean(loadedImages[p.id])
                  const directionClass = i % 4 < 2 ? 'from-top' : 'from-bottom'

                  return (
                    <article
                      key={p.id}
                      className={`bg-white rounded-2xl overflow-hidden border border-line transition-all duration-400 flex flex-col hover:-translate-y-2.5 hover:shadow-2xl reveal ${directionClass} reveal-delay-${(i % 3) + 1}`}
                    >
                      <div className="relative overflow-hidden shrink-0 bg-soft-alt group">
                        {!imageReady && <span className="prop-img-skeleton" aria-hidden="true" />}
                        <img
                          className={`block w-full aspect-[4/3] object-cover transition-[opacity,transform] duration-600 ease-out group-hover:scale-108 ${imageReady ? 'opacity-100' : 'opacity-0'}`}
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => markImageLoaded(p.id)}
                        />
                        <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[11px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-[3px] z-[2]">{p.tag}</span>
                        <span className="absolute top-3.5 right-3.5 bg-black/50 text-white/90 text-[11px] font-semibold tracking-wide py-1.5 px-3 rounded-[3px] backdrop-blur-sm z-[2]">{p.category}</span>
                      </div>
                      <div className="p-[26px] flex flex-col flex-1">
                        <h3 className="text-[19px] font-bold mb-2 text-ink leading-[1.25]">{p.title}</h3>
                        <p className="flex items-center gap-1.5 text-[13px] text-muted mb-3.5! font-medium">
                          <svg className="text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {p.location}
                        </p>
                        <div className="flex justify-between items-center mb-4 py-3 border-y border-line">
                          <span className="flex items-center gap-1.5 text-[13px] text-body font-medium">
                            <svg className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                              <rect x="3" y="3" width="18" height="18" rx="2"/>
                              <path d="M3 9h18M9 21V9"/>
                            </svg>
                            {p.size}
                          </span>
                          <span className="text-[15px]! font-bold! text-ink! bg-soft py-1 px-3 rounded">{p.price}</span>
                        </div>
                        <ul className="list-none p-0 m-0 mb-5 grid gap-1.5">
                          {p.features.map(f => (
                            <li key={f} className="relative pl-4.5 text-[13px] text-body font-medium leading-[1.4] before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">{f}</li>
                          ))}
                        </ul>
                        <Link
                          to="/contact"
                          className={`btn btn-primary mt-auto w-full text-[13px] min-h-[44px] ${!imageReady ? 'opacity-[0.62] pointer-events-none' : ''}`}
                          aria-disabled={!imageReady}
                          tabIndex={imageReady ? 0 : -1}
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white border border-line rounded-xl py-13 px-8 text-center reveal">
                <h2 className="text-[28px] font-extrabold mb-2.5">No matching properties</h2>
                <p className="max-w-[460px] mx-auto mb-6 text-body">Try a different keyword or switch the category filter.</p>
                <button className="btn btn-dark" onClick={() => { setQuery(''); setActiveFilter('All') }}>
                  Clear Search
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Custom Requirement Banner */}
      <section className="reveal scale relative bg-ink py-16 px-[52px] max-md:py-12 max-md:px-6">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-10 flex-wrap max-md:flex-col">
          <div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-white mb-2.5">Can't Find What You're Looking For?</h2>
            <p className="text-white/60 m-0 text-[15px] max-w-[480px]">Tell us your requirements and we'll find the perfect property for you from our extensive network.</p>
          </div>
          <div className="flex gap-3.5 shrink-0 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Share Your Requirements</Link>
            <a href="tel:+91XXXXXXXXXX" className="btn btn-outline">Call Us Directly</a>
          </div>
        </div>
      </section>

    </main>
  )
}

