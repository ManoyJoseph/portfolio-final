import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div>
      <Hero />

      <motion.section className="mt-12" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-sm">Check out my work below. Visit the projects page to see more!</p>
      </motion.section>
    </div>
  )
}
