"use client"; // Isto diz ao Next.js: "Este código corre no navegador"

import { Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  // Vamos buscar a função addItem à nossa store
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem(product);
    alert("Produto adicionado ao carrinho!"); // Feedback temporário (vamos melhorar depois)
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full md:w-auto px-10 py-5 bg-white text-black font-bold tracking-wide rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
    >
      ADICIONAR AO CARRINHO
    </button>
  );
}
