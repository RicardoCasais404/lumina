import { create } from "zustand";
import { persist } from "zustand/middleware"; // Middleware para gravar no LocalStorage
import { Product } from "@/data/products";

// 1. Definir o que é um Item do Carrinho
// É igual a um produto, mas precisa de ter uma "quantidade" (ex: 2 candeeiros iguais)
export interface CartItem extends Product {
  quantity: number;
}

// 2. Definir o que a nossa "Loja" sabe fazer
interface CartState {
  items: CartItem[]; // A lista de produtos no carrinho
  addItem: (product: Product) => void; // Ação de adicionar
  removeItem: (productId: string) => void; // Ação de remover
  clearCart: () => void; // Ação de limpar tudo

  // Helpers para facilitar a vida
  getTotalItems: () => number; // Diz-nos quantos itens temos no total
  getTotalPrice: () => number; // Diz-nos o valor total a pagar
}

// 3. Criar a Loja com persistência (Grava no navegador para não perderes o carrinho se deres refresh)
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const currentItems = get().items;
        // Verifica se o produto já existe no carrinho
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          // Se já existe, apenas aumentamos a quantidade (+1)
          const updatedItems = currentItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
        } else {
          // Se não existe, adicionamos o produto com quantidade 1
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      removeItem: (productId) => {
        // Filtra a lista mantendo apenas os produtos que NÃO têm aquele ID
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        // Soma a quantidade de todos os itens
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        // Soma o preço * quantidade de todos os itens
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "lumina-cart-storage", // Nome da chave no LocalStorage do navegador
    }
  )
);
