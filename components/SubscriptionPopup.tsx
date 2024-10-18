// This component is a popup that prompts users to subscribe to a mailing list on the homepage. It includes an input field for the user's email address and a submit button.

"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const hasInteracted = localStorage.getItem('subscriptionInteraction')
    if (!hasInteracted) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleNotInterested = () => {
    localStorage.setItem('subscriptionInteraction', 'notInterested')
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    // For this example, we'll just log it and store in localStorage
    console.log('Subscribing email:', email)
    localStorage.setItem('subscriptionInteraction', 'subscribed')
    setIsOpen(false)

    // Example of how you might send this to a Google Sheet
    // You would need to set up a server endpoint to handle this request
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // Handle success
    } catch (error) {
      console.error('Error:', error)
      // Handle error
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
        <button
          title="Close Popup"
          onClick={handleClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Get 10% Off Your First Order!</h2>
        <p className="mb-4">Subscribe to our mailing list and receive a 10% discount code for your first purchase.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button title="Subscribe" type="submit" className="w-full">Subscribe</Button>
        </form>
        <button title="Not Interested" onClick={handleNotInterested} className="mt-4 text-sm text-gray-500 hover:underline">
          No thanks, I&apos;m not interested
        </button>
      </div>
    </div>
  )
}