import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    sub: 'Mon – Sat, 9am – 6pm',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email Us',
    value: 'info@dhisharealty.com',
    href: 'mailto:info@dhisharealty.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Visit Us',
    value: 'Your Office Address',
    href: '#',
    sub: 'Coimbatore, Tamil Nadu',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with Us',
    href: 'https://wa.me/91XXXXXXXXXX',
    sub: 'Quick response guaranteed',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  useScrollReveal()

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="w-full overflow-x-hidden">

      {/* Page Hero */}
      <section className="relative pt-[160px] px-[52px] pb-[100px] overflow-hidden bg-gradient-to-br from-[#0d1e2c] to-[#1a3248] flex items-center justify-center text-center min-h-screen">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <svg className="w-full h-full object-cover" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="150" cy="200" r="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <circle cx="150" cy="200" r="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <circle cx="150" cy="200" r="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <rect x="550" y="80" width="200" height="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" transform="rotate(20 650 180)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[700px]">
          <p className="section-kicker !text-accent-light">Get In Touch</p>
          <h1 className="text-[clamp(36px,5vw,62px)] font-black text-white mb-5 tracking-[-0.02em]">Contact Dhisha Realty</h1>
          <p className="text-lg text-white/65 max-w-[560px] mx-auto leading-[1.7]">Ready to find your perfect property? Our team is here to guide you every step of the way.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-soft">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 bg-white border border-line rounded-[14px] p-[28px_24px] no-underline transition-all duration-350 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent group cursor-pointer reveal"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 grid place-items-center shrink-0 transition-colors duration-300 group-hover:bg-accent">
                  {/* Clone or wrap icon to apply hover classes */}
                  <div className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{item.label}</p>
                  <strong className="block text-[15px] font-bold text-ink mb-1 leading-1.3">{item.value}</strong>
                  <small className="block text-xs text-muted">{item.sub}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-20 max-sm:py-14 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">

            {/* Form */}
            <div className="reveal from-left">
              <p className="section-kicker">Send Us a Message</p>
              <h2 className="section-title">Let's Start a Conversation</h2>
              <p className="mb-8 text-base leading-1.7 text-body">
                Fill in the form below and our team will get back to you within 24 hours with
                the right property options for you.
              </p>

              {submitted ? (
                <div className="text-center py-13 px-6 bg-soft rounded-2xl border border-line">
                  <div className="w-16 h-16 rounded-full bg-accent text-white text-2.5xl grid place-items-center mx-auto mb-5">✓</div>
                  <h3 className="text-2.5xl font-extrabold mb-3 text-ink">Thank You!</h3>
                  <p className="mb-7 max-w-[360px] mx-auto text-body leading-relaxed">Your message has been sent successfully. Our team will contact you within 24 hours.</p>
                  <button className="btn btn-dark" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={submit}>
                  <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-semibold text-ink tracking-wide" htmlFor="contact-name">Full Name *</label>
                      <input
                        className="p-3.5 border-1.5 border-line rounded-lg bg-white text-[15px] text-ink outline-none transition-all duration-250 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,122,110,0.15)]"
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-semibold text-ink tracking-wide" htmlFor="contact-phone">Phone Number *</label>
                      <input
                        className="p-3.5 border-1.5 border-line rounded-lg bg-white text-[15px] text-ink outline-none transition-all duration-250 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,122,110,0.15)]"
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-ink tracking-wide" htmlFor="contact-email">Email Address</label>
                    <input
                      className="p-3.5 border-1.5 border-line rounded-lg bg-white text-[15px] text-ink outline-none transition-all duration-250 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,122,110,0.15)]"
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-ink tracking-wide" htmlFor="contact-type">Property Interest</label>
                    <select 
                      className="form-select p-3.5 border-1.5 border-line rounded-lg bg-white text-[15px] text-ink outline-none transition-all duration-250 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,122,110,0.15)] appearance-none" 
                      id="contact-type" 
                      name="type" 
                      value={form.type} 
                      onChange={handle}
                    >
                      <option value="">Select property type...</option>
                      <option value="Residential Plot">Residential Plot</option>
                      <option value="Villa">Luxury Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial Space</option>
                      <option value="Farm Land">Farm Land</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-ink tracking-wide" htmlFor="contact-message">Your Message *</label>
                    <textarea
                      className="p-3.5 border-1.5 border-line rounded-lg bg-white text-[15px] text-ink outline-none transition-all duration-250 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,122,110,0.15)] resize-none"
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handle}
                      placeholder="Tell us about your requirements — budget, location preference, property type..."
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary self-start gap-2.5 min-h-[52px] px-9 text-[15px]">
                    Send Message
                    <svg className="inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Map / Visual Side */}
            <div className="flex flex-col gap-6 reveal from-right">
              {/* Map placeholder */}
              <div className="relative bg-soft border border-line rounded-2xl min-h-[280px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,122,110,0.15)_0%,transparent_70%)]" />
                <div className="relative z-10 flex flex-col items-center gap-2.5 p-8">
                  <svg viewBox="0 0 80 80" fill="none" width="60" height="60">
                    <circle cx="40" cy="40" r="38" stroke="#1a7a6e" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
                    <circle cx="40" cy="40" r="25" stroke="#1a7a6e" strokeWidth="1" opacity="0.3"/>
                    <circle cx="40" cy="40" r="10" fill="#1a7a6e" opacity="0.8"/>
                    <circle cx="40" cy="40" r="5" fill="#1a7a6e"/>
                  </svg>
                  <p className="text-[17px] font-bold text-ink mt-2 mb-0">Your Office Location</p>
                  <small className="text-sm text-muted">Coimbatore, Tamil Nadu</small>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-4" style={{ minHeight: 40, fontSize: 13 }}>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-ink rounded-2xl p-8">
                <h3 className="text-white text-lg font-bold mb-5">Office Hours</h3>
                <div className="flex flex-col gap-2.5 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between items-center"><span className="text-sm text-white/60">Monday – Friday</span><span className="text-sm font-semibold text-white/90">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm text-white/60">Saturday</span><span className="text-sm font-semibold text-white/90">9:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm text-white/60">Sunday</span><span className="text-sm font-semibold text-white/90">By Appointment</span></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-accent-light text-xs shrink-0">✦</span>
                    <p className="m-0 text-sm text-white/65">Free property consultation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent-light text-xs shrink-0">✦</span>
                    <p className="m-0 text-sm text-white/65">No obligation, no pressure</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent-light text-xs shrink-0">✦</span>
                    <p className="m-0 text-sm text-white/65">Expert legal guidance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

