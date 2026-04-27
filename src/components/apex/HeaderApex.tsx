import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HeaderApex = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logos/Logo-Apex-horizontal.png"
            alt="Apex Power Projects"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
          <Link href="#problema" className="transition-colors hover:text-apex-orange-500">
            Problemas Comuns
          </Link>
          <Link href="#solucao" className="transition-colors hover:text-apex-orange-500">
            Método Apex
          </Link>
          <Link href="#resultados" className="transition-colors hover:text-apex-orange-500">
            Resultados
          </Link>

        </nav>
        <div className="flex items-center space-x-4">
          <Link 
            href="#contato" 
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-apex-blue-900 hover:bg-apex-blue-800 hidden sm:flex text-white px-4 py-2 rounded-lg"
            )}
          >
            Falar com Especialista
          </Link>
          {/* Mobile Menu Icon (simple for now) */}
          <button className="md:hidden text-apex-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};
