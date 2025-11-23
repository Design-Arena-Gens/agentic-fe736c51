export type FurnitureCategory =
  | "Living Room"
  | "Bedroom"
  | "Office"
  | "Dining"
  | "Outdoor"
  | "Decor";

export type FurnitureItem = {
  id: string;
  name: string;
  category: FurnitureCategory;
  price: number;
  description: string;
  imageUrl: string;
  featured?: boolean;
};
