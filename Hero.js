
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="min-h-[70vh] flex items-center justify-center text-center px-6" style={{background: 'linear-gradient(0deg, rgba(0,0,0,0.12), rgba(0,0,0,0.12)), url(/assets/hero.jpg) center/cover no-repeat'}}>
      <div className="max-w-4xl">
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="hero-title text-5xl md:text-6xl text-white leading-tight">Made in India.</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}} className="mt-4 text-white max-w-3xl mx-auto">We are a design-led export house crafting stone products with care, thought, and disciplined process.</motion.p>
        <div className="mt-6">
          <Link href="/contact"><a className="btn btn-primary">Work with us</a></Link>
        </div>
      </div>
    </section>
  )
}
