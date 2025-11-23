"use client";

const testimonials = [
  {
    quote:
      "The Harbor sofa transformed our living room. The modular sections fit our space perfectly, and the fabric has held up beautifully.",
    author: "Elena Moore",
    role: "Interior Architect",
  },
  {
    quote:
      "We design boutique rentals and Atelier pieces have become our signature. Every detail feels thoughtful and intentional.",
    author: "Riverstone Studios",
    role: "Hospitality Design",
  },
  {
    quote:
      "Their team guided us through finishes and scale. The result is a dining room that feels sculptural yet warm.",
    author: "Marcus & June",
    role: "Homeowners",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6">
      <div className="rounded-[3rem] bg-neutral-900 px-10 py-16 text-white md:px-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
          Trusted Spaces
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
          Designers, studios, and homeowners choose Atelier for calm, minimal
          environments.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="flex flex-col gap-6">
              <blockquote className="text-base text-neutral-200">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                {item.author} · {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
