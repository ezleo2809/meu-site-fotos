"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, DollarSign, Star, Eye, ThumbsUp, Medal } from "lucide-react";

const reasons = [
    {
        id: 1,
        icon: <Medal className="w-8 h-8" />,
        title: "Destaque da Concorrência",
        description: "Sua empresa se destaca visualmente no mercado.",
    },
    {
        id: 2,
        icon: <Eye className="w-8 h-8" />,
        title: "Desperte Desejo",
        description: "Imagens que fazem o cliente sentir vontade de comer com os olhos.",
    },
    {
        id: 3,
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Agregue Valor",
        description: "Valoriza seu produto e fortalece a marca da sua empresa.",
    },
    {
        id: 4,
        icon: <DollarSign className="w-8 h-8" />,
        title: "Justificativa de Preço",
        description: "A qualidade na imagem faz o cliente não questionar o preço.",
    },
    {
        id: 5,
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Mais Resultados",
        description: "Propaganda profissional gera mais retorno. A primeira impressão é a que fica!",
    },
    {
        id: 6,
        icon: <Star className="w-8 h-8" />,
        title: "Qualidade Garantida",
        description: "Mostre a qualidade do produto antes mesmo dele chegar ao cliente.",
    },
    {
        id: 7,
        icon: <ThumbsUp className="w-8 h-8" />,
        title: "Engajamento Social",
        description: "Redes sociais atraentes aumentam a confiança, curtidas e comentários.",
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        7 Motivos para Investir em <span className="text-secondary">Fotos Profissionais</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-white/5 ${index === 6 ? "md:col-span-2 lg:col-span-3 lg:w-1/2 lg:mx-auto" : ""
                                }`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {reason.id}. {reason.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
