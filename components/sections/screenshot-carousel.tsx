"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const screenshots = [
  {
    src: "/placeholder.svg?width=800&height=600",
    alt: "CroweOS Dashboard View",
  },
  {
    src: "/placeholder.svg?width=800&height=600",
    alt: "Batch Analytics View",
  },
  {
    src: "/placeholder.svg?width=800&height=600",
    alt: "Mobile Alerts Interface",
  },
  {
    src: "/placeholder.svg?width=800&height=600",
    alt: "Regenerative OKR Dashboard",
  },
]

export default function ScreenshotCarousel() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl">See CroweOS in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 dark:text-ivory/80">
            An intuitive interface that puts powerful data at your fingertips.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <div
          className="flex w-full snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto pb-6 md:gap-8 md:scroll-pl-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 snap-center snap-always" />
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 snap-center snap-always"
            >
              <Card className="w-[80vw] max-w-4xl overflow-hidden border-charcoal/10 shadow-xl dark:border-ivory/10">
                <CardContent className="p-0">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    width={800}
                    height={600}
                    className="h-auto w-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div className="shrink-0 snap-center snap-always" />
        </div>
      </div>
    </section>
  )
}
