"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Raids from "@/components/Raids";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Raids />
      <Footer />
    </main>
  );
}
