"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        author: "Just Burger",
        role: "Hamburgueria",
        content: "Um dos melhores fotógrafos de alimentos que já conhecemos! A Just burger e a Just Gourmet já podem dizer que experimentaram seus serviços e foi show de imagens!! Parabéns meu amigo! Foram os primeiros de muitos ensaios com certeza!",
        rating: 5,
    },
    {
        author: "Jon Jon Burguer's",
        role: "Hamburgueria",
        content: "Minha experiência foi incrível, além do prazo quase imediato, as fotos ficaram incríveis, aumentou bastante minhas vendas. Recomendo demais!",
        rating: 5,
    },
    {
        author: "Butoh",
        role: "Restaurante",
        content: "As imagens e vídeos finais do restaurante excederam nossas expectativas. Capturaram não apenas os pratos, mas também a atmosfera e a experiência de jantar no Butoh. Um destaque especial com a produção de videos para reels do instagram. Ficaram ótimos!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        O Que Dizem Nossos <span className="text-primary">Clientes</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                            <div className="flex space-x-1 mb-6 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                                <h4 className="font-bold text-lg text-foreground">{testimonial.author}</h4>
                                <p className="text-sm text-secondary">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
