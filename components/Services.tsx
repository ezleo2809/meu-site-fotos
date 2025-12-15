"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, Instagram, ChefHat } from "lucide-react";

const services = [
    {
        icon: <Camera className="w-10 h-10" />,
        title: "Fotografia Gastronômica",
        description: "Imagens que despertam os sentidos. Luz e composição pensadas para valorizar cada textura e cor do seu prato.",
    },
    {
        icon: <Clapperboard className="w-10 h-10" />,
        title: "Vídeos Comerciais",
        description: "Produção audiovisual completa para comerciais de TV e anúncios online. Mostre a preparação e o resultado final em movimento.",
    },
    {
        icon: <Instagram className="w-10 h-10" />,
        title: "Conteúdo para Redes Sociais",
        description: "Reels e Stories dinâmicos para engajar seu público e aumentar suas vendas no Instagram e TikTok.",
    },
    {
        icon: <ChefHat className="w-10 h-10" />,
        title: "Consultoria Visual",
        description: "Ajudo a definir a identidade visual dos seus pratos para cardápios e material publicitário.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-background relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary font-bold uppercase tracking-widest text-sm"
                    >
                        O Que Ofereço
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-foreground mt-2 mb-4"
                    >
                        Serviços Especializados
                    </motion.h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 hover:shadow-xl transition-shadow group"
                        >
                            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
