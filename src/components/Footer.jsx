import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" aria-label="GitHub" className="text-sm hover:underline">GitHub</a>
          <a href="#" aria-label="LinkedIn" className="text-sm hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
