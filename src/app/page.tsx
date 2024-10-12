import Features from "@/components/Features";
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
