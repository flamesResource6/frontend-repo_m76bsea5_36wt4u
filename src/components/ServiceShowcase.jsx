import { motion } from 'framer-motion'
import { Flower2, Sparkles, Lightbulb, Landmark, PartyPopper, Palette } from 'lucide-react'

const items = [
  { icon: Flower2, title: 'Floral Art', desc: 'Luxurious arrangements in ivory and blush, curated to your theme.' },
  { icon: Lightbulb, title: 'Lighting Design', desc: 'Warm ambient lights, chandeliers and fairy-lit pathways.' },
  { icon: Landmark, title: 'Mandap & Stage', desc: 'Architectural focal points with rich fabrics and textures.' },
  { icon: PartyPopper, title: 'Reception Decor', desc: 'Tablescapes, backdrops and entrance features for grand reveals.' },
  { icon: Palette, title: 'Theme Styling', desc: 'From classic to contemporary, tailored palettes and props.' },
  { icon: Sparkles, title: 'Special Effects', desc: 'Cold pyro, low fog and confetti for cinematic moments.' },
]

export default function ServiceShowcase() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-rose-50/40 dark:from-neutral-900 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Signature Services</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">Everything you need to turn your celebration into a work of art.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-12 w-12 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-300 flex items-center justify-center mb-4">
                <it.icon />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{it.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">{it.desc}</p>
              <div className="absolute inset-x-0 -bottom-20 group-hover:bottom-0 transition-all duration-500 h-20 bg-gradient-to-t from-rose-200/30 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
