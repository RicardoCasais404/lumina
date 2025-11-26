"use client";

import dynamic from "next/dynamic";

// IMPORTAÇÃO DINÂMICA
// Isto diz: "Carrega o CartContent só quando o browser estiver pronto.
// Não tentes processar isto no servidor (ssr: false)."
const CartContent = dynamic(() => import("@/components/CartContent"), {
  ssr: false,
});

export default function CartPage() {
  return <CartContent />;
}
