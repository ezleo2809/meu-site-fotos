import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f0720] text-gray-300 py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="#" className="text-2xl font-bold tracking-tighter text-white mb-4 inline-block">
                            <span className="text-primary">LENS</span>
                            <span className="text-secondary">/FOOD</span>
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed">
                            Especialista em capturar a essência da gastronomia através de fotografia e vídeo de alta qualidade.
                            Transformando pratos em arte visual.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Início</Link></li>
                            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#videos" className="hover:text-primary transition-colors">Vídeos</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Serviços</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Lens/Food Photography. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
