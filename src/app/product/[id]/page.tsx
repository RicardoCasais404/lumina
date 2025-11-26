import { products } from "@/data/products";
import { notFound } from "next/navigation"; // Para mandar para a página 404 se o produto não existir
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

// Definimos que esta página recebe um parâmetro chamado "id"
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // 1. Esperar que o parâmetro chegue (Next.js 15 requirement)
  const { id } = await params;

  // 2. Procurar o produto na nossa "Base de Dados" que tenha este ID
  const product = products.find((p) => p.id === id);

  // 3. Se não encontrar (ex: o user escreveu um ID falso no link), mostra erro 404
  if (!product) {
    return notFound();
  }

  // 4. Se encontrar, desenha a página
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* COLUNA DA ESQUERDA: IMAGEM GIGANTE */}
        <div className="relative aspect-square md:aspect-4/5 overflow-hidden rounded-2xl bg-gray-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority // Prioridade máxima no carregamento
          />
        </div>

        {/* COLUNA DA DIREITA: DETALHES */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm text-gray-400 tracking-widest uppercase mb-2">
              {product.category}
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-3xl font-light text-white">
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(product.price)}
            </span>
          </div>

          {/* Botão de Adicionar ao Carrinho (Visual por enquanto) */}
          <AddToCartButton product={product} />

          {/* Detalhes Extra (Estáticos para dar ar profissional) */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <p className="font-bold text-white">Entrega</p>
              <p>2-4 Dias Úteis</p>
            </div>
            <div>
              <p className="font-bold text-white">Garantia</p>
              <p>5 Anos Incluída</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
