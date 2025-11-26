"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react"; // <--- ADICIONEI O ShoppingBag

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquear scroll quando menu abre
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="flex items-center justify-between p-6 px-6 md:px-10">
          {/* LOGÓTIPO */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-widest text-white"
          >
            LUMINA
          </Link>

          {/* MENU PC */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
            <Link
              href="/catalog"
              className="hover:text-white transition-colors"
            >
              CATÁLOGO
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              SOBRE
            </Link>

            {/* LINK DO CARRINHO COM ÍCONE */}
            <Link
              href="/cart"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span>CARRINHO ({totalItems})</span>
              <ShoppingBag size={18} />
            </Link>
          </div>

          {/* BOTÃO HAMBÚRGUER */}
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

      {/* MENU MÓVEL (Full Screen) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-100 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

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
              className="text-2xl font-light tracking-[0.2em] text-white hover:text-gray-400 flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>CARRINHO ({totalItems})</span>
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
