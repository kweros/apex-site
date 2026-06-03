"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HeroApex = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-apex-blue-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero.png"
          alt="Apex Power Projects Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-apex-blue-950 via-apex-blue-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-apex-orange-500 rounded-full">
              Autoridade Técnica & Operacional
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="text-apex-orange-400">Transformamos impostos</span> em projetos esportivos aprovados, patrocinados e executados.
            </h1>
            <p className="text-lg md:text-xl text-apex-blue-100 max-w-2xl mb-10 leading-relaxed">
              Com autoridade técnica e método próprio, conduzimos sua empresa da concepção à execução — com velocidade, segurança e zero improviso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link 
              href="#contato" 
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-apex-orange-500 hover:bg-apex-orange-600 text-white font-bold h-14 px-8 rounded-xl text-lg group border-none"
              )}
            >
              Quero estruturar meu projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#resultados" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-white border-white/40 hover:bg-white hover:text-apex-blue-900 h-14 px-8 rounded-xl text-lg backdrop-blur-sm bg-apex-blue-900/20"
              )}
            >
              Ver Resultados
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
