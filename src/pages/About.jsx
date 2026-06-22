import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Happy Client Journeys' },
  { value: 4000, suffix: '+', label: 'Properties Reviewed' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

const reasons = [
  { num: '01', title: 'Trusted Expertise', text: 'Years of experience in understanding local real estate markets and guiding clients to the best opportunities.' },
  { num: '02', title: 'Verified Properties', text: 'All listed properties undergo thorough verification for legal clarity, ownership status, and regulatory approvals.' },
  { num: '03', title: 'Customer-Centric Approach', text: 'We listen first. Every recommendation is tailored to match your goals, budget, and lifestyle.' },
  { num: '04', title: 'Transparent Transactions', text: 'No hidden charges, no surprises. Complete transparency throughout every step of the buying or selling process.' },
  { num: '05', title: 'End-to-End Support', text: "From the first site visit to the final registration — we're with you at every stage of your property journey." },
]

const values = [
  { icon: '◆', label: 'Integrity', desc: 'Honest and ethical in every transaction' },
  { icon: '◈', label: 'Excellence', desc: 'Delivering the highest quality service always' },
  { icon: '◉', label: 'Innovation', desc: 'Modern solutions for modern property needs' },
  { icon: '◇', label: 'Trust', desc: 'Building lasting relationships with every client' },
]

function StatItem({ s, i }) {
  const { display, ref } = useCountUp(s.value, 2000, s.suffix)
  return (
    <article className={`flex flex-col gap-2 reveal reveal-delay-${i + 1}`}>
      <strong ref={ref} className="text-[clamp(36px,8vw,52px)] font-bold text-accent leading-none tabular-nums">{display}</strong>
      <span className="text-[15px] font-bold text-ink uppercase tracking-[1px]">{s.label}</span>
    </article>
  )
}

export default function About() {
  useScrollReveal()

  return (
    <main className="w-full overflow-x-hidden">

      {/* Page Hero */}
      <section className="relative pt-[160px] px-[52px] pb-[100px] overflow-hidden bg-ink flex items-center justify-center text-center min-h-screen">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <svg className="w-full h-full object-cover" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="700" cy="100" r="300" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <circle cx="700" cy="100" r="200" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <circle cx="700" cy="100" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <rect x="50" y="200" width="160" height="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" transform="rotate(15 130 280)"/>
            <rect x="100" y="250" width="80" height="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(15 140 290)"/>
            <line x1="0" y1="400" x2="800" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="0" y1="500" x2="800" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[700px]">
          <p className="section-kicker !text-accent-light">About Us</p>
          <h1 className="text-[clamp(36px,5vw,62px)] font-black text-white mb-5 tracking-[-0.02em]">Welcome to Dhisha Realty</h1>
          <p className="text-lg text-white/65 max-w-[560px] mx-auto leading-[1.7]">A customer-focused real estate company dedicated to helping individuals and businesses find the right property solutions with transparency and trust.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-[92px] max-sm:py-16 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-10">
            <div className="reveal from-left">
              <p className="section-kicker">Our Story</p>
              <h2 className="section-title">Built on Trust, Driven by Purpose</h2>
              <p className="mb-[18px] text-[16px] leading-[1.8] text-body">
                Dhisha Realty was founded with a simple yet powerful mission — to make property transactions
                transparent, hassle-free, and customer-first. We understand that buying or selling a property
                is one of the most significant decisions in your life, and we take that responsibility seriously.
              </p>
              <p className="mb-[18px] text-[16px] leading-[1.8] text-body">
                Our experienced team understands market trends and works closely with clients to ensure a
                smooth and hassle-free property journey. With a commitment to transparency, integrity, and
                customer satisfaction, we assist clients in buying, selling, and investing in premium real
                estate opportunities.
              </p>
              <p className="mb-[18px] text-[16px] leading-[1.8] text-body">
                From our roots as a local real estate consultancy, Dhisha Realty has grown into a trusted
                name — backed by thousands of satisfied clients and a portfolio that spans residential plots,
                luxury villas, commercial spaces, and everything in between.
              </p>
              <Link to="/contact" className="btn btn-dark mt-2">
                Talk to Our Team
              </Link>
            </div>

            {/* Decorative Visual */}
            <div className="reveal from-right max-lg:order-first" aria-hidden="true">
              <div className="relative bg-soft rounded-[20px] py-12 px-8 flex items-center justify-center min-h-[420px] overflow-hidden border border-line max-lg:min-h-[280px]">
                <div className="relative z-[2] w-full max-w-[300px]">
                  <svg className="w-full h-auto" viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Building silhouette */}
                    <rect x="60" y="100" width="180" height="240" fill="#0d1e2c" rx="4"/>
                    <rect x="80" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="135" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="190" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="80" y="180" width="30" height="40" fill="rgba(255,255,255,0.1)" rx="2"/>
                    <rect x="135" y="180" width="30" height="40" fill="#1a7a6e" rx="2" opacity="0.9"/>
                    <rect x="190" y="180" width="30" height="40" fill="rgba(255,255,255,0.1)" rx="2"/>
                    <rect x="80" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="135" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="190" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="120" y="300" width="60" height="40" fill="#1a7a6e" rx="2"/>
                    {/* Roof detail */}
                    <polygon points="60,100 150,40 240,100" fill="#1a3040" />
                    <circle cx="150" cy="68" r="8" fill="#1a7a6e"/>
                    {/* Decorative rings */}
                    <circle cx="150" cy="180" r="130" stroke="#1a7a6e" strokeWidth="0.8" opacity="0.15" strokeDasharray="6 4"/>
                    <circle cx="150" cy="180" r="155" stroke="#0d1e2c" strokeWidth="0.8" opacity="0.08" strokeDasharray="4 6"/>
                  </svg>
                </div>
                {/* Corner accents */}
                <div className="absolute w-[60px] h-[60px] z-[1] top-4 left-4 border-t-3 border-l-3 border-accent rounded-tl"/>
                <div className="absolute w-[60px] h-[60px] z-[1] bottom-4 right-4 border-b-3 border-r-3 border-accent rounded-br"/>
                <div className="absolute bottom-6 left-6 grid grid-cols-5 gap-2 z-0" aria-hidden="true">
                  {Array.from({length: 25}).map((_,i) => <span key={i} className="w-1 h-1 rounded-full bg-accent opacity-25"/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-4 gap-8 bg-white py-20 max-w-[1200px] mx-auto text-center max-md:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-6 max-sm:px-5 max-sm:py-16">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} i={i} />
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="py-[92px] max-sm:py-16 bg-soft">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="text-center max-w-[600px] mx-auto mb-[52px] reveal">
            <p className="section-kicker">What Drives Us</p>
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
            <article className="mv-card-wrap bg-white border border-line rounded-2xl p-10 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl reveal reveal-delay-1">
              <div className="w-[60px] h-[60px] mb-6" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#1a7a6e" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <circle cx="30" cy="30" r="18" stroke="#1a7a6e" strokeWidth="1" opacity="0.5"/>
                  <circle cx="30" cy="30" r="7" fill="#1a7a6e"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-extrabold mb-3.5 text-ink">Our Mission</h3>
              <p className="text-[15px] leading-[1.8] m-0 text-body">
                To provide reliable, transparent, and value-driven real estate services that help our
                clients make confident property decisions. We strive to remove the complexity from
                property transactions and replace it with clarity and trust.
              </p>
            </article>
            <article className="mv-card-wrap bg-white border border-line rounded-2xl p-10 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl reveal reveal-delay-2">
              <div className="w-[60px] h-[60px] mb-6" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
                  <polygon points="30,5 55,45 5,45" stroke="#1a7a6e" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                  <polygon points="30,18 44,40 16,40" stroke="#1a7a6e" strokeWidth="1" opacity="0.5" fill="none"/>
                  <circle cx="30" cy="32" r="4" fill="#1a7a6e"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-extrabold mb-3.5 text-ink">Our Vision</h3>
              <p className="text-[15px] leading-[1.8] m-0 text-body">
                To become a trusted name in the real estate industry by delivering exceptional customer
                experiences and quality property solutions. We envision a future where every property
                journey is guided, transparent, and fulfilling.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[92px] max-sm:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="text-center max-w-[600px] mx-auto mb-[52px] reveal">
            <p className="section-kicker">Core Values</p>
            <h2 className="section-title">The Principles We Live By</h2>
          </div>
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:gap-3.5">
            {values.map((v, i) => (
              <article key={v.label} className={`bg-white border border-line rounded-xl py-9 px-7 text-center transition-all duration-350 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent group cursor-default reveal reveal-delay-${i + 1}`}>
                <div className="text-[32px] text-accent block mb-4 transition-transform duration-350 group-hover:scale-120 group-hover:rotate-[15deg]" aria-hidden="true">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2.5 text-ink">{v.label}</h3>
                <p className="text-sm leading-1.6 m-0 text-body">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[92px] max-sm:py-16 bg-soft overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-[72px] items-start max-lg:grid-cols-1 max-lg:gap-10">
            <div className="reveal from-left">
              <p className="section-kicker">Why Choose Us</p>
              <h2 className="section-title">Clear guidance from search to registration</h2>
              <p className="mt-4 max-w-[460px] text-body">
                We combine local market knowledge with genuine care for our clients — making us
                the preferred choice for thousands of property buyers and investors.
              </p>
            </div>
            <div className="flex flex-col border-t border-line reveal from-right">
              {reasons.map((r, i) => (
                <article key={r.num} className={`grid grid-cols-[56px_1fr] gap-4 py-[22px] px-4 border-b border-line items-start transition-colors duration-250 hover:bg-white hover:rounded-lg reveal-delay-${i + 1}`}>
                  <span className="text-[30px] font-black text-accent/60 leading-none pt-1">{r.num}</span>
                  <div>
                    <h4 className="text-[16px] font-bold mb-1 text-ink">{r.title}</h4>
                    <p className="text-sm m-0 leading-[1.65] text-body">{r.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal scale relative bg-ink py-[92px] px-[52px] text-center overflow-hidden max-sm:py-16 max-sm:px-5">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="500" cy="100" r="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <circle cx="100" cy="100" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,46px)] font-black text-white mb-4">Ready to Start Your Property Journey?</h2>
          <p className="text-[17px] text-white/65 mb-9">Let Dhisha Realty be your trusted guide in finding the perfect property.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

