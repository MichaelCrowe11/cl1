"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "CroweOS transformed our lab. We've cut contamination incidents by 40% and our team is more aligned than ever.",
    name: "Dr. Anya Sharma",
    title: "Lead Mycologist, FungiFutures",
    avatar: "/placeholder.svg?width=100&height=100",
  },
  {
    quote:
      "The batch traceability is a game-changer for quality control. I can pull up a full history on my phone in seconds.",
    name: "Ben Carter",
    title: "Operations Manager, MycoGrow Labs",
    avatar: "/placeholder.svg?width=100&height=100",
  },
  {
    quote:
      "Finally, a software that understands the nuances of mycology. The AI insights are like having another expert on the team.",
    name: "Maria Rodriguez",
    title: "Founder, Regenerative Spores",
    avatar: "/placeholder.svg?width=100&height=100",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-16 dark:bg-charcoal md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl">
            Trusted by Growers & Lab Managers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 dark:text-ivory/80">
            Hear from leaders in the mycology space.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-charcoal/10 bg-white shadow-sm dark:border-ivory/10 dark:bg-charcoal/90">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-charcoal dark:text-ivory">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-charcoal/70 dark:text-ivory/70">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
