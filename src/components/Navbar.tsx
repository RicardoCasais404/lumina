"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquear o scroll da página quando o menu está aberto (para não deslizar o fundo)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      {/* BARRA SUPERIOR (Sempre visível) */}
      <div className="flex items-center justify-between p-6 px-6 md:px-10 relative z-50">
        {/* LOGÓTIPO */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-widest text-white"
        >
          LUMINA
        </Link>

        {/* MENU PC (Escondido em telemóvel) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/catalog" className="hover:text-white transition-colors">
            CATÁLOGO
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            SOBRE
          </Link>
          <Link href="/cart" className="hover:text-white transition-colors">
            CARRINHO (<span suppressHydrationWarning>{totalItems}</span>)
          </Link>
        </div>

        {/* BOTÃO HAMBÚRGUER (Só telemóvel) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MÓVEL (OVERLAY) */}
      {/* Fica com z-40 para ficar DEBAIXO do botão X (z-50) mas EM CIMA do site */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-200 pt-20">
          <Link
            href="/catalog"
            className="text-base font-light tracking-[0.2em] uppercase text-white hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Catálogo
          </Link>

          <Link
            href="/about"
            className="text-base font-light tracking-[0.2em] uppercase text-white hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>

          <Link
            href="/cart"
            className="text-base font-light tracking-[0.2em] uppercase text-white hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Carrinho ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  );
}
