import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/40 to-white dark:from-neutral-900 dark:via-neutral-900/60 dark:to-neutral-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            Immersive 3D Wedding Aesthetics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl max-w-2xl text-neutral-700 dark:text-neutral-300"
          >
            A modern celebration of art and technology. Explore interactive 3D elements, refined typography, and luminous details—crafted for unforgettable events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg hover:shadow-xl transition">
              Book Now
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-rose-200/60 dark:border-rose-300/20 text-rose-600 dark:text-rose-200 hover:bg-rose-50/60 dark:hover:bg-rose-500/10 transition">
              View Gallery
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl bg-white/30 dark:bg-white/5 backdrop-blur border border-white/50 dark:border-white/10 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden"
          aria-label="Interactive 3D Object"
        >
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/10 dark:to-black/20" />
        </motion.div>
      </div>
    </section>
  )
}
