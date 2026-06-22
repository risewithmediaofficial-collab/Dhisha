import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'

/* ── DATA ── */
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    tag: 'Luxury Villas',
    heading: 'Build Your Future\nWith Dhisha Realty',
    sub: 'Trusted Real Estate Solutions for Homes, Villas, Plots & Commercial Properties',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
    tag: 'Premium Plots',
    heading: 'Find the Perfect\nProperty for You',
    sub: 'DTCP & RERA approved residential plots in prime developing locations',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80',
    tag: 'Commercial Spaces',
    heading: 'Invest Smart,\nGrow Together',
    sub: 'Strategic commercial properties with high visibility and excellent ROI',
  },
]

const stats = [
  { value: 10,  suffix: '+', label: 'Years of Experience', desc: 'Decades of market insight'  },
  { value: 100, suffix: '+', label: 'Projects Completed',  desc: 'Successfully delivered'       },
  { value: 200, suffix: '+', label: 'Happy Clients',       desc: 'Satisfied customers'          },
  { value: 400, suffix: '+', label: 'Properties Sold',     desc: 'Across all categories'        },
]

const services = [
  { icon: '🏠', title: 'Residential Properties',      text: 'Find your dream home with carefully selected apartments, villas, and independent houses.' },
  { icon: '🌿', title: 'Residential Plots',            text: 'Invest in legally approved plots in rapidly developing areas with excellent future growth.' },
  { icon: '🏢', title: 'Commercial Properties',        text: 'Office spaces, retail shops, and commercial buildings in strategic business locations.' },
  { icon: '📈', title: 'Property Investment Consulting', text: 'Expert guidance on investments that maximize returns and minimize risks.' },
  { icon: '🤝', title: 'Property Selling Assistance',  text: 'Sell faster with our professional marketing and extensive buyer network.' },
  { icon: '📋', title: 'Legal & Documentation Support', text: 'Property verification, documentation, registration, and full legal compliance.' },
]

const reasons = [
  { title: 'Trusted Expertise',         text: 'Years of experience in understanding local real estate markets and trends.' },
  { title: 'Verified Properties',        text: 'All listed properties undergo thorough verification for legal and ownership clarity.' },
  { title: 'Customer-Centric Approach', text: 'We prioritize your needs and provide personalized property recommendations.' },
  { title: 'Transparent Transactions',  text: 'No hidden charges. Complete transparency throughout the buying or selling process.' },
  { title: 'End-to-End Support',         text: "From property search to registration, we're with you at every stage." },
]

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Property Buyer',  rating: 5, quote: 'Dhisha Realty helped us find the perfect residential plot. The entire process was transparent and professional. Truly a team you can trust.' },
  { name: 'Priya Sharma', role: 'Investor',         rating: 5, quote: 'Excellent customer support and genuine property options. They guided me through every step. Highly recommended for property investments.' },
  { name: 'Arjun Nair',   role: 'First-time Buyer', rating: 5, quote: 'The team guided us through every step, making our property purchase stress-free and smooth. Outstanding service from start to finish.' },
]

const faqs = [
  { q: 'What types of properties does Dhisha Realty offer?',                 a: 'We offer residential plots, apartments, villas, independent houses, commercial spaces, and retail properties across prime locations.' },
  { q: 'Are all listed properties legally verified?',                        a: 'Yes, every property listed with us undergoes thorough legal verification including title checks, DTCP/RERA approvals, and ownership documentation review.' },
  { q: 'Do you assist with home loans and financing?',                        a: 'We have partnerships with leading banks and financial institutions to help you secure the best loan options with competitive interest rates.' },
  { q: 'How do I schedule a property site visit?',                           a: 'Simply contact us via phone, email, or the contact form on our website. Our team will schedule a convenient visit at your preferred time.' },
  { q: 'What is the process for selling my property through Dhisha Realty?', a: 'We handle everything — property valuation, marketing, buyer matching, negotiations, and documentation — to ensure a quick, hassle-free sale.' },
  { q: 'Do you handle RERA registration and legal documentation?',            a: 'Yes, our legal support team assists with RERA registration, sale deed drafting, stamp duty, and all related property documentation.' },
]

/* ── Stat item with count-up ── */
function StatItem({ s, i }) {
  const { display, ref } = useCountUp(s.value, 2000, s.suffix)
  return (
    <article
      className={`reveal reveal-delay-${i + 1} flex flex-col gap-2 min-h-[154px] justify-center border border-line rounded-xl bg-white/72 shadow-[0_18px_48px_rgba(13,30,44,0.06)] transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-[rgba(26,122,110,0.15)] hover:shadow-[0_24px_58px_rgba(13,30,44,0.1)]`}
    >
      <strong
        className="font-extrabold text-accent leading-none tabular-nums"
        style={{ fontSize: 'clamp(40px,4.2vw,58px)' }}
        ref={ref}
      >
        {display}
      </strong>
      <span className="text-[15px] font-bold text-ink uppercase tracking-[1px]">{s.label}</span>
      <small className="text-sm text-muted">{s.desc}</small>
    </article>
  )
}

/* ── HOME PAGE ── */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openFaq,    setOpenFaq]    = useState(null)
  useScrollReveal()

  const nextSlide = useCallback(() => setActiveSlide(p => (p + 1) % heroSlides.length), [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO SLIDER ── */}
      <section
        className="relative h-screen min-h-[620px] overflow-hidden flex items-center justify-center"
        aria-label="Featured property showcase"
      >
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide${i === activeSlide ? ' hero-slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: 'linear-gradient(135deg,rgba(10,18,26,0.72) 0%,rgba(10,18,26,0.45) 60%,rgba(10,18,26,0.55) 100%)' }}
        />

        {/* Content */}
        <div className="hero-content relative z-[3] text-center max-w-[860px] px-6">
          <p className="inline-block py-1.5 px-[18px] bg-accent/85 text-white text-[12px] font-bold tracking-[2px] uppercase rounded-sm mb-6 backdrop-blur-sm">
            {heroSlides[activeSlide].tag}
          </p>
          <h1
            className="font-extrabold text-white leading-[1.05] mb-5 [text-shadow:0_4px_32px_rgba(0,0,0,0.3)]"
            style={{ fontSize: 'clamp(40px,6vw,80px)' }}
          >
            {heroSlides[activeSlide].heading.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p
            className="text-white/82 leading-relaxed max-w-[620px] mx-auto mb-9"
            style={{ fontSize: 'clamp(15px,2vw,19px)' }}
          >
            {heroSlides[activeSlide].sub}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact"    className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        {/* Dots */}
        <div
          className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[4] flex gap-2.5"
          role="tablist"
          aria-label="Slide navigation"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeSlide}
              className={`w-2.5 h-2.5 rounded-full border-2 bg-transparent cursor-pointer transition-all duration-300 p-0 ${
                i === activeSlide
                  ? 'bg-white border-white scale-[1.3]'
                  : 'border-white/60'
              }`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-9 right-12 z-[4] w-7 h-11 border-2 border-white/45 rounded-[14px] flex justify-center pt-1.5 max-sm:hidden"
          aria-hidden="true"
        >
          <span className="scroll-bounce w-1 h-2 bg-white/80 rounded-sm" />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        className="grid gap-6 max-w-[1200px] mx-auto px-[52px] py-[84px] text-center
                   grid-cols-4 max-lg:grid-cols-2 max-lg:px-8 max-lg:py-16
                   max-sm:grid-cols-2 max-sm:gap-12 max-sm:px-5 max-sm:py-14"
        aria-label="Key statistics"
      >
        {stats.map((s, i) => <StatItem key={s.label} s={s} i={i} />)}
      </section>

      {/* ── SERVICES ── */}
      <section className="py-[92px] bg-soft max-sm:py-16" id="services">
        <div className="max-w-[1240px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="mb-[52px] reveal">
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title">Comprehensive Real Estate Services</h2>
            <p className="section-subtitle">
              From finding your dream property to legal documentation — we handle it all with
              expertise and transparency.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`service-card-wrap reveal reveal-delay-${(i % 3) + 1} bg-white border border-line rounded-xl p-9 cursor-default transition-[transform,box-shadow,border-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[rgba(26,122,110,0.15)]`}
              >
                <span className="text-[36px] mb-5 block">{s.icon}</span>
                <h3 className="text-[19px] font-bold mb-3 text-ink">{s.title}</h3>
                <p className="text-sm leading-[1.7] text-body m-0">{s.text}</p>
                <div className="w-10 h-[3px] bg-accent rounded-sm mt-5 transition-[width] duration-[350ms] group-hover:w-[70px]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-[92px] bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5 grid grid-cols-[1fr_1.1fr] gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-10">

          {/* Visual — hidden on tablet & below */}
          <div className="reveal from-left max-lg:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                alt="Modern residential building"
                className="block w-full aspect-[4/5] object-cover transition-transform duration-[600ms] hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute bottom-7 right-4 bg-accent text-white rounded-xl px-6 py-[18px] text-center shadow-[0_8px_32px_rgba(26,122,110,0.4)]">
                <strong className="block text-[36px] font-black text-white leading-none">95%</strong>
                <span className="text-[12px] text-white/85 font-semibold tracking-[0.5px] uppercase">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-kicker reveal">Why Choose Dhisha Realty?</p>
            <h2 className="section-title reveal reveal-delay-1">Clear guidance from search to registration</h2>

            <div className="flex flex-col mt-7">
              {reasons.map((r, i) => (
                <article
                  key={r.title}
                  className={`reveal reveal-delay-${i + 1} grid gap-[18px] py-5 border-b border-line items-start transition-all duration-[250ms] hover:bg-soft hover:px-3 hover:rounded-lg hover:border-transparent`}
                  style={{ gridTemplateColumns: '50px 1fr' }}
                >
                  <div className="text-[28px] font-black text-accent leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{r.title}</h3>
                    <p className="text-sm m-0 text-body leading-relaxed">{r.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-[92px] bg-soft max-sm:py-16">
        <div className="max-w-[1240px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="mb-[52px] reveal">
            <p className="section-kicker">Featured Properties</p>
            <h2 className="section-title">Selected Opportunities for Every Goal</h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
            {[
              { title: 'Premium Residential Plot', tag: 'Plots',      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80', pts: ['Prime Location','DTCP / RERA Approved','Excellent Road Connectivity','Ready for Construction'] },
              { title: 'Luxury Villa',              tag: 'Villas',     img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', pts: ['Modern Architecture','Spacious Interiors','Premium Amenities','Secure Community Living'] },
              { title: 'Commercial Space',          tag: 'Commercial', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', pts: ['High Visibility Location','Business-Friendly Environment','Excellent Investment Potential'] },
            ].map((p, i) => (
              <article
                key={p.title}
                className={`reveal reveal-delay-${i + 1} bg-white rounded-xl overflow-hidden border border-line transition-[transform,box-shadow] duration-[350ms] will-change-transform hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(0,0,0,0.1)]`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="block w-full aspect-[4/3] object-cover transition-transform duration-[550ms] hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-white text-[11px] font-bold tracking-[1px] uppercase py-[5px] px-3 rounded-[3px]">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[19px] font-bold mb-3.5 text-ink">{p.title}</h3>
                  <ul className="list-none p-0 mb-5 grid gap-2">
                    {p.pts.map(pt => (
                      <li key={pt} className="relative pl-5 text-[13px] text-body font-medium before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-accent">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/properties"
                    className="inline-flex items-center gap-1.5 text-accent text-[13px] font-bold tracking-[0.3px] transition-[gap,color] duration-[250ms] hover:gap-2.5 hover:text-ink"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/properties" className="btn btn-dark">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-[92px] bg-ink">
        <div className="max-w-[1240px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="text-center mx-auto mb-[52px] reveal" style={{ maxWidth: 600 }}>
            <p className="section-kicker" style={{ color: '#22a08f' }}>Testimonials</p>
            <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
              Hear from homeowners, investors, and businesses who trusted Dhisha Realty.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className={`reveal reveal-delay-${i + 1} bg-white/5 border border-white/10 rounded-2xl p-9 transition-[transform,background,border-color] duration-[350ms] hover:-translate-y-1.5 hover:bg-white/8 hover:border-[rgba(26,122,110,0.4)]`}
              >
                <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote className="text-[15px] text-white/80 leading-[1.7] m-0 mb-6 italic">
                  "{t.quote}"
                </blockquote>
                <footer className="flex items-center gap-3.5">
                  <div className="w-[46px] h-[46px] rounded-full bg-accent text-white grid place-items-center text-xl font-extrabold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <strong className="block text-[15px] font-bold text-white">{t.name}</strong>
                    <small className="text-[12px] text-white/50 tracking-[0.5px] uppercase">{t.role}</small>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[92px] bg-soft max-sm:py-16">
        <div className="max-w-[1240px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="max-w-[640px] mb-[52px] reveal">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about working with Dhisha Realty.</p>
          </div>

          <div className="max-w-[820px] flex flex-col border-t border-line mt-2">
            {faqs.map((faq, i) => (
              <article
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} border-b border-line overflow-hidden`}
              >
                <button
                  className="w-full flex justify-between items-center gap-4 py-[22px] bg-transparent border-none cursor-pointer text-left text-base font-semibold text-ink transition-colors duration-[250ms] hover:text-accent"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full grid place-items-center text-xl font-normal text-ink transition-all duration-300 ${
                      openFaq === i ? 'bg-accent !text-white rotate-180' : 'bg-soft'
                    }`}
                  >
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'faq-answer--open' : ''}`}>
                  <p className="m-0 text-[15px] text-body leading-[1.7]">{faq.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="reveal scale relative py-[100px] px-[52px] overflow-hidden bg-ink text-center max-sm:py-16 max-sm:px-5">
        <div
          className="absolute inset-0 opacity-[0.12] z-0"
          style={{ background: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=60') center / cover" }}
        />
        <div className="relative z-[1] max-w-[700px] mx-auto">
          <p className="section-kicker" style={{ color: '#22a08f' }}>Ready to Begin?</p>
          <h2 className="section-title !text-white" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900 }}>
            Find Your Perfect Property Today
          </h2>
          <p className="text-[17px] text-white/70 mb-9 leading-[1.7]">
            Whether you're buying your first home, investing in land, or expanding your business space,
            Dhisha Realty is here to help.{' '}
            <strong className="text-accent-light font-bold">Let's Build Your Future Together.</strong>
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact"    className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
