import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Fallback: open mailto
    const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`
    window.location.href = mailto

    // Show success animation
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      {submitted ? (
        <motion.div initial={{scale:0.8}} animate={{scale:1}} className="text-center py-8">
          <p className="text-lg font-semibold">✓ Thanks for reaching out!</p>
          <p className="text-sm mt-2">I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => {setForm({...form, name: e.target.value}); setErrors({...errors, name:''})}}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => {setForm({...form, email: e.target.value}); setErrors({...errors, email:''})}}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => {setForm({...form, message: e.target.value}); setErrors({...errors, message:''})}}
              rows="5"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90">Send</button>
        </form>
      )}

      <div className="mt-8 pt-8 border-t">
        <h3 className="font-semibold mb-2">Social Links</h3>
        <div className="flex gap-3">
          <a href="#" className="text-sm hover:underline">GitHub</a>
          <a href="#" className="text-sm hover:underline">LinkedIn</a>
          <a href="#" className="text-sm hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  )
}
