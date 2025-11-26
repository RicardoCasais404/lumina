import Image from "next/image";
import { Leaf, Hammer, Sparkles } from "lucide-react"; // <--- Importamos os ícones aqui

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          ESCULPIMOS A LUZ
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Na Lumina, acreditamos que a iluminação não é apenas funcional. É a
          alma de um espaço. Cada peça é desenhada para criar atmosferas únicas.
        </p>
      </div>

      {/* SECÇÃO DE VALORES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {/* CARD 1: Design */}
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center text-center">
          <div className="mb-6 p-4 bg-white/5 rounded-full text-white">
            {/* Ícone Sparkles (Brilho/Elegância) com traço fino */}
            <Sparkles size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Design Intemporal
          </h3>
          <p className="text-gray-400">
            Fugimos das tendências passageiras. Criamos peças que permanecerão
            elegantes daqui a 50 anos.
          </p>
        </div>

        {/* CARD 2: Sustentabilidade */}
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center text-center">
          <div className="mb-6 p-4 bg-white/5 rounded-full text-white">
            {/* Ícone Leaf (Folha) */}
            <Leaf size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Sustentabilidade
          </h3>
          <p className="text-gray-400">
            Materiais reciclados, LEDs de baixo consumo e processos de fabrico
            que respeitam o planeta.
          </p>
        </div>

        {/* CARD 3: Artesanato */}
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center text-center">
          <div className="mb-6 p-4 bg-white/5 rounded-full text-white">
            {/* Ícone Hammer (Martelo/Trabalho Manual) */}
            <Hammer size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Artesanato</h3>
          <p className="text-gray-400">
            Cada candeeiro é finalizado à mão pelos nossos artesãos
            especializados em Leiria, Portugal.
          </p>
        </div>
      </div>

      {/* IMAGEM FINAL (AMBIENTE) */}
      <div className="max-w-7xl mx-auto relative h-[60vh] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src="/products/1.jpg"
          alt="Lumina Studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-xl md:text-3xl font-bold tracking-widest border-2 border-white px-4 py-2 md:px-8 md:py-4 text-center">
            ESTÚDIO LUMINA
          </h2>
        </div>
      </div>
    </div>
  );
}
