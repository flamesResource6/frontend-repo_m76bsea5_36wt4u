export default function Footer() {
  return (
    <footer className="border-t border-white/30 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-amber-200 shadow-inner mb-3" />
          <p className="text-neutral-600 dark:text-neutral-300">Crafting wedding stories with elegance and heart.</p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li><a href="#services" className="hover:text-rose-500">Services</a></li>
            <li><a href="#packages" className="hover:text-rose-500">Packages</a></li>
            <li><a href="#gallery" className="hover:text-rose-500">Gallery</a></li>
            <li><a href="#about" className="hover:text-rose-500">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li>hello@aureliaweddings.com</li>
            <li>+1 (202) 555‑0147</li>
            <li>New York, NY</li>
          </ul>
        </div>
        <div className="text-neutral-600 dark:text-neutral-300">
          <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Hours</h4>
          <p>Mon–Sat: 10am–6pm</p>
          <p className="mt-6">© {new Date().getFullYear()} Aurelia Weddings</p>
        </div>
      </div>
    </footer>
  )
}
