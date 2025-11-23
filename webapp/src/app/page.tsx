"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CollectionGrid } from "@/components/collection-grid";
import { ProcessShowcase } from "@/components/process-showcase";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { useFurniture } from "@/context/FurnitureContext";
import { defaultFurniture } from "@/data/furniture";

export default function Home() {
  const {
    state: { items, hydrated },
  } = useFurniture();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main className="flex flex-col gap-20 pb-24">
        <Hero />
        <section className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-neutral-200 bg-white px-10 py-12 shadow-sm">
          <p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
            Signature Collection
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Minimal silhouettes, tailored textures, and furniture that adapts with
            your space.
          </h2>
          <p className="max-w-2xl text-sm text-neutral-500">
            Explore modular sofas, sculpted dining tables, and lighting pieces that
            soften the modern home. Each item is crafted to order and finished by
            Atelier&apos;s partner artisans.
          </p>
        </section>
        <CollectionGrid items={hydrated ? items : defaultFurniture} />
        <ProcessShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
