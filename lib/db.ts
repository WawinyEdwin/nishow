import supabase from "./supabase";

export interface Category {
  id: string;
  name: string;
  [key: string]: any;
}

export interface Product {
  id: string;
  name: string;
  logo: string;
  short_description: string;
  long_description: string;
  link: string;
  category: {
    name: string;
  } | { name: string }[];
}

export async function getCategories(): Promise<Category[] | null> {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Error fetching categories:", error);
  }
  return data as Category[] | null;
}

export async function getProductsByCategory(name: string): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,  name, logo, short_description, link, long_description, category(name)",
    )
    .eq("category.name", name);

  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data as unknown as Product[] | null;
}

export async function getProducts(): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,  name, logo, short_description, link, long_description, category(name)",
    );

  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data as unknown as Product[] | null;
}

export async function createProduct(product: Partial<Product>) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();
  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data;
}
