import Hero from "@/components/Hero";
import Features from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nishow",
  description:
    "A launch platform for kenyan builders to showcase their innovation",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
