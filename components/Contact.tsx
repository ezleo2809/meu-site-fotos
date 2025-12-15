"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-6">
                            Vamos Criar Algo <span className="text-secondary">Delicioso</span> Juntos?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Tem um projeto em mente? Entre em contato para um orçamento personalizado.
                            Estou pronto para elevar a imagem da sua marca gastronômica.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-700">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Ligue para mim</p>
                                    <p className="font-bold">+55 (11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-700">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Email</p>
                                    <p className="font-bold">contato@lensfood.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-700">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Localização</p>
                                    <p className="font-bold">São Paulo, SP</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Seu nome" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="seu@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Ex: Fotografia para Cardápio" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white" placeholder="Conte mais sobre seu projeto..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-violet-600 transition-colors shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2">
                                Enviar Mensagem
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
