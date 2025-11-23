export function Footer() {
  return (
    <footer className="mx-auto mt-32 max-w-6xl px-6 pb-12">
      <div className="rounded-[3rem] border border-neutral-200 px-10 py-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Curate your next interior with Atelier.
            </h3>
            <p className="max-w-md text-sm text-neutral-500">
              Book a private styling session or request a trade account for custom
              configurations, swatches, and project pricing.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            <a href="mailto:studio@atelier-home.com" className="hover:text-neutral-900">
              studio@atelier-home.com
            </a>
            <a href="tel:+13125551234" className="hover:text-neutral-900">
              +1 (312) 555-1234
            </a>
            <span>Showroom · 427 Lumen Ave, Copenhagen</span>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
          <span>© {new Date().getFullYear()} Atelier Furnishings</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-neutral-900">
              Privacy
            </a>
            <a href="#terms" className="hover:text-neutral-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
