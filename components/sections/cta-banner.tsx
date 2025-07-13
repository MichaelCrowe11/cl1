"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import type React from "react"

export default function CtaBanner() {
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Demo Requested!",
          description: "Thanks! Our team will be in touch with you shortly.",
        })
        ;(event.target as HTMLFormElement).reset()
      } else {
        throw new Error("Something went wrong.")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not submit the form. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="bg-ivory py-16 dark:bg-charcoal md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-white p-8 text-center shadow-xl dark:bg-charcoal/80 md:p-12"
        >
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to regenerate your lab?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 dark:text-ivory/80">
            Request a personalized demo to see how CroweOS can streamline your mycology operations.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-lg space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input name="name" type="text" placeholder="Your Name" required aria-label="Your Name" />
              <Input name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
            </div>
            <Input name="company" type="text" placeholder="Company Name" required aria-label="Company Name" />
            <Button type="submit" size="lg" className="w-full">
              Request Demo
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
