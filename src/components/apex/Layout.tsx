import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export const FooterApex = () => {
  return (
    <footer className="bg-apex-blue-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/assets/logos/Logo-Apex-horizontal.png"
              alt="Apex Power Projects"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-apex-blue-100/70 text-sm leading-relaxed max-w-xs">
              Transformando impostos em projetos de alto impacto, performance e visibilidade institucional. De ponta a ponta, com segurança técnica.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <ExternalLink className="w-5 h-5 text-apex-orange-400" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-apex-orange-400" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">A Empresa</h4>
            <ul className="space-y-4 text-apex-blue-100/70 text-sm">
              <li><Link href="#problema" className="hover:text-white transition-colors">Problema</Link></li>
              <li><Link href="#solucao" className="hover:text-white transition-colors">Solução</Link></li>
              <li><Link href="#resultados" className="hover:text-white transition-colors">Resultados</Link></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">O que fazemos</h4>
            <ul className="space-y-4 text-apex-blue-100/70 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Projetos Incentivados</Link></li>

              <li><Link href="#" className="hover:text-white transition-colors">Gestão Operacional</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Fale Conosco</h4>
            <ul className="space-y-4 text-apex-blue-100/70 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-apex-orange-400 flex-shrink-0" />
                <span>+55 (21) 99313-2615</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-apex-orange-400 flex-shrink-0" />
                <span>contato@apexpowerprojects.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-apex-orange-400 flex-shrink-0" />
                <span>Rio de Janeiro, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-apex-blue-100/40">
          <p>© {new Date().getFullYear()} Apex Power Projects. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const SectionHeader = ({ 
  eyebrow, 
  title, 
  description, 
  dark = false,
  centered = false 
}: { 
  eyebrow?: string, 
  title: string, 
  description?: string, 
  dark?: boolean,
  centered?: boolean
}) => {
  return (
    <div className={`max-w-3xl mb-16 ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full ${dark ? "bg-white/10 text-apex-orange-400" : "bg-apex-blue-50 text-apex-orange-500"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold leading-tight mb-6 ${dark ? "text-white" : "text-apex-blue-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? "text-apex-blue-100/70" : "text-apex-neutral-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
};
