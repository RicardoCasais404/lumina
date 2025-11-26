import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products"; // Importamos o "molde" que criámos antes

// Aqui definimos que este componente PRECISA de receber um produto para funcionar
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Funçãozinha para formatar preço em Euros (ex: 299,00 €) de forma automática
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* IMAGEM COM EFEITO ZOOM */}
      <div className="relative aspect-square overflow-hidden bg-gray-900 rounded-xl mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Botão que só aparece quando passas o rato (Hover) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver Detalhes
          </span>
        </div>
      </div>

      {/* INFORMAÇÕES */}
      <div className="space-y-1">
        <p className="text-xs text-gray-300 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-300 font-light">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
