"use client";

import { FurnitureProvider } from "@/context/FurnitureContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <FurnitureProvider>{children}</FurnitureProvider>;
}
