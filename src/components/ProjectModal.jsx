import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <button onClick={onClose} aria-label="Close" className="ml-4">✕</button>
        </div>
        <p className="mt-4">{project.description}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tech?.map(t => (
            <span key={t} className="text-sm px-2 py-1 border rounded">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
