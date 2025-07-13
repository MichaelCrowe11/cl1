"use client"

import { motion } from "framer-motion"
import { QrCode, TestTube2, Bot, Target } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <TestTube2 className="h-6 w-6 text-primary" />,
    title: "CroweLayer™ Substrate Tagging",
    description: "Digitally tag and track every substrate layer for unparalleled traceability and data analysis.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    icon: <QrCode className="h-6 w-6 text-primary" />,
    title: "Batch Report Builder & QR Traceability",
    description:
      "Generate comprehensive reports and QR codes for any batch, providing instant access to its full history.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "AI-Powered Contamination Triage",
    description:
      "Our AI analyzes images and sensor data to detect contamination risks early, suggesting corrective actions.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Regenerative OKR Dashboard",
    description:
      "Set and track 30/60/90-day objectives and key results focused on regenerative and sustainable practices.",
    image: "/placeholder.svg?width=400&height=300",
  },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="features" className="bg-ivory py-16 dark:bg-charcoal md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl">Feature Highlights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 dark:text-ivory/80">
            Powerful tools designed for the modern mycology lab.
          </p>
        </div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm transition-all hover:shadow-lg dark:border-primary/20 dark:bg-charcoal/90"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="mt-2 text-charcoal/80 dark:text-ivory/80">{feature.description}</p>
              </div>
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
