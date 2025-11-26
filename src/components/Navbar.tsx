"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  // Vamos buscar os itens diretamente
  const items = useCartStore((state) => state.items);

  // Calculamos o total (O servidor vai calcular 0, o browser vai calcular o valor real)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-6 px-10 border-b border-white/10 bg-black/50 backdrop-blur-md">
      {/* LOGÓTIPO */}
      <Link href="/" className="text-2xl font-bold tracking-widest text-white">
        LUMINA
      </Link>

      {/* LINKS DO MENU */}
      <div className="flex gap-8 text-sm font-medium text-gray-300">
        <Link href="/catalog" className="hover:text-white transition-colors">
          CATÁLOGO
        </Link>
        <Link href="/about" className="hover:text-white transition-colors">
          SOBRE
        </Link>

        <Link href="/cart" className="hover:text-white transition-colors">
          {/*
             O TRUQUE ESTÁ AQUI:
             Envolvemos o número num span com 'suppressHydrationWarning'.
             Isto resolve o erro e remove a necessidade do useEffect!
          */}
          CARRINHO (<span suppressHydrationWarning>{totalItems}</span>)
        </Link>
      </div>
    </nav>
  );
}
