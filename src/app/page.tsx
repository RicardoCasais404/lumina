import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <FeaturedSection />
      {/* Aqui virão as próximas secções (Produtos, etc.) */}
    </main>
  );
}
