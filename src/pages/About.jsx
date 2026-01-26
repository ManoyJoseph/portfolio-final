import React from 'react'
import SkillBar from '../components/SkillBar'

export default function About(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <p className="mb-4">I am a frontend developer with a passion for building accessible, performant, and delightful user interfaces. I enjoy converting complex problems into elegant, simple solutions.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Skills</h3>
          <SkillBar skill="React" level={85} />
          <SkillBar skill="JavaScript" level={90} />
          <SkillBar skill="Tailwind CSS" level={80} />
          <SkillBar skill="Framer Motion" level={75} />
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center text-3xl">👤</div>
        </div>
      </div>
    </div>
  )
}
