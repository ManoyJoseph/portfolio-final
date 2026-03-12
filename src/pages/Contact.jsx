import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [alertMessage, setAlertMessage] = useState({ type: '', text: '' })

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { error: 'Server error: Invalid response format' };
        console.error('Non-JSON response:', text);
      }

      if (response.ok) {
        setSubmitted(true)
        setAlertMessage({ type: 'success', text: '✓ Email sent successfully! I\'ll get back to you soon.' })
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
          setAlertMessage({ type: '', text: '' })
        }, 3000)
      } else {
        const errorMsg = data.error || data.details || '✗ Failed to send email. Please try again.'
        setAlertMessage({ type: 'error', text: errorMsg })
      }
    } catch (error) {
      console.error('Email send error:', error)
      setAlertMessage({ type: 'error', text: '✗ Network error: Failed to send email. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      
      {alertMessage.text && (
        <motion.div 
          initial={{opacity: 0, y: -10}} 
          animate={{opacity: 1, y: 0}}
          className={`mb-4 p-3 rounded-md text-sm font-medium ${
            alertMessage.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {alertMessage.text}
        </motion.div>
      )}

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
              disabled={loading}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => {setForm({...form, email: e.target.value}); setErrors({...errors, email:''})}}
              disabled={loading}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => {setForm({...form, message: e.target.value}); setErrors({...errors, message:''})}}
              rows="5"
              disabled={loading}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
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
