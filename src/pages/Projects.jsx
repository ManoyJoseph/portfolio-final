import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'

export default function Projects(){
  const [open, setOpen] = useState(null)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </div>
  )
}
