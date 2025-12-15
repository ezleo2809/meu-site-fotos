"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    { id: 1, title: "Breakfast Delight", category: "Photography", src: "https://images.unsplash.com/photo-1533089862017-54148d31ea89?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, title: "Sushi Art", category: "Photography", src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Steakhouse", category: "Video", src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" },
    { id: 4, title: "Dessert Dreams", category: "Photography", src: "https://images.unsplash.com/photo-1563729768640-d81b316cd720?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, title: "Fresh Ingredients", category: "Photography", src: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop" },
    { id: 6, title: "Cocktail Hour", category: "Video", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
];

export default function Gallery() {
    return (
        <section id="portfolio" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-primary mb-4"
                    >
                        Portfolio Selecionado
                    </motion.h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-gray-100 aspect-square"
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-2xl font-bold">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
