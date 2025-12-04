"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Zap,
  CheckCircle2,
  Star,
  ArrowRight,
  Mail,
  Youtube,
  Instagram,
  Linkedin,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const whatsappNumber = "+34602731218";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola! Estoy interesado en sus servicios de diseño de miniaturas para YouTube. Me gustaría saber más sobre cómo pueden ayudarme a aumentar mis conversiones.")}`;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d101f] text-white">
      <FloatingParticles />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d101f]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/logo/sobekvisualstextoblanco.png"
                alt="Sobek Visuals"
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                Servicios
              </a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                Portfolio
              </a>
              <a href="#process" className="hover:text-cyan-400 transition-colors">
                Proceso
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contacto
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="gradient-button border-0 text-white font-bold px-6 py-2.5 glow-effect hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] animate-pulse-glow relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contacto
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="parallax-hero"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <AnimatedBackground />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block mb-4 px-2 md:px-0">
              <span className="text-xs md:text-sm text-cyan-400 font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 whitespace-nowrap">
                Especializados en escalar Marcas Personales
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Miniaturas de YouTube diseñadas para
              <br />
              <span className="gradient-text">aumentar tus ingresos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Construimos tu marca y optimizamos cada miniatura para atraer clics cualificados, aumentar autoridad y convertir audiencia en ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="gradient-button border-0 text-white font-bold text-lg px-10 py-7 glow-effect hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    Contáctanos
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" className="border-2 border-cyan-400/70 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 text-lg px-10 py-7 font-bold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] relative overflow-hidden group">
                  <span className="relative z-10">Ver Portfolio</span>
                  <div className="absolute inset-0 bg-cyan-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Análisis de Métricas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Revisiones Ilimitadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Optimización del CTR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Services Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0d1a]">
        <div className="container mx-auto max-w-6xl">
          <ScrollRevealSection direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Convierte Clicks en <span className="gradient-text">Clientes</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Nos especializamos en crear miniaturas de YouTube que llaman la atención para canales del nicho del emprendimiento. Cada diseño está elaborado para maximizar las tasas de clics y generar confianza en tu público, utiliza estrategias psicológicas para llamar la atención sin recurrir al clickbait, lo que refuerza tu marca y tu presencia.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollRevealSection direction="up" delay={200} className="flex">
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 group h-full flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 transition-transform relative z-10 icon-bounce">
                  <FileText className="h-7 w-7 text-cyan-400" />
                </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Diseño estratégico</h3>
              <p className="text-gray-400 relative z-10 flex-grow">
                Cada miniatura está diseñada con técnicas probadas de optimización del CTR que hacen que tu contenido destaque en feeds abarrotados.
              </p>
            </InteractiveCard>
            </ScrollRevealSection>

            <ScrollRevealSection direction="up" delay={300} className="flex">
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 group h-full flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 transition-transform relative z-10 icon-rotate">
                  <Zap className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Coherencia de marca</h3>
                <p className="text-gray-400 relative z-10 flex-grow">
                  Identidad visual cohesionada en todas tus miniaturas que genera reconocimiento y confianza entre tu público.
                </p>
              </InteractiveCard>
            </ScrollRevealSection>

            <ScrollRevealSection direction="up" delay={400} className="flex">
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 group h-full flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 transition-transform relative z-10 icon-pulse-scale">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400" />
                </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Centrados en el Nicho</h3>
              <p className="text-gray-400 relative z-10 flex-grow">
                Especializados en B2B y contenido de marketing: sabemos lo que atrae al público profesional.
              </p>
            </InteractiveCard>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollRevealSection direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestro <span className="gradient-text">Trabajo</span>
              </h2>
              <p className="text-xl text-gray-400">
                Miniaturas que te hacen destacar de la competencia
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Alejavi",
                metric: "Incremento +65% CTR",
                image: "/thumbnails/thumbnail-1.jpg", // ← Cambia esto con tu imagen
              },
              {
                title: "Juan Pe",
                metric: "Incremento +115% CTR",
                image: "/thumbnails/thumbnail-2.jpg", // ← Cambia esto con tu imagen
              },
              {
                title: "Tee Cas",
                metric: "Incremento +75% CTR",
                image: "/thumbnails/thumbnail-3.jpg", // ← Cambia esto con tu imagen
              },
              {
                title: "Alejavi",
                metric: "Incremento +55% CTR",
                image: "/thumbnails/thumbnail-4.jpg", // ← Cambia esto con tu imagen
              },
              {
                title: "Juan Pe",
                metric: "Incremento +55% CTR",
                image: "/thumbnails/thumbnail-5.jpg", // ← Cambia esto con tu imagen
              },
              {
                title: "Tee Cas",
                metric: "Incremento +67% CTR",
                image: "/thumbnails/thumbnail-6.jpg", // ← Cambia esto con tu imagen
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-lg cursor-pointer overflow-hidden border-[3px] border-transparent group-hover:border-cyan-400 transition-all duration-300 portfolio-thumbnail"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#1a1f35] to-[#0d101f]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1 relative z-10">{item.title}</h3>
                    <p className="text-cyan-400 font-semibold relative z-10">{item.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0d1a] to-transparent">
        <div className="container mx-auto max-w-6xl">
          <ScrollRevealSection direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lo que dicen nuestros <span className="gradient-text">Clientes</span>
              </h2>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8">
              {[
              {
                name: "Alejavi Rivera",
                role: "Creador de Contenido",
                company: "Fundador AcademIA artificial",
                image: "https://ugc.same-assets.com/ohGP_nY-8PRGa6KZOkfV3d7j1j9dz0FH.jpeg",
                quote:
                  "Entienden mi marca, analizan cada vídeo y entregan miniaturas pensadas para convertir, no solo para verse bien. Son rápidos, claros y siempre proponen mejoras. Trabajar con ellos es como tener un equipo visual interno.",
                rating: 5,
              },
              {
                name: "Juan Pe Navarro",
                role: "Fundador Divisual",
                company: "Creador de Contenido",
                image: "https://ugc.same-assets.com/-6MnZ0KqhgMY0ARY-xcL9kGF6EelcR4N.jpeg",
                quote:
                  "Mi CTR estaba estancado por debajo del 3%. Desde que empecé con Sobek Visuals, analizamos cada miniatura, ajustamos el estilo y en pocas semanas estábamos por encima del 7%. El crecimiento fue inmediato. No es solo diseño: es estrategia basada en datos.",
                rating: 5,
              },
              {
                name: "Tommy Castellanos",
                role: "3 Tiendas +2M€",
                company: "Creador de Contenido",
                image: "https://ugc.same-assets.com/bViIqnC9wYNtwsUX-t2PzF-Ldo0E2fYr.jpeg",
                quote:
                  "Desde que trabajo con Sobek Visuals, mis vídeos no solo reciben más clics: ahora convierten. La calidad visual ha elevado mi marca y ha multiplicado mis clientes. Profesionalidad absoluta.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <InteractiveCard
                key={index}
                className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20"
              >
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-cyan-400/50"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic relative z-10">"{testimonial.quote}"</p>
              </InteractiveCard>
            ))}
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollRevealSection direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                El método que <span className="gradient-text">Funciona</span>
              </h2>
              <p className="text-xl text-gray-400">4 simples pasos que te harán tener resultados desde el día 1</p>
            </div>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contacto",
                description:
                  "Completa el formulario de contacto o agenda una llamada. Cuéntanos sobre tu canal, estilo de contenido y objetivos.",
                icon: MessageSquare,
              },
              {
                step: "02",
                title: "Estudio Personalizado",
                description:
                  "Realizamos un estudio gratuito y personalizado para tu desarrollo, analizando tu audiencia y competencia.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Análisis de Mercado",
                description:
                  "Estudiamos las tendencias de tu nicho y estrategias de CTR que funcionan mejor en tu mercado específico.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Miniatura Final",
                description:
                  "Recibe tu miniatura optimizada con revisiones ilimitadas hasta que estés 100% satisfecho con el resultado.",
                icon: ImageIcon,
              },
            ].map((item, index) => (
              <ScrollRevealSection key={index} direction="up" delay={200 + (index * 100)} className="flex">
                <div className="relative w-full">
                  <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 h-full flex flex-col">
                    <div className="text-6xl font-bold text-cyan-400/20 mb-4 relative z-10">
                      {item.step}
                    </div>
                    <div className={`w-14 h-14 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 relative z-10 ${index % 3 === 0 ? 'icon-bounce' : index % 3 === 1 ? 'icon-rotate' : 'icon-pulse-scale'}`}>
                      <item.icon className="h-7 w-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 text-sm relative z-10 flex-grow">{item.description}</p>
                  </InteractiveCard>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-cyan-400/30" />
                    </div>
                  )}
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0d1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm text-cyan-400 font-semibold px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                La clave del Éxito
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              No Se Trata Solo de <span className="gradient-text">Visitas</span>
              <br />
              Se Trata de <span className="gradient-text">Conversión</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <ScrollRevealSection direction="up" delay={200}>
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 text-center">
                <AnimatedCounter
                  end={73}
                  suffix="%"
                  className="text-5xl font-bold gradient-text mb-4 relative z-10"
                />
                <p className="text-gray-300 relative z-10">
                  de los espectadores <span className="text-white font-semibold">nunca dan clic</span> a videos con miniaturas genéricas
                </p>
              </InteractiveCard>
            </ScrollRevealSection>
            <ScrollRevealSection direction="up" delay={300}>
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 text-center">
                <AnimatedCounter
                  end={5}
                  suffix="x"
                  className="text-5xl font-bold gradient-text mb-4 relative z-10"
                />
                <p className="text-gray-300 relative z-10">
                  <span className="text-white font-semibold">más conversiones</span> con miniaturas optimadas psicológicamente
                </p>
              </InteractiveCard>
            </ScrollRevealSection>
            <ScrollRevealSection direction="up" delay={400}>
              <InteractiveCard className="p-8 bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border-cyan-400/20 text-center">
                <AnimatedCounter
                  end={48}
                  suffix="h"
                  className="text-5xl font-bold gradient-text mb-4 relative z-10"
                />
                <p className="text-gray-300 relative z-10">
                  es el tiempo crítico donde <span className="text-white font-semibold">se decide el éxito</span> de tu video
                </p>
              </InteractiveCard>
            </ScrollRevealSection>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f35] to-[#0d101f] border border-cyan-400/20 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center md:text-left">
              Nuestro Método: De <span className="gradient-text">Espectadores</span> a{" "}
              <span className="gradient-text">Clientes</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400 mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">
                    Análisis Profundo de Métricas del Canal
                  </p>
                  <p>
                    Revisamos CTR, retención, tráfico, miniaturas pasadas y competidores.
Si tu contenido no se está viendo, lo primero que estudiamos es por qué, y dónde estás perdiendo clics o atención.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400 mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">
                    Miniaturas Diseñadas para Ser Vistas (y No Ignoradas)
                  </p>
                  <p>
                    La mayoría de vídeos no fallan por el contenido… fallan porque nadie hace clic.
Creamos miniaturas que destacan al instante en el feed y muestran exactamente el valor del vídeo en un solo vistazo.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400 mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">
                    Storytelling Visual que Aporta Contexto y Atrae Clics Cualificados
                  </p>
                  <p>
                    Cada miniatura comunica una idea clara y relevante para tu público.
El objetivo no es solo llamar la atención, sino atraer a la gente correcta: las personas que pueden convertirse en clientes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400 mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">
                    Monitorización y Mejora Continua Basada en Datos Reales
                  </p>
                  <p>
                    Nada queda al azar.
Analizamos el rendimiento de cada miniatura y optimizamos según métricas reales:
CTR, fuentes de tráfico, rendimiento por dispositivo y competencia directa.
Mejoramos lo que funciona y corregimos lo que no.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Listo para Multiplicar tus Conversiones?
              </p>
              <p className="text-xl text-gray-400">
                Únete a los creadores que ya están convirtiendo espectadores en clientes
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-md mx-auto md:w-auto md:max-w-none">
              <Button className="gradient-button border-0 text-white font-bold text-sm md:text-xl px-4 py-5 md:px-14 md:py-9 glow-effect hover:scale-110 transition-all duration-300 shadow-[0_0_50px_rgba(34,211,238,0.7)] hover:shadow-[0_0_80px_rgba(34,211,238,1)] animate-pulse-glow relative overflow-hidden group w-full md:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <svg className="h-5 w-5 md:h-7 md:w-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="whitespace-normal md:whitespace-nowrap text-center">¡Consigue Tu Análisis Gratis Hoy!</span>
                  <ArrowRight className="h-5 w-5 md:h-7 md:w-7 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-6">
              📱 Respuesta inmediata • 🎯 Estudio personalizado gratuito • ✨ Sin compromiso
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Te resolvemos tus <span className="gradient-text">Preguntas</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-[#1a1f35] border border-cyan-400/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-cyan-400">
                ¿Realmente necesito mejorar mis miniaturas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Sí, si quieres crecer sin depender de la suerte.
El 90% de los creadores estancados no tienen un problema de contenido, sino de primera impresión.
Una miniatura profesional no es estética: es visibilidad, clics y retención.
Si quieres resultados diferentes, empieza por donde YouTube realmente decide quién crece.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-[#1a1f35] border border-cyan-400/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-cyan-400">
                ¿Y si todavía soy un canal pequeño?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Precisamente por eso deberías empezar ahora.
Los creadores que más rápido escalan son los que entienden una cosa:
la calidad visual atrae oportunidades antes de que lleguen los números.
Si esperas a "ser grande", llegarás tarde. Construye tu imagen antes de que la necesites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-[#1a1f35] border border-cyan-400/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-cyan-400">
                ¿Cómo sé que la inversión se compensa?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Porque una miniatura que funciona no solo te da clics:
te da suscriptores, autoridad, watchtime y un ciclo de crecimiento automático.
La pregunta no es cuánto cuesta mejorar tu imagen,
sino cuánto te está costando no hacerlo cada vez que subes un vídeo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-[#1a1f35] border border-cyan-400/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-cyan-400">
                ¿Podéis trabajar conmigo si soy constante subiendo vídeos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Si eres constante, eres exactamente el tipo de creador que seleccionamos.
No trabajamos con todos: elegimos a los que tienen proyección real.
Si publicas, creces.
Nosotros solo aceleramos ese camino.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* WhatsApp Contact Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-[#1a1f35] border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-4 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-lg font-medium group-hover:text-cyan-400 transition-colors">
                  ¿Tienes otra pregunta? Escríbenos por WhatsApp
                </span>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-[#0a0d1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/logo/sobekvisualstextoblanco.png"
                alt="Sobek Visuals"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Diseño profesional de miniaturas de YouTube para canales empresariales que exigen resultados.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-cyan-400 transition-colors">
                    Proceso
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <a
                    href="mailto:sobekvisuals@gmail.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    sobekvisuals@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    +34 602 731 218
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-cyan-400" />
                  <a
                    href="https://www.instagram.com/sobekvisuals/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    @sobekvisuals
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Sobek Visuals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
