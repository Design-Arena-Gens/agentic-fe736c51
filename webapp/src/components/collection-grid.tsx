"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { FurnitureCategory, FurnitureItem } from "@/types/furniture";

const CATEGORY_ORDER: FurnitureCategory[] = [
  "Living Room",
  "Dining",
  "Bedroom",
  "Office",
  "Outdoor",
  "Decor",
];

type CollectionGridProps = {
  items: FurnitureItem[];
};

export function CollectionGrid({ items }: CollectionGridProps) {
  const byCategory = useMemo(() => {
    return items.reduce<Record<string, FurnitureItem[]>>((acc, item) => {
      const list = acc[item.category] ?? [];
      list.push(item);
      acc[item.category] = list;
      return acc;
    }, {});
  }, [items]);

  const orderedEntries = useMemo(() => {
    return Object.entries(byCategory).sort((a, b) => {
      const aIndex = CATEGORY_ORDER.indexOf(a[0] as FurnitureCategory);
      const bIndex = CATEGORY_ORDER.indexOf(b[0] as FurnitureCategory);
      return (aIndex === -1 ? Number.MAX_VALUE : aIndex) -
        (bIndex === -1 ? Number.MAX_VALUE : bIndex);
    });
  }, [byCategory]);

  if (orderedEntries.length === 0) {
    return (
      <section className="mx-auto mt-28 max-w-4xl rounded-[2.5rem] border border-dashed border-neutral-300 bg-white px-8 py-16 text-center">
        <h2 className="text-lg font-semibold text-neutral-700">
          Your collection is empty.
        </h2>
        <p className="mt-3 text-sm text-neutral-500">
          Add furniture pieces from the admin panel to see them featured here.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <div className="flex flex-col gap-12">
        {orderedEntries.map(([category, list]) => (
          <div key={category} className="space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold uppercase tracking-[0.4em] text-neutral-500 md:text-2xl">
                {category}
              </h2>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                {list.length.toString().padStart(2, "0")} pieces
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    {item.featured ? (
                      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-neutral-700">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{item.description}</p>
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-neutral-600">
                      <span>{item.category}</span>
                      <span>${item.price.toLocaleString()}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
