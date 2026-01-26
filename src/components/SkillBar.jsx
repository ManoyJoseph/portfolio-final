import React from 'react'

export default function SkillBar({ skill, level = 70 }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded overflow-hidden dark:bg-gray-700">
        <div className="h-2 bg-primary transition-all duration-500" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}
