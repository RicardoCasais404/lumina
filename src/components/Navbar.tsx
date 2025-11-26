"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag, Grid2X2, Info } from "lucide-react"; // Importamos ícones novos

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 px-6 md:px-10 h-20">
        {/* 1. LOGÓTIPO (Esquerda) */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-widest text-white"
        >
          LUMINA
        </Link>

        {/* 2. LINKS DE NAVEGAÇÃO (Direita) */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* LINK: CATÁLOGO */}
          <Link
            href="/catalog"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
            title="Catálogo"
          >
            {/* Ícone: Visível sempre */}
            <Grid2X2
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            {/* Texto: Escondido em telemóvel (hidden), visível em PC (md:block) */}
            <span className="hidden md:block text-sm font-medium tracking-wide">
              CATÁLOGO
            </span>
          </Link>

          {/* LINK: SOBRE */}
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
            title="Sobre"
          >
            <Info
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="hidden md:block text-sm font-medium tracking-wide">
              SOBRE
            </span>
          </Link>

          {/* LINK: CARRINHO */}
          <Link
            href="/cart"
            className="text-white transition-colors flex items-center gap-2 group relative"
            title="Carrinho"
          >
            <div className="relative">
              <ShoppingBag
                size={20}
                className="group-hover:scale-110 transition-transform"
              />

              {/* Badge com número (só aparece se houver itens) */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  <span suppressHydrationWarning>{totalItems}</span>
                </span>
              )}
            </div>

            <span className="hidden md:block text-sm font-medium tracking-wide">
              CARRINHO
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
