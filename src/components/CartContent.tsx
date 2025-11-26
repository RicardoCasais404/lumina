"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, ArrowRight } from "lucide-react";

export default function CartContent() {
  const { items, removeItem, addItem, getTotalPrice } = useCartStore();

  // ESTADO: CARRINHO VAZIO
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          O seu carrinho está vazio
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Parece que ainda não escolheu a iluminação perfeita.
        </p>
        <Link
          href="/"
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
        >
          Voltar à Loja
        </Link>
      </div>
    );
  }

  // ESTADO: COM PRODUTOS
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">O Seu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* COLUNA DA ESQUERDA: LISTA DE ITENS */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 items-center bg-gray-900/50 p-6 rounded-2xl border border-white/5"
              >
                {/* Imagem do Produto */}
                <div className="relative w-24 h-24 shrink-0 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Detalhes */}
                <div className="grow">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                  <p className="font-medium text-white">
                    {new Intl.NumberFormat("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </p>
                </div>

                {/* Controlos de Quantidade */}
                <div className="flex items-center gap-4 bg-black p-2 rounded-full border border-white/10">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:text-red-400 transition-colors text-gray-400"
                    title="Remover Item"
                  >
                    <Trash2 size={18} />
                  </button>

                  <span className="font-bold w-6 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addItem(item)}
                    className="p-1 hover:text-green-400 transition-colors text-white"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* COLUNA DA DIREITA: RESUMO */}
          <div className="bg-gray-900 p-8 rounded-2xl h-fit border border-white/10 sticky top-32">
            <h2 className="text-xl font-bold text-white mb-6">
              Resumo do Pedido
            </h2>

            <div className="space-y-4 mb-8 text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">
                  {new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  }).format(getTotalPrice())}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Envio</span>
                <span className="text-green-400">Grátis</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-center">
              <span className="text-xl font-bold text-white">Total</span>
              <span className="text-2xl font-bold text-white">
                {new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                }).format(getTotalPrice())}
              </span>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group">
              FINALIZAR COMPRA
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <p className="text-center text-gray-500 text-xs mt-4">
              Pagamento seguro encriptado SSL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
