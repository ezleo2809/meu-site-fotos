"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0f0720] text-gray-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
                            {/* Replace with actual image of Leonardo Mercier if available, using placeholder for now */}
                            <Image
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                                alt="Leonardo Mercier"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply opacity-60" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                            Quem Sou Eu
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Leonardo <span className="text-primary">Mercier</span>
                        </h2>

                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            Sou Fotógrafo e especialista em <span className="text-white font-medium">Fotografia de Alimentos</span>, atuando na área desde 2020.
                        </p>

                        <p className="text-lg leading-relaxed mb-8 text-gray-300">
                            Fundei a <span className="text-white font-medium">Mercier Studio</span> com o propósito de ajudar diversas empresas na missão de desenvolver soluções através de imagens que despertam <span className="text-secondary font-bold">DESEJO</span> em seus Clientes e geram <span className="text-secondary font-bold">Resultados Reais</span> de venda.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Especialista em Food Styling</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Produção Audiovisual Completa</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Foco em Conversão e Vendas</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
