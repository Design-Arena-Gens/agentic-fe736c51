"use client";

const steps = [
  {
    title: "Material Study",
    description:
      "Every piece begins with FSC-certified hardwoods, ethically sourced textiles, and recycled metals.",
  },
  {
    title: "Prototype Lab",
    description:
      "We iterate with artisans to perfect ergonomics, joinery, and finishes before production.",
  },
  {
    title: "Made-To-Order",
    description:
      "Furniture is assembled in small batches, ensuring a personalized piece with minimal waste.",
  },
];

export function ProcessShowcase() {
  return (
    <section className="mx-auto mt-32 max-w-5xl rounded-[3rem] border border-neutral-200 bg-neutral-50 px-10 py-16">
      <p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
        Inside Atelier
      </p>
      <h2 className="mt-4 max-w-xl text-3xl font-semibold text-neutral-900 md:text-4xl">
        From raw timber to sculpted silhouettes, crafted in three considered acts.
      </h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="space-y-4">
            <span className="block h-1 w-24 bg-neutral-900" />
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-neutral-700">
              {step.title}
            </h3>
            <p className="text-sm text-neutral-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
