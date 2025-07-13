"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 dark:bg-charcoal md:py-32">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/logo-full-transparent.png"
            alt="CroweOS Systems Logo"
            width={482}
            height={120}
            className="mb-8 h-auto w-full max-w-md animate-logo-glow"
            priority
          />
          <h1 className="sr-only">CroweOS Systems</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-charcoal/80 dark:text-ivory/80 md:text-xl">
            Integrated Mycology & Lab Management powered by Crowe Logic AI.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="#contact">Request Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#">Watch 90-sec Tour</Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?width=1200&height=800')] bg-cover bg-center opacity-5 dark:opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/0 via-ivory to-ivory dark:from-charcoal/0 dark:via-charcoal dark:to-charcoal"></div>
      </div>
    </section>
  )
}
