"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogPage() {
  // 1. ESTADO: Qual a categoria selecionada? Começa em "Todos"
  const [activeCategory, setActiveCategory] = useState("Todos");

  // 2. OBTER AS CATEGORIAS ÚNICAS
  // O "Set" remove duplicados automaticamente. Se tiveres 3 candeeiros de "Mesa", ele só guarda "Mesa" uma vez.
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  // 3. FILTRAR OS PRODUTOS
  // Se for "Todos", mostra a lista inteira. Se não, mostra só os que batem certo com a categoria.
  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CABEÇALHO */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Catálogo Completo
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore a nossa coleção de iluminação de design. Cada peça conta uma
            história.
          </p>
        </div>

        {/* BOTÕES DE FILTRO */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full border transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-white text-black border-white font-bold" // Estilo Selecionado
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white" // Estilo Normal
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* MENSAGEM SE NÃO HOUVER PRODUTOS (Segurança) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
