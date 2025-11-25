"use client"; // Precisamos disto porque vamos usar animações no futuro

import { products } from "@/data/products"; // Importar os nossos dados
import ProductCard from "./ProductCard"; // Importar o componente que acabámos de criar

export default function FeaturedSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Cabeçalho da Secção */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Coleção em Destaque</h2>
          <p className="text-gray-400">
            Peças selecionadas para elevar o seu ambiente.
          </p>
        </div>
        <button className="hidden md:block text-white border-b border-white pb-1 hover:text-gray-300 transition-colors">
          Ver Todo o Catálogo
        </button>
      </div>

      {/* A GRID (GRELHA) DE PRODUTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* A Mágica do .map() */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
