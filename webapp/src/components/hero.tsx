"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate mt-24 overflow-hidden rounded-[2.5rem] bg-neutral-950 text-white">
      <div className="grid gap-12 px-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-16 md:py-20">
        <div className="flex flex-col justify-between gap-12">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
              New Season · 2024
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.8rem]">
              Crafted interiors that feel as effortless as they look.
            </h1>
            <p className="max-w-md text-base text-neutral-300 md:text-lg">
              A modern collection of modular seating, organic tables, and sculpted
              lighting for living spaces that flow with your everyday rituals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.4em] text-neutral-300">
            <span className="rounded-full border border-neutral-800 px-4 py-2">
              Sustainable woods
            </span>
            <span className="rounded-full border border-neutral-800 px-4 py-2">
              Handmade upholstery
            </span>
          </div>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1616628182504-a1ef4e940348?auto=format&fit=crop&w=1200&q=80"
            alt="Minimal living room with modern furniture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 left-6 rounded-xl bg-white/10 px-5 py-4 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-200">
              Atelier Series
            </p>
            <p className="text-sm text-neutral-100">
              Designed in Copenhagen · Made to order in four finishes.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900/80 to-transparent" />
    </section>
  );
}
