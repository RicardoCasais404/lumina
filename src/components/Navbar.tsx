"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquear o scroll da página quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 1. BARRA DE NAVEGAÇÃO (A que está sempre visível) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="flex items-center justify-between p-6 px-6 md:px-10">
          {/* LOGÓTIPO */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-widest text-white"
          >
            LUMINA
          </Link>

          {/* MENU PC (Links normais) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <Link
              href="/catalog"
              className="hover:text-white transition-colors"
            >
              CATÁLOGO
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              SOBRE
            </Link>
            <Link href="/cart" className="hover:text-white transition-colors">
              CARRINHO (<span suppressHydrationWarning>{totalItems}</span>)
            </Link>
          </div>

          {/* BOTÃO HAMBÚRGUER (Só aparece se o menu estiver FECHADO) */}
          <div className="md:hidden">
            {!isMobileMenuOpen && (
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 2. O MENU MÓVEL (Painel Gigante que cobre TUDO) */}
      {/* Este bloco está FORA da <nav> visual para não haver conflitos */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-100 flex flex-col items-center justify-center animate-in fade-in duration-200">
          {/* Botão de Fechar (No canto superior direito deste painel preto) */}
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {/* LINKS DO MENU */}
          <div className="flex flex-col items-center space-y-12">
            <Link
              href="/catalog"
              className="text-2xl font-light tracking-[0.2em] text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CATÁLOGO
            </Link>

            <Link
              href="/about"
              className="text-2xl font-light tracking-[0.2em] text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOBRE
            </Link>

            <Link
              href="/cart"
              className="text-2xl font-light tracking-[0.2em] text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CARRINHO ({totalItems})
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
