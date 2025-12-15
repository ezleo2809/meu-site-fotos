"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0720]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-0" />
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                        Fotografia & Filmmaking Gastronômico
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Desperte o <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Apetite</span> <br />
                        com Cada Detalhe.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Transformamos pratos em experiências visuais irresistíveis.
                        Especilista em capturar a essência da culinária através de lentes criativas.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-violet-600 transition-all shadow-lg shadow-purple-500/30 w-full md:w-auto">
                            Ver Projetos
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm flex items-center gap-2 w-full md:w-auto justify-center">
                            <Play className="w-4 h-4 fill-current" />
                            Showreel
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
