import React from 'react'

const items = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', period: '2022 - Present', desc: 'Building responsive UIs and improving core web performance metrics.' },
  { id: 2, title: 'Web Developer', company: 'Company B', period: '2020 - 2022', desc: 'Developed full-stack web applications and client integrations.' },
  { id: 3, title: 'Junior Developer', company: 'Company C', period: '2018 - 2020', desc: 'Started journey with HTML, CSS, and JavaScript fundamentals.' }
]

export default function Experience(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <div className="grid gap-4">
        {items.map(it => (
          <div key={it.id} className="border rounded p-4">
            <div className="flex justify-between items-center flex-col md:flex-row">
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <div className="text-sm opacity-75">{it.company}</div>
              </div>
              <div className="text-sm mt-2 md:mt-0">{it.period}</div>
            </div>
            <p className="mt-2 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
