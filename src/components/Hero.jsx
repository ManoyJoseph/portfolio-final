import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Hi, I'm Your Name</h1>
        <p className="text-lg mb-4">I'm a Frontend Developer who builds beautiful and accessible web apps.</p>
        <div className="flex gap-3">
          <Link to="/projects" className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90">View Projects</Link>
          <Link to="/contact" className="px-4 py-2 border rounded-md hover:bg-accent/5">Contact Me</Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="w-48 h-48 rounded-full object-cover shadow-lg" 
        />
      </motion.div>
    </section>
  )
}
