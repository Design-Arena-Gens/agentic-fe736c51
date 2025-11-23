"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { defaultFurniture } from "@/data/furniture";
import type { FurnitureItem } from "@/types/furniture";

type FurnitureState = {
  items: FurnitureItem[];
  hydrated: boolean;
};

type Action =
  | { type: "hydrate"; payload: FurnitureItem[] }
  | { type: "add"; payload: FurnitureItem }
  | { type: "remove"; payload: string };

const STORAGE_KEY = "atelier-furniture";

const FurnitureContext = createContext<{
  state: FurnitureState;
  addItem: (item: Omit<FurnitureItem, "id">) => void;
  removeItem: (id: string) => void;
} | null>(null);

const reducer = (state: FurnitureState, action: Action): FurnitureState => {
  switch (action.type) {
    case "hydrate":
      return { items: action.payload, hydrated: true };
    case "add":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const createId = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (slug) return slug;
  try {
    return crypto.randomUUID();
  } catch {
    return `item-${Date.now()}`;
  }
};

export function FurnitureProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    items: defaultFurniture,
    hydrated: false,
  });

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as FurnitureItem[];
        dispatch({ type: "hydrate", payload: parsed });
        return;
      } catch {
        /* ignore invalid local storage */
      }
    }
    dispatch({ type: "hydrate", payload: defaultFurniture });
  }, []);

  useEffect(() => {
    if (state.hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.hydrated]);

  const addItem = useCallback(
    (item: Omit<FurnitureItem, "id">) => {
      const id = createId(item.name || crypto.randomUUID());
      dispatch({ type: "add", payload: { ...item, id } });
    },
    [dispatch],
  );

  const removeItem = useCallback(
    (id: string) => {
      dispatch({ type: "remove", payload: id });
    },
    [dispatch],
  );

  const value = useMemo(
    () => ({
      state,
      addItem,
      removeItem,
    }),
    [state, addItem, removeItem],
  );

  return (
    <FurnitureContext.Provider value={value}>
      {children}
    </FurnitureContext.Provider>
  );
}

export const useFurniture = () => {
  const context = useContext(FurnitureContext);
  if (!context) {
    throw new Error("useFurniture must be used within FurnitureProvider");
  }
  return context;
};
