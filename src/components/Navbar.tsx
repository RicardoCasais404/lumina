"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react"; // NOVO: Precisamos de estado para abrir/fechar menu
import { Menu, X } from "lucide-react"; // NOVO: Ícones do menu

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // NOVO: Estado para controlar se o menu móvel está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-6 px-6 md:px-10 border-b border-white/10 bg-black/50 backdrop-blur-md">
        {/* LOGÓTIPO */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-widest text-white z-50"
        >
          LUMINA
        </Link>

        {/* VERSÃO PC: Links visíveis apenas em ecrãs médios (md:flex) ou maiores */}
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

        {/* VERSÃO MÓVEL: Botão Hambúrguer (Aparece só em ecrãs pequenos md:hidden) */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MENU MÓVEL (OVERLAY) */}
        {/* Só aparece se o estado isMobileMenuOpen for verdadeiro */}
        {/* MENU MÓVEL (OVERLAY) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-300">
            {/*
                MUDANÇAS FEITAS:
                1. bg-black/95: Fundo quase opaco para ler melhor.
                2. text-lg (em vez de 2xl): Tamanho mais discreto.
                3. font-medium (em vez de bold): Menos agressivo.
                4. tracking-widest: O segredo do luxo (letras mais espaçadas).
             */}
            <Link
              href="/catalog"
              className="text-lg font-medium tracking-widest text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CATÁLOGO
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium tracking-widest text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOBRE
            </Link>
            <Link
              href="/cart"
              className="text-lg font-medium tracking-widest text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CARRINHO (<span suppressHydrationWarning>{totalItems}</span>)
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
