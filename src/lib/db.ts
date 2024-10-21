import { Category } from "@/types/category";
import supabase from "./supabase";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");
  console.log(data);

  if (error) {
    console.error("Error fetching categories:", error);
  }
  return data;
}
