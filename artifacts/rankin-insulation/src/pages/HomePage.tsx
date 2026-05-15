import ImageCarousel from '../components/ImageCarousel';
import GalleryCarousel from '../components/GalleryCarousel';

export default function HomePage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0E1525] border-b border-white/10 shadow-xl shadow-navy-900/20">
        <nav className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-7xl mx-auto font-medium tracking-tight">
          <div className="flex items-center gap-4">
            <img src="/logo.webp" alt="Rankin Insulation" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-slate-300 font-bold hover:text-[#00AEEF] transition-all duration-300" href="#insulation">Insulation</a>
            <a className="text-slate-300 font-bold hover:text-[#00AEEF] transition-all duration-300" href="#removal">Removal</a>
            <a className="text-slate-300 font-bold hover:text-[#00AEEF] transition-all duration-300" href="#painting">Painting</a>
            <a className="text-slate-300 font-bold hover:text-[#00AEEF] transition-all duration-300" href="#gallery">Gallery</a>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00AEEF]/10 hover:border-[#00AEEF] transition-all group"
              href="https://www.facebook.com/people/Rankin-Insulation/61557898892390/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <svg className="w-5 h-5 fill-white group-hover:fill-[#00AEEF] transition-colors" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-[#00AEEF] text-white font-bold px-6 py-2.5 rounded-lg active:scale-95 transition-transform shadow-lg shadow-[#00AEEF]/20 inline-block text-center text-sm md:text-base"
            >
              Contact Us Today!
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] flex items-center pt-[100px] pb-24 md:pt-[120px] md:pb-0 overflow-hidden bg-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111415] via-[#191c1d] to-[#111415] z-0"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
                Expert Insulation for a <span className="text-[#82cfff]">Lifetime of Comfort</span>
              </h1>
              <p className="text-sm md:text-lg text-slate-400 max-w-lg leading-relaxed">
                Trusted protection, built by a family that treats your home like our own. Where technical expertise meets genuine craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 md:pt-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-[#82cfff] text-[#00344b] font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl flex items-center gap-2 md:gap-3 hover:shadow-2xl hover:shadow-[#82cfff]/40 transition-all inline-flex w-fit text-sm md:text-base"
                >
                  Request a Quote
                  <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="relative p-2 md:p-12 w-full max-w-[40vh] md:max-w-none mx-auto">
              <div className="aspect-square bg-[#323536] rounded-full blur-3xl opacity-20 absolute -top-10 md:-top-20 -right-10 md:-right-20"></div>
              <div className="relative bg-[#1d2021] p-2 md:p-4 rounded-full border border-white/10 shadow-2xl">
                <div className="rounded-full overflow-hidden aspect-square border-4 border-[#82cfff]/20">
                  <img
                    className="w-full h-full object-cover object-left scale-150 origin-left"
                    alt="Professional insulation contractor"
                    src="/IMG_7200.webp"
                  />
                </div>
              </div>
              {/* Stats Floating Card */}
              <div className="absolute top-0 left-0 md:top-6 md:left-2 z-20 bg-[#282a2b] p-4 md:p-6 rounded-xl border border-[#82cfff]/30 shadow-xl scale-75 md:scale-100 origin-top-left">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-12 w-12 bg-[#82cfff]/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#82cfff]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-2xl">15+ Years</div>
                    <div className="text-slate-400 text-sm">Professional Craftsmanship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Down Indicator */}
          <div className="absolute top-0 left-0 w-full h-[100svh] pointer-events-none z-30 flex flex-col justify-end items-center pb-6 md:pb-8">
            <div className="pointer-events-auto flex flex-col items-center gap-2 bg-[#282a2b]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-6 py-3 rounded-3xl border border-white/5 md:border-transparent group">
              <a href="#insulation" className="text-slate-300 md:text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-[#82cfff] transition-colors flex flex-col items-center text-center drop-shadow-md">
                <span className="hidden md:block">Scroll Down</span>
                <div className="hidden md:flex w-5 h-8 border-[2px] border-current rounded-full mt-2 md:mt-3 justify-center pt-1.5 opacity-70 group-hover:opacity-100 transition-opacity relative">
                  <div className="w-1 h-2 bg-current rounded-full animate-scroll-wheel"></div>
                </div>
                <span className="md:hidden material-symbols-outlined text-3xl animate-bounce">keyboard_arrow_down</span>
              </a>
            </div>
          </div>
        </section>

        {/* Insulation Section */}
        <section className="py-20 md:py-[80px] bg-[#0c0f10] relative" id="insulation">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-[#ea8c21] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Core Solutions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Premium Spray Foam Insulation</h2>
              <div className="h-1 w-24 bg-[#82cfff] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {/* Closed Cell */}
              <div className="bg-[#1d2021] p-10 rounded-xl border border-white/5 hover:border-[#82cfff]/50 transition-colors group">
                <h3 className="text-2xl font-bold text-white mb-6">Closed Cell Insulation</h3>
                <p className="text-[18px] text-slate-400 mb-8 leading-relaxed">
                  Engineered for maximum thermal efficiency and unmatched structural strength. Closed-cell foam creates a rigid air and vapor barrier that reinforces the structural integrity of your walls while delivering the highest R-value per inch.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    High R-Value (6.5 - 7.0 per inch)
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    Vapor Barrier &amp; Structural Support
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    Flood and Moisture Resistance
                  </li>
                </ul>
                <ImageCarousel
                  images={[
                    { src: '/IMG_1419.webp', alt: 'Closed Cell Insulation Application' },
                    { src: '/IMG_1420.webp', alt: 'Closed Cell Insulation Details' },
                    { src: '/IMG_1421.webp', alt: 'Closed Cell Insulation Finish' },
                  ]}
                />
              </div>
              {/* Open Cell */}
              <div className="bg-[#1d2021] p-10 rounded-xl border border-white/5 hover:border-[#82cfff]/50 transition-colors group">
                <h3 className="text-2xl font-bold text-white mb-6">Open Cell Insulation</h3>
                <p className="text-[18px] text-slate-400 mb-8 leading-relaxed">
                  Designed for acoustic tranquility and versatile performance. Open-cell foam expands to fill every crack and crevice, creating an airtight seal that significantly reduces noise pollution while allowing for better cost efficiency in large areas.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    Exceptional Sound Dampening
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    Superior Air Sealing Properties
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-[#82cfff] text-sm">check_circle</span>
                    Sustainable &amp; Cost-Effective
                  </li>
                </ul>
                <ImageCarousel
                  images={[
                    { src: '/IMG_0444.webp', alt: 'Open Cell Insulation Application' },
                    { src: '/IMG_0499.webp', alt: 'Open Cell Insulation Details' },
                    { src: '/IMG_2224.webp', alt: 'Open Cell Insulation Finish' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Removal Section */}
        <section className="py-20 md:py-[80px] relative overflow-hidden" id="removal">
          <div className="absolute inset-0 bg-[#152232] opacity-50 z-0"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 aspect-video group">
                  <img loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Insulation Removal Process"
                    src="/IMG_1066.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 aspect-video group">
                    <img loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Insulation Removal Detail" src="/IMG_1068.webp" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 aspect-video group">
                    <img loading="lazy" className="w-full h-full object-cover object-[center_75%] transition-transform duration-700 group-hover:scale-110" alt="Insulation Removal Aftermath" src="/IMG_1071.webp" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Safety First</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>Insulation Removal</h2>
                </div>
                <p className="text-[18px] text-slate-400 leading-relaxed">
                  Effective efficiency starts with a proper foundation. Our professional removal service ensures a safe, dust-free environment by eliminating old, failing, or contaminated materials using medical-grade HEPA filtration systems.
                </p>
                <div className="grid gap-6">
                  <div className="flex gap-4 items-start bg-[#1d2021] p-6 rounded-xl border border-white/5">
                    <span className="material-symbols-outlined text-[#ea8c21] text-3xl">masks</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">HEPA Filtration</h4>
                      <p className="text-sm text-slate-400">99.97% particulate capture for optimal indoor air quality during removal.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-[#1d2021] p-6 rounded-xl border border-white/5">
                    <span className="material-symbols-outlined text-[#ea8c21] text-3xl">sanitizer</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">Professional Sanitation</h4>
                      <p className="text-sm text-slate-400">Full decontamination of attic or crawl spaces to prepare for new installation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Painting Section */}
        <section className="py-20 md:py-[80px] bg-[#111415]" id="painting">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 w-full">
              <span className="text-[#ea8c21] text-sm font-semibold tracking-widest uppercase mb-4 block">Finished Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Professional Foam Painting &amp; Finishing</h2>
              <p className="text-[18px] text-slate-400 w-full leading-relaxed">
                Achieve a polished, architectural look for exposed insulation. Our specialty finishes provide durable protection and aesthetic integration for industrial or residential spaces where spray foam remains visible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#1d2021] p-8 rounded-2xl border border-white/10 hover:border-[#82cfff]/30 transition-all group/card shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover/card:text-[#82cfff] transition-colors">Closed Cell Painted</h3>
                <div className="grid gap-6">
                  <div className="relative rounded-xl overflow-hidden group aspect-video border border-white/10 hover:border-[#82cfff]/50 transition-colors">
                    <img loading="lazy" src="/IMG_3626.webp" alt="Closed Cell Painted Application" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden group aspect-video border border-white/10 hover:border-[#82cfff]/50 transition-colors">
                    <img loading="lazy" src="/IMG_1461.webp" alt="Closed Cell Painted Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1d2021] p-8 rounded-2xl border border-white/10 hover:border-[#82cfff]/30 transition-all group/card shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover/card:text-[#82cfff] transition-colors">Open Cell Painted</h3>
                <div className="grid gap-6">
                  <div className="relative rounded-xl overflow-hidden group aspect-video border border-white/10 hover:border-[#82cfff]/50 transition-colors">
                    <img loading="lazy" src="/IMG_4621.webp" alt="Open Cell Painted Application" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden group aspect-video border border-white/10 hover:border-[#82cfff]/50 transition-colors">
                    <img loading="lazy" src="/IMG_4629.webp" alt="Open Cell Painted Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Gallery Section */}
        <section className="py-20 md:py-[80px] bg-[#0c0f10]" id="gallery">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="text-[#ea8c21] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Project Gallery</h2>
              <div className="h-1 w-24 bg-[#82cfff] mx-auto mb-6"></div>
              <p className="text-[18px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Explore a showcase of our professional insulation installations across residential and commercial properties.
              </p>
            </div>

            <GalleryCarousel images={[
              { src: '/gallery-cc-painted-1.webp', alt: 'Closed Cell Painted' },
              { src: '/gallery-cc-painted-2.webp', alt: 'Closed Cell Painted' },
              { src: '/gallery-cc-1.webp', alt: 'Closed Cell Insulation' },
              { src: '/IMG_9486.webp', alt: 'Insulation Project' },
              { src: '/IMG_9487.webp', alt: 'Insulation Project' },
              { src: '/IMG_9488.webp', alt: 'Insulation Project' },
              { src: '/gallery-cc-2.webp', alt: 'Closed Cell Insulation' },
              { src: '/gallery-oc-painted-1.webp', alt: 'Open Cell Painted' },
              { src: '/gallery-oc-painted-2.webp', alt: 'Open Cell Painted' },
              { src: '/gallery-oc-1.webp', alt: 'Open Cell Insulation' },
              { src: '/gallery-oc-2.webp', alt: 'Open Cell Insulation' },
            ]} />
          </div>
        </section>

        {/* Final CTA / Contact Section */}
        <section className="py-20 md:py-[80px] bg-[#282a2b] relative overflow-hidden" id="contact">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#82cfff] opacity-5 blur-[120px] rounded-full"></div>
          <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10">
            <span className="material-symbols-outlined text-[#82cfff] text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>home_filled</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ letterSpacing: '-0.02em' }}>Request your free assessment today!</h2>
            <p className="text-[18px] text-slate-400 mb-12 leading-relaxed">
              Whether it&apos;s a new build, a renovation, or an efficiency upgrade, Rankin Insulation delivers the professional expertise your home deserves.
            </p>

            <div className="bg-[#1d2021] border border-white/10 rounded-2xl p-8 mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center shadow-2xl">
              <div className="flex flex-col items-center gap-3 flex-1">
                <span className="material-symbols-outlined text-[#82cfff] text-4xl mb-2">location_on</span>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Rankin Insulation</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3111+Co+Rd+4413+%232301,+Canton,+TX+75103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-400 text-lg hover:text-[#82cfff] hover:underline transition-colors mt-2"
                  >
                    3111 Co Rd 4413 #2301<br />
                    Canton, TX 75103
                  </a>
                </div>
              </div>
              <div className="w-full md:w-px h-px md:h-40 bg-white/10 block"></div>
              <div className="flex flex-col items-center gap-3 flex-1">
                <span className="material-symbols-outlined text-[#82cfff] text-4xl mb-2">call</span>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Call Us Today</h4>
                  <p className="text-slate-300 text-2xl tracking-wide font-medium mb-6">(972) 207-6320</p>
                  <a
                    href="tel:9722076320"
                    className="w-full sm:w-auto bg-[#00AEEF] text-white font-black px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#00AEEF]/30 inline-block"
                  >
                    Call Now for a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0E1525] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-12 font-['Work_Sans'] text-sm text-slate-400">
          <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
            <img src="/logo.webp" alt="Rankin Insulation" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex gap-4">
            <a
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00AEEF]/10 hover:border-[#00AEEF] transition-all group"
              href="https://www.facebook.com/people/Rankin-Insulation/61557898892390/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <svg className="w-5 h-5 fill-white group-hover:fill-[#00AEEF] transition-colors" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#82cfff]/10 hover:border-[#82cfff] transition-all"
              href="https://www.google.com/maps/search/?api=1&query=3111+Co+Rd+4413+%232301,+Canton,+TX+75103"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Maps"
            >
              <span className="material-symbols-outlined text-white text-xl">location_on</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
