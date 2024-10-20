import Features from "@/components/Products";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genfluence",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
