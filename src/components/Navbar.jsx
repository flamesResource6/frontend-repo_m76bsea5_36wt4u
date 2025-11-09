import { useEffect, useState } from 'react'
import { Moon, Sun, Phone, Menu } from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    if (initial === 'dark') root.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    const root = document.documentElement
    root.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-amber-200 shadow-inner" />
          <span className="font-semibold tracking-tight text-lg text-neutral-900 dark:text-white">Aurelia Weddings</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-200">
          <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
          <a href="#packages" className="hover:text-rose-500 transition-colors">Packages</a>
          <a href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="#booking" className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-400 text-white px-4 py-2 rounded-full shadow hover:from-rose-600 hover:to-rose-500 transition">
            <Phone size={16} /> Book Now
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-neutral-800 dark:text-neutral-100">
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-rose-500">Services</a>
            <a href="#packages" onClick={() => setOpen(false)} className="hover:text-rose-500">Packages</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="hover:text-rose-500">Gallery</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-rose-500">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-rose-500">Contact</a>
            <a href="#booking" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-rose-400 text-white px-4 py-2 rounded-full shadow">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
