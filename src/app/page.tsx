"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  FileText, 
  Users, 
  Award, 
  CheckCircle2, 
  Target,
  Phone,
  Mail
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HeaderApex } from "@/components/apex/HeaderApex";
import { HeroApex } from "@/components/apex/HeroApex";
import { MetricCard } from "@/components/apex/Cards";
import { FooterApex, SectionHeader } from "@/components/apex/Layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const partnerLogos = [
  { src: "/assets/images/parceiros/logo-RTT.png", alt: "Rio Todo Terreno" },
  { src: "/assets/images/parceiros/logo-peck.png", alt: "Peck Produções" },
  { src: "/assets/images/parceiros/logo-itacoatiara-big-waves.png", alt: "Itacoatiara Big Wave" },
  { src: "/assets/images/parceiros/logo-carioca-games.png", alt: "Carioca Games" },
  { src: "/assets/images/parceiros/logo-Gringo-Super-Fight.jpg", alt: "Gringo Super Fight" },
  { src: "/assets/images/parceiros/logo-rogi.png", alt: "Rogimirim" }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledPartners, setShuffledPartners] = useState<typeof partnerLogos>(partnerLogos);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast multiplier
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  useEffect(() => {
    const shuffled = [...partnerLogos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledPartners(shuffled);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/projetos@apexpowerprojects.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const carouselItems = [
    { src: "/assets/images/eventos/itacoatiara1.png", title: "Itacoatiara Big Wave", subtitle: "Execução e Aprovação Exponencial" },
    { src: "/assets/images/eventos/itacoatiara2.png", title: "Itacoatiara Big Wave", subtitle: "Estruturação Estratégica" },
    { src: "/assets/images/eventos/itacoatiara3.png", title: "Itacoatiara Big Wave", subtitle: "Captação de Patrocínio" },
    { src: "/assets/images/eventos/riojazzfest.png", title: "Rio Jazz Fest", subtitle: "Enquadramento Legal e Execução" },
    { src: "/assets/images/eventos/cariocagames.png", title: "Carioca Games", subtitle: "Aprovação Ágil" },
    { src: "/assets/images/eventos/classico90.png", title: "Clássico 90", subtitle: "Prestação de Contas" },
    { src: "/assets/images/eventos/ifc.png", title: "IFC", subtitle: "Operação em Alto Nível" },
    { src: "/assets/images/eventos/rogimirim.png", title: "Rogimirim", subtitle: "Experiência Institucional" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);



  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      <HeaderApex />
      <HeroApex />

      {/* Problema Section */}
      <section id="problema" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow="O Obstáculo"
            title="O que impede grandes empresas de aproveitarem leis de incentivo com eficiência"
            description="Muitas organizações perdem oportunidades estratégicas por falta de braço técnico ou medo da burocracia."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Processos burocráticos e lentos", desc: "A engrenagem pública pode ser desestimulante sem o conhecimento correto." },
              { title: "Falta de previsibilidade na aprovação", desc: "Projetos mal estruturados resultam em negativas constantes." },
              { title: "Risco na prestação de contas", desc: "Erros técnicos no fechamento podem gerar problemas jurídicos e fiscais." },
              { title: "Dificuldade em estruturar projetos viáveis", desc: "Transformar uma ideia em um projeto executável exige técnica." },
              { title: "Perda de oportunidades", desc: "Falta de conhecimento técnico faz com que prazos e verba sejam desperdiçados." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-apex-blue-50 rounded-2xl bg-apex-blue-50/30 group hover:border-apex-orange-200 transition-colors"
              >
                <div className="mb-4 text-apex-blue-900 group-hover:text-apex-orange-500 transition-colors">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-apex-blue-900 mb-3">{item.title}</h4>
                <p className="text-apex-neutral-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="p-8 bg-apex-blue-900 rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-[0_25px_60px_rgba(241,126,33,0.4)] border border-apex-orange-500/40 relative z-10"
            >
              <p className="text-xl font-medium mb-4 italic">"O resultado? Impostos pagos sem estratégia — e oportunidades desperdiçadas."</p>
              <div className="h-1 w-12 bg-apex-orange-500 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solução / Método Section */}
      <section id="solucao" className="py-24 bg-apex-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-apex-orange-500/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow="O Método"
            title="Aqui, você não gerencia o processo. Entregamos ele pronto."
            description="Nosso método próprio cobre todo o ciclo, garantindo que sua empresa foque apenas no resultado estratégico."
            dark
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {[
              { step: "01", title: "Estruturação Estratégica", desc: "Concepção do projeto focada em viabilidade e impacto." },
              { step: "02", title: "Enquadramento Legal", desc: "Ajuste técnico às leis de incentivo federal e estadual." },
              { step: "03", title: "Aprovação Ágil", desc: "Gestão direta para aprovação em tempo recorde (até 12 dias)." },
              { step: "04", title: "Captação de Patrocínio", desc: "Conexão entre o projeto e os recursos incentivados." },
              { step: "05", title: "Execução Completa", desc: "Operação total em campo com controle de excelência." },
              { step: "06", title: "Prestação de Contas", desc: "Encerramento rigoroso e segurança jurídica total." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <span className="text-6xl font-bold text-white/5 absolute -top-10 -left-4 z-0">{item.step}</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-apex-orange-500 flex items-center justify-center text-xs font-bold">{item.step}</span>
                    {item.title}
                  </h4>
                  <p className="text-apex-blue-100/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionHeader 
                eyebrow="Autoridade que vem de dentro"
                title="Não dependemos do sistema. Entendemos o sistema."
                description="Antes de executar projetos, nós já fomos os responsáveis por aprová-los. Nossa experiência institucional é o que garante sua segurança."
              />
              <ul className="space-y-6">
                {[
                  "Coordenamos projetos esportivos incentivados no Estado do RJ",
                  "Atuamos diretamente na análise e certificação de +1.000 projetos",
                  "Conhecemos, na prática, o que acelera — e o que trava — uma aprovação",
                  "Temos domínio técnico completo das leis de incentivo"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-apex-blue-50 text-apex-blue-900 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-apex-neutral-700 font-medium">{text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={carouselItems[currentImageIndex].src}
                    alt={carouselItems[currentImageIndex].title}
                    fill 
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-apex-blue-900/80 via-apex-blue-900/20 to-transparent z-10 pointer-events-none" />
              
              {/* Carousel Indicators */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "bg-apex-orange-500 w-6" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                  >
                    <p className="text-white font-bold text-2xl mb-1">{carouselItems[currentImageIndex].title}</p>
                    <p className="text-white/80 text-sm tracking-wide uppercase font-heading">{carouselItems[currentImageIndex].subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resultados / Prova Social */}
      <section id="resultados" className="py-24 bg-apex-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow="Resultados Comprovados"
            title="Números que falam por nossa competência técnica"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value={1000} prefix="+" label="Projetos Analisados" icon={FileText} description="Experiência acumulada na ponta da análise governamental." />
            <MetricCard value={33} prefix="R$ " suffix="M" label="Aprovados no RJ" icon={TrendingUp} description="Projetos de impacto estadual aprovados e executados." />
            <MetricCard value={4.5} prefix="R$ " suffix="M" label="Âmbito Federal" icon={Award} description="Alinhamento técnico rigoroso com as exigências federais." />
            <MetricCard value={12} suffix=" Dias" label="Tempo Recorde" icon={Clock} description="Velocidade máxima na aprovação, sem pular etapas." />
          </div>

          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="mt-20 pt-12 border-t border-apex-blue-100/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 overflow-x-auto flex snap-x snap-mandatory gap-6 md:gap-16 scrollbar-none py-4 px-[20%] md:px-[35%] cursor-grab active:cursor-grabbing select-none"
          >
            {shuffledPartners.map((logo, idx) => (
              <div 
                key={idx} 
                className="h-20 md:h-28 w-[60%] md:w-[30%] relative flex-shrink-0 mix-blend-multiply snap-center flex items-center justify-center"
              >
                <div className="relative w-44 md:w-60 h-full">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill 
                    className="object-contain pointer-events-none" 
                    sizes="(max-width: 768px) 176px, 240px" 
                    draggable={false} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Por que importa / Público Alvo */}
      <section className="py-24 bg-apex-blue-950 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeIn}>
            <SectionHeader 
              title="Transforme imposto em impacto real, visibilidade e retorno institucional."
              description="Se a sua empresa é uma grande recolhedora de impostos, você tem uma oportunidade estratégica em mãos."
              dark
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Grandes Empresas", icon: Users, desc: "Com alto volume de ICMS ou IR." },
                { title: "Estratégia de Marca", icon: Target, desc: "Marcas que querem investir com propósito." },
                { title: "Segurança Jurídica", icon: ShieldCheck, desc: "Organizações que evitam riscos burocráticos." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <item.icon className="w-10 h-10 text-apex-orange-400 mx-auto mb-6" />
                  <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                  <p className="text-apex-blue-100/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <motion.div {...fadeIn}>
                 <SectionHeader 
                   eyebrow="Chamada Final"
                   title="O projeto certo começa com a estrutura certa."
                   description="Preencha o formulário ou entre em contato direto via WhatsApp para estruturarmos seu projeto incentivado."
                 />
                 
                 <div className="space-y-8 mt-12">
                   <a 
                     href="https://wa.me/5521991560188" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex gap-6 items-center group cursor-pointer"
                   >
                     <div className="w-14 h-14 rounded-2xl bg-apex-orange-100 flex items-center justify-center text-apex-orange-500 flex-shrink-0 transition-all group-hover:bg-apex-orange-500 group-hover:text-white group-hover:scale-110">
                       <Phone className="w-7 h-7" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-apex-neutral-500 uppercase tracking-widest">WhatsApp Direto</p>
                       <p className="text-xl font-bold text-apex-blue-900">+55 (21) 99156-0188</p>
                     </div>
                   </a>
                   
                   <a 
                     href="mailto:projetos@apexpowerprojects.com.br"
                     className="flex gap-6 items-center group cursor-pointer"
                   >
                     <div className="w-14 h-14 rounded-2xl bg-apex-orange-100 flex items-center justify-center text-apex-orange-500 flex-shrink-0 transition-all group-hover:bg-apex-orange-500 group-hover:text-white group-hover:scale-110">
                       <Mail className="w-7 h-7" />
                     </div>
                      <div>
                        <p className="text-sm font-bold text-apex-neutral-500 uppercase tracking-widest">E-mail Institucional</p>
                        <p className="text-xs min-[360px]:text-sm sm:text-lg md:text-xl font-bold text-apex-blue-900">projetos@apexpowerprojects.com.br</p>
                      </div>
                   </a>
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-apex-blue-50/50 p-8 md:p-10 rounded-3xl border border-apex-blue-100"
               >
                 <form className="space-y-6" onSubmit={handleFormSubmit}>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-apex-blue-900">Nome Completo</label>
                     <input name="name" required type="text" className="w-full h-12 px-4 rounded-xl border border-apex-blue-100 bg-white focus:ring-2 focus:ring-apex-orange-400 outline-none transition-all" placeholder="Seu nome aqui" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-apex-blue-900">E-mail Corporativo</label>
                     <input name="email" required type="email" className="w-full h-12 px-4 rounded-xl border border-apex-blue-100 bg-white focus:ring-2 focus:ring-apex-orange-400 outline-none transition-all" placeholder="empresa@email.com" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-apex-blue-900">Empresa / Volume de Imposto Estimado</label>
                     <input name="empresa" required type="text" className="w-full h-12 px-4 rounded-xl border border-apex-blue-100 bg-white focus:ring-2 focus:ring-apex-orange-400 outline-none transition-all" placeholder="Ex: Apex Power / R$ 5M" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-apex-blue-900">Mensagem</label>
                     <textarea name="message" required className="w-full h-32 p-4 rounded-xl border border-apex-blue-100 bg-white focus:ring-2 focus:ring-apex-orange-400 outline-none transition-all resize-none" placeholder="Como posso ajudar seu projeto?"></textarea>
                   </div>

                   {formStatus === "success" && (
                     <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-sm font-medium">
                       Mensagem enviada com sucesso! Entraremos em contato em breve.
                     </div>
                   )}
                   
                   {formStatus === "error" && (
                     <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-sm font-medium">
                       Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou use nossos canais diretos.
                     </div>
                   )}

                   <input type="hidden" name="_captcha" value="false" />
                   <input type="hidden" name="_template" value="box" />

                   <Button disabled={isSubmitting} type="submit" size="lg" className="w-full bg-apex-blue-900 hover:bg-apex-blue-800 text-white font-bold h-14 rounded-xl text-lg disabled:opacity-70">
                     {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                   </Button>
                 </form>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      <FooterApex />
    </main>
  );
}
