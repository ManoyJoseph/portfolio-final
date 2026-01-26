import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="border rounded-lg p-4 bg-white/60 dark:bg-black/30"
    >
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm mt-2">{project.short}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onOpen(project)} className="text-sm px-3 py-1 bg-primary text-white rounded">Details</button>
        <a href={project.live} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">Live</a>
      </div>
    </motion.div>
  )
}
