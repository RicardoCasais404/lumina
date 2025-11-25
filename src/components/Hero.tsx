"use client"; // Obrigatório para animações (framer-motion) funcionarem

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1. IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Lumina Lamp Hero"
          fill // Ocupa o espaço todo do pai
          className="object-cover opacity-50" // Opacidade para o texto brilhar
          priority // Carrega esta imagem primeiro que tudo (Google adora isto)
        />
        {/* Gradiente para o texto ficar legível */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />
      </div>

      {/* 2. CONTEÚDO (TEXTO) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        {/* Animação do Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} // Começa invisível e mais abaixo
          animate={{ opacity: 1, y: 0 }} // Termina visível e na posição certa
          transition={{ duration: 0.8, delay: 0.2 }} // Demora 0.8s
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          ILUMINAÇÃO <br />
          <span className="text-gray-300">REDEFINIDA</span>
        </motion.h1>

        {/* Animação do Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Design minimalista. Tecnologia avançada. A peça central que o seu
          espaço merece.
        </motion.p>

        {/* Botão de Ação */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }} // Efeito ao passar o rato
          whileTap={{ scale: 0.95 }} // Efeito ao clicar
          className="px-8 py-4 bg-white text-black text-lg font-bold tracking-wide rounded-full hover:bg-gray-200 transition-colors"
        >
          VER COLEÇÃO
        </motion.button>
      </div>
    </section>
  );
}
