import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceShowcase from './components/ServiceShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ServiceShowcase />
        <section id="packages" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Curated Packages</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">Silver, Gold and Platinum tiers to fit your vision and budget.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Silver', price: '$2,999', perks: ['Elegant florals', 'Ambient lighting', 'Welcome decor'] },
                { name: 'Gold', price: '$5,499', perks: ['Premium florals', 'Stage styling', 'Entrance feature'] },
                { name: 'Platinum', price: '$8,999', perks: ['Signature mandap', 'Chandeliers', 'Luxury tablescapes'] },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-rose-600">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
                    {p.perks.map((perk) => (
                      <li key={perk}>• {perk}</li>
                    ))}
                  </ul>
                  <a href="#booking" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow hover:from-rose-600 hover:to-rose-500 transition">Book Package</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50/40 to-white dark:from-neutral-900 dark:to-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Gallery Highlights</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">A glimpse into atmospheres we have created.</p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {[1,2,3,4,5,6,7,8,9].map((i) => (
                <img
                  key={i}
                  loading="lazy"
                  src={`https://source.unsplash.com/1200x900/?wedding,decor&sig=${i}`}
                  alt="Wedding decor"
                  className="mb-4 w-full rounded-xl shadow-sm hover:shadow-lg transition"
                />
              ))}
            </div>
          </div>
        </section>
        <section id="booking" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Quick Booking</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">Share a few details and we will craft a proposal for you.</p>
            </div>
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400" placeholder="Full Name" />
                <input className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400" placeholder="Email" type="email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400" placeholder="Phone" />
                <input className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400" placeholder="Event Date" type="date" />
              </div>
              <select className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100">
                <option>Silver</option>
                <option>Gold</option>
                <option>Platinum</option>
              </select>
              <textarea className="w-full rounded-xl border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-rose-300/70 dark:ring-rose-500/40 border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400" placeholder="Tell us about your vision" rows={4} />
              <button className="inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow hover:from-rose-600 hover:to-rose-500 transition">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
