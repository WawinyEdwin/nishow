
import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Error fetching categories:", error);
  }
  return data;
}

export async function getProductsByCategory(name){
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,  name, logo, short_description, link, long_description, category(name)",
    )
    .eq("category.name", name);

  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data;
}

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,  name, logo, short_description, link, long_description, category(name)",
    );

  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data;
}

export async function createProduct(product) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();
  if (error) {
    console.error("Error fetching products for:", error);
  }
  return data;
}
