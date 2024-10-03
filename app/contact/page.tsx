"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We'll get back to you soon!",
        })
        event.currentTarget.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error: unknown) {
      console.error('Error sending message:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <Label htmlFor="mailType">Mail Type</Label>
          <Select name="mailType" required>
            <SelectTrigger>
              <SelectValue placeholder="Select mail type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="order">Order Related</SelectItem>
              <SelectItem value="policy">Policy Related</SelectItem>
              <SelectItem value="query">General Query</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <div>
          <Label htmlFor="file">Attachment (optional)</Label>
          <Input type="file" id="file" name="file" multiple />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}