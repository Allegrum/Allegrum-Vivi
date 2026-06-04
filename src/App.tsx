/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  Menu, 
  X, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Droplet, 
  Syringe, 
  Activity, 
  Sun, 
  ShieldCheck, 
  Instagram, 
  Youtube, 
  Facebook, 
  Award,
  ArrowUpRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Imagens geradas de alta qualidade do projeto
const drRubensPhoto = "/src/assets/images/Rubens.jpeg";
const draJoelyPhoto = "/src/assets/images/Joely.jpeg";
const clinicHeroBg = "/src/assets/images/clinic_hero_bg_1780585593128.png";
const allegrumLogo = "/src/assets/images/Allegrum.png";

// Logo Icon component representing the corporate identity exactly: "A" and "V" human health design.
export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1100 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Head */}
      <circle cx="518" cy="115" r="88" fill="#32368D" />
      
      {/* Top curving arms */}
      <path 
        d="M 12 11C 165 47 386 168 518 212C 650 168 871 47 1024 11" 
        stroke="#32368D" 
        strokeWidth="42" 
        strokeLinecap="round" 
      />

      {/* Main body of A */}
      <path 
        d="M 518 212 C 400 320 236 490 236 650 C 236 780 340 850 410 750 C 470 650 490 540 518 430" 
        stroke="#32368D" 
        strokeWidth="42" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Cursive crossbar of A */}
      <path 
        d="M 330 520 C 410 490 530 460 620 450" 
        stroke="#32368D" 
        strokeWidth="36" 
        strokeLinecap="round" 
      />

      {/* V shape checkmark */}
      <path 
        d="M 518 310 C 560 410 680 720 740 800 C 790 860 840 840 910 680 C 970 540 1030 390 1068 335" 
        stroke="#00A6EB" 
        strokeWidth="45" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export default function App() {
  // Mobile menu control
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Accordion FAQ states - allows toggling individual question indices
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Appointment Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingTreatment, setBookingTreatment] = useState('Consulta Médica Integrativa');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  
  // Floating contact states
  const [showScrollTop, setShowScrollTop] = useState(false);

  // WhatsApp helper
  const handleWhatsAppRedirect = (customText?: string) => {
    const defaultText = "Olá, Allegrum Vivi! Gostaria de obter mais informações sobre as consultas e tratamentos integrativos de Medicina Integrada.";
    const textToSend = customText ? customText : defaultText;
    const whatsappUrl = `https://wa.me/551122960132?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank', 'referrer');
  };

  // Handle appointment form submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) {
      alert("Por favor, preencha seu nome e contato para prosseguir.");
      return;
    }

    const compiledMessage = `Olá Allegrum Vivi! Gostaria de agendar um atendimento de Medicina Integrada. 🩺\n\n` +
      `• *Nome:* ${bookingName}\n` +
      `• *WhatsApp:* ${bookingPhone}\n` +
      `• *Tratamento:* ${bookingTreatment}\n` +
      `• *Data:* ${bookingDate ? new Date(bookingDate).toLocaleDateString('pt-BR') : 'A acertar'}\n` +
      `• *Horário:* ${bookingTime || 'A acertar'}\n\n` +
      `Gostaria de verificar a disponibilidade e confirmar a consulta!`;

    handleWhatsAppRedirect(compiledMessage);
    setIsModalOpen(false);
    // Reset form
    setBookingName('');
    setBookingPhone('');
    setBookingDate('');
    setBookingTime('');
  };

  // Track scroll position to show "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  // Treatments data list matching user requirements
  const treatments = [
    {
      id: "soroterapia",
      title: "Soroterapia",
      summary: "Infusões e nutrientes",
      desc: "Administração direta em via endovenosa de associações terapêuticas personalizadas de minerais, antioxidantes, aminoácidos e vitaminas de alta biodisponibilidade para otimização imunológica, rejuvenescimento celular sistemático e performance celular instantânea.",
      icon: <Droplet className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "reposicao_hormonal",
      title: "Reposição Hormonal",
      summary: "Balanço bioidêntico",
      desc: "Adequação metabólica focada no restabelecimento do equilíbrio endocrinológico através de hormônios homólogos à fisiologia interna humana, assegurando segurança no processo e resgatando qualidade de sono, libido e cognição.",
      icon: <Activity className="w-6 h-6 text-teal-600" />
    },
    {
      id: "detox_ionico",
      title: "Detox Iônico",
      summary: "Limpeza celular para circulação",
      desc: "Terapia de purificação orgânica profunda através de ionização de hidromassagem podal externa (spa dos pés medicinal), estimulando a liberação sistêmica de toxinas, metais pesados e otimizando a circulação microvascular.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "suplementacao_ev_im",
      title: "Suplementação EV e IM",
      summary: "Nutrientes intravenosos e intramusculares",
      desc: "Protocolos injetáveis individualizados para reposição celular de coenzimas, minerais e imunomoduladores. Indicados para fadiga persistente, destoxificação crônica, melhora de foco e emagrecimento biológico otimizado.",
      icon: <Syringe className="w-6 h-6 text-teal-600" />
    },
    {
      id: "cromoterapia",
      title: "Cromoterapia",
      summary: "Energia da cor",
      desc: "Utilização estruturada de comprimentos de onda de espectros luminosos coloridos dirigidos sobre centros biológicos energéticos para modular oscilações de humor, aliviar dores, reequilibrar sistemas nervosos e catalisar cicatrizações.",
      icon: <Sun className="w-6 h-6 text-amber-500" />
    },
    {
      id: "terapia_plasma",
      title: "Terapêutica de Plasma",
      summary: "Medicina regenerativa avançada",
      desc: "Recurso biológico inovador baseado em fatores regeneradores celulares concentrados para acelerar processos de reparação tecidual, tratamento de articulações e suporte regenerativo celular estético avançado com máxima biocompatibilidade.",
      icon: <Award className="w-6 h-6 text-teal-600" />
    }
  ];

  // FAQ data matching user requirements
  const faqData = [
    {
      idx: 0,
      question: "Horário de funcionamento?",
      icon: "🕒",
      answer: "Cuidamos da sua saúde e bem-estar nos seguintes horários:\n\n• Segunda a quinta-feira: das 08h às 18h\n• Sexta-feira: das 08h às 17h\n\nCaso tenha alguma necessidade específica ou precise de algum encaixe personalizado fora destes horários, não hesite em entrar em contato com a nossa equipe! Faremos o melhor para acomodar o seu atendimento. ✨"
    },
    {
      idx: 1,
      question: "Possui estacionamento?",
      icon: "🚗",
      answer: "Não possuímos estacionamento particular privativo. Contudo, nossa rua é extremamente tranquila, calma e estritamente residencial. Além disso, para sua maior praticidade, comodidade e total segurança, dispomos de um estacionamento com serviço de lava-rápido localizado exatamente em frente à nossa clínica."
    },
    {
      idx: 2,
      question: "Endereço e como vir de transporte público?",
      icon: "📍",
      answer: "Estamos localizados na Rua Urupas, 50 - Vila Gomes Cardim (Tatuapé) - São Paulo/SP - CEP: 03321-010.\n\nPara quem utiliza transporte público:\nDa Estação de Metrô / Shopping Metrô Tatuapé:\nO acesso é muito simples e rápido. Pegue as linhas de ônibus municipais [372U-10] ou [3763-10] no Terminal Lado Sul do metrô. Desça no ponto de parada na altura da Rua Tuiuti 2750 (cerca de 5 a 9 minutos de trajeto) e caminhe apenas 4 minutos adicionais até a nossa porta na Rua Urupas!"
    },
    {
      idx: 3,
      question: "Possui locais para comer próximo?",
      icon: "🍽️",
      answer: "Sim! A nossa clínica encontra-se localizada em uma das regiões mais nobres, seguras e bem localizadas do Tatuapé. Estamos cercados por uma imensa variedade de excelentes restaurantes de alta gastronomia, cafés charmosos e confeitarias de alto nível. Além disso, ficamos a pouquíssimos minutos de carro ou caminhada do Shopping Metrô Tatuapé e do Shopping Boulevard Tatuapé, que possuem amplas praças de alimentação com variadas alternativas gourmet."
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white" id="home">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-950 text-white text-[11px] py-1.5 px-4 sticky top-0 z-50 border-b border-white/5 font-accent md:text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Rua Urupas, 50 - Vila Gomes Cardim, Tatuapé, São Paulo - SP</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 hover:text-white transition-colors duration-200">
              <Phone className="w-3 h-3 text-emerald-400" /> (11) 2296-0132
            </span>
            <span className="hidden sm:inline text-emerald-500/30">|</span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> Seg a Qui: 8h às 18h | Sex: 8h às 17h
            </span>
          </div>
        </div>
      </div>

      {/* HEADER SECTION */}
      <header className="sticky top-[34px] md:top-[30px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo / Brand Name with uploaded Allegrum.png logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={allegrumLogo} 
              alt="Allegrum Vivi - Medicina Integrada Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#home" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Home</a>
            <a href="#sobre" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Sobre Nós</a>
            <a href="#tratamentos" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Tratamentos</a>
            <a href="#como-funciona" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Como Funciona</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Equipes / FAQ</a>
            <a href="#contato" className="text-slate-600 hover:text-emerald-500 font-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px]">Contato</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              id="header_agendar_btn"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-md hover:shadow-lg hover:shadow-emerald-100 transition-all duration-200 flex items-center gap-1.5 transform hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Hamburger */}
          <div className="flex md:hidden">
            <button
              id="mobile_hamburger_toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors duration-200"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-inner uppercase text-xs"
            >
              <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col font-accent font-bold text-slate-700 tracking-wider">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#sobre" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Sobre Nós
                </a>
                <a 
                  href="#tratamentos" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Tratamentos
                </a>
                <a 
                  href="#como-funciona" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Como Funciona
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Equipes & FAQ
                </a>
                <a 
                  href="#contato" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Contato
                </a>
                <div className="pt-4 px-3 flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full text-center py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Consulta
                  </button>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleWhatsAppRedirect();
                    }}
                    className="w-full text-center py-3 border border-emerald-500 text-emerald-600 font-medium rounded-full flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Falar no WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION / BANNER PRINCIPAL */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-12 md:py-20 lg:py-24 overflow-hidden bg-slate-950">
        
        {/* Background Image of Luxury Clinic with custom overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={clinicHeroBg} 
            alt="Ambiente Allegrum Vivi - Medicina Integrada" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 filter blur-[1px]"
          />
          {/* Advanced visual depth overlays: navy/emerald tint and a soft gradient spotlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-emerald-500/10 blur-[130px] z-10" />
        </div>

        {/* Substantive Hero content container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Area: Hero text and CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Premium tag */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-emerald-300 font-accent text-xs font-semibold tracking-wider uppercase mb-5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Medicina Integrativa & Longevidade</span>
              </motion.div>

              {/* High-Impact Heading matching required copy using Serif Editorial vibe */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-3.5xl sm:text-4.5xl md:text-5.5xl text-white tracking-tight leading-[1.12] mb-6"
              >
                Allegrum Vivi: <br />
                <span className="text-emerald-400 font-serif italic font-normal">O Equilíbrio</span> que sua saúde merece.
              </motion.h1>

              {/* Subtitle description adapted: Viva a Sua Melhor Versão & O Nosso Jeito de Cuidar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-xs sm:text-sm tracking-normal font-sans font-light leading-relaxed max-w-2xl mb-8 space-y-4"
              >
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-emerald-400 font-accent text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
                    Viva a Sua Melhor Versão
                  </p>
                  <p className="text-slate-250 font-normal leading-relaxed text-sm">
                    Na <strong className="text-white font-semibold">Allegrum Vivi</strong>, acreditamos que a verdadeira saúde vai muito além da ausência de doenças. Ela é o resultado do equilíbrio perfeito entre o corpo, a mente e o seu estilo de vida. Nossa missão é ir além dos sintomas, investigando as causas reais dos desequilíbrios para devolver a você a energia, a clareza mental e a longevidade que o seu corpo merece.
                  </p>
                </div>
                
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <p className="font-accent font-semibold text-xs tracking-wider uppercase text-emerald-400">
                    O Nosso Jeito de Cuidar
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    Unimos a precisão da ciência médica tradicional ao acolhimento de um olhar verdadeiramente humano e sistêmico:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong className="text-white font-medium">Tempo para Você:</strong> Consultas profundas, sem pressa, focadas na sua história.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong className="text-white font-medium">Cuidado Sob Medida:</strong> Tratamentos personalizados respeitando sua individualidade biológica.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong className="text-white font-medium">Foco na Causa:</strong> Investigação profunda de fatores inflamatórios e metabólicos.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong className="text-white font-medium">Equipe Multidisciplinar:</strong> Profissionais trabalhando integrados pela sua saúde integral.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-xs text-emerald-300 font-light italic pt-2 border-t border-slate-800/65">
                  Aqui, você não é apenas um prontuário. Você é o protagonista da sua própria jornada de bem-estar. Estamos prontos para caminhar ao seu lado rumo a uma vida mais saudável, vibrante e equilibrada.
                </p>
              </motion.div>

              {/* CTA buttons group */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <button
                  id="hero_agendar_btn"
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </button>
                
                <button
                  id="hero_conhecer_btn"
                  onClick={() => {
                    const section = document.getElementById('tratamentos');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 py-3.5 rounded-full border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group bg-slate-900/40 bg-blend-multiply backdrop-blur-sm"
                >
                  <span>Conhecer Tratamentos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

            </div>

            {/* Right Area: Showcase Doctors combined in a premium visual layout */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              
              {/* Outer blurred backdrop circle pattern */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-emerald-500/10 blur-[60px] z-0" />
              
              {/* Overlay Glass Block showcasing our medical staff cards */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-accent font-semibold text-xs tracking-wider uppercase text-emerald-400">Direção Técnica Integrada</span>
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="flex flex-col gap-4">
                  {/* Doctor 1 snippet */}
                  <div className="flex items-center gap-3 bg-slate-950/45 p-2.5 rounded-xl border border-white/5">
                    <img 
                      src={drRubensPhoto} 
                      alt="Dr. Rubens Cascapera Junior" 
                      className="w-14 h-14 rounded-lg object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-white font-accent font-bold text-sm">Dr. Rubens Cascapera Jr.</h4>
                      <p className="text-[11px] text-emerald-300 font-medium">Médico Integrativo (CRM-SP 41749)</p>
                      <p className="text-[10px] text-slate-400 line-clamp-1">Foco em equilíbrio hormonal e longevidade</p>
                    </div>
                  </div>

                  {/* Doctor 2 snippet */}
                  <div className="flex items-center gap-3 bg-slate-950/45 p-2.5 rounded-xl border border-white/5">
                    <img 
                      src={draJoelyPhoto} 
                      alt="Dra. Joely Pucci" 
                      className="w-14 h-14 rounded-lg object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-white font-accent font-bold text-sm">Dra. Joely Pucci</h4>
                      <p className="text-[11px] text-emerald-300 font-medium">Farmacêutica Clínica (CRF-SP 18634)</p>
                      <p className="text-[10px] text-slate-400 line-clamp-1">Foco em bioquímica, biofísica e saúde integrativa</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[10.5px] text-slate-350 italic font-light">"Abordagem centrada na bioquímica integrada do indivíduo."</p>
                </div>

                {/* Micro-CTA inside the hero display */}
                <button 
                  onClick={() => {
                    const section = document.getElementById('sobre');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-center py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 font-accent"
                >
                  <span>Conhecer nossa equipe médica</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </motion.div>

            </div>

          </div>
        </div>

      </section>

      {/* METRIC CARD SECTIONS OR BRIEF HIGHLIGHT TO BREAK UP CONTENT */}
      <section className="bg-white border-y border-slate-100 py-8 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="py-4 md:py-0">
              <div className="flex justify-center mb-1 text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-1 text-emerald-500" />
                <span className="font-accent font-semibold text-sm tracking-wider uppercase text-slate-850">Cuidado Individualizado</span>
              </div>
              <p className="text-xs text-slate-500">Cada organismo possui bioquímica única.</p>
            </div>
            <div className="py-4 md:py-0">
              <div className="flex justify-center mb-1 text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-1 text-emerald-500" />
                <span className="font-accent font-semibold text-sm tracking-wider uppercase text-slate-850">Infusões Seguras</span>
              </div>
              <p className="text-xs text-slate-500">Materiais certificados de altíssimo nível.</p>
            </div>
            <div className="py-4 md:py-0">
              <div className="flex justify-center mb-1 text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-1 text-emerald-500" />
                <span className="font-accent font-semibold text-sm tracking-wider uppercase text-slate-855">Ciência Avançada</span>
              </div>
              <p className="text-xs text-slate-500">Medicina de precisão para restauração de tecidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NÓS SECTION */}
      <section id="sobre" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Title Center */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 mb-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider font-accent">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Conheça-nos
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-indigo-950 tracking-tight font-black">
              Sobre Nós
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-3 max-w-2xl font-light">
              Aliamos a rigorosa base científica da medicina convencional às mais eficientes práticas integrativas modernas. Conheça os especialistas dedicados a otimizar a sua saúde de forma integrada.
            </p>
          </div>

          {/* Two Responsive Landscape Cards with visual rhythm and details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* CARD 1: DR. RUBENS CASCAPERA JUNIOR */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full group p-5 gap-6">
              <div className="aspect-[4/3] md:aspect-square w-full md:w-48 h-56 md:h-auto rounded-xl overflow-hidden relative shrink-0">
                <img 
                  src={drRubensPhoto} 
                  alt="Dr. Rubens Cascapera Junior" 
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-550"
                />
              </div>
              
              <div className="flex flex-col flex-grow justify-between py-1.5">
                <div>
                  <h3 className="font-display font-extrabold text-[#030712] text-lg md:text-xl mb-1">
                    Dr. Rubens Cascapera Junior
                  </h3>
                  <h4 className="text-emerald-600 font-accent font-bold text-[11px] tracking-wider uppercase mb-3">
                    Médico Integrativo | CRM-SP 41749
                  </h4>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    Com mais de 45 anos de dedicação à medicina, o Dr. Rubens Cascapera Junior (CRM/SP 41749) é médico clínico geral e um dos nomes de referência em Medicina Integrativa e Funcional no Brasil. Formado em 1981 pela Universidade de Mogi das Cruzes, iniciou sua carreira no ambiente de alta complexidade de UTIs e prontos-socorros. Há mais de três décadas, transformou sua prática clínica ao direcionar o olhar para o paciente como um sistema inteiro, buscando a causa real dos desequilíbrios corporais. Especialista em aliar a ciência baseada em evidências a terapias complementares de ponta — como acupuntura, prática ortomolecular e modulação hormonal —, ele atua ativamente na promoção da longevidade saudável. É também escritor, autor do livro "Saúde + Saudável", e compartilha seu conhecimento em grandes portais e canais de saúde.
                  </p>
                </div>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-accent">Especialidades:</span>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md">Reposição Hormonal</span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Fisiologia</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Longevidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: DRA. JOELY PUCCI */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full group p-5 gap-6">
              <div className="aspect-[4/3] md:aspect-square w-full md:w-48 h-56 md:h-auto rounded-xl overflow-hidden relative shrink-0">
                <img 
                  src={draJoelyPhoto} 
                  alt="Dra. Joely Pucci" 
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-550"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between py-1.5">
                <div>
                  <h3 className="font-display font-extrabold text-[#030712] text-lg md:text-xl mb-1">
                    Dra. Joely Pucci
                  </h3>
                  <h4 className="text-emerald-600 font-accent font-bold text-[11px] tracking-wider uppercase mb-3">
                    Farmacêutica Clínica | CRF-SP 18634
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    A Dra. Joely Pucci (CRF 18634) é farmacêutica bioquímica integrativa e terapeuta complementar com sólida trajetória na promoção da saúde, longevidade e bem-estar. Atua com maestria no segmento da medicina e farmácia integrativa, focando na biofísica do corpo e no cuidado individualizado para que o organismo funcione em perfeito equilíbrio. Como responsável técnica e especialista em desenvolvimento de formulações individualizadas, seu trabalho une a ciência farmacêutica tradicional às terapias modernas e integrativas. O foco das consultas e tratamentos é desinflamar o corpo, organizar o metabolismo e respeitar o tempo biológico de cada paciente, auxiliando em processos de emagrecimento saudável, gerenciamento de crises de ansiedade e reabilitação da saúde integrativa.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-accent">Áreas Clínicas:</span>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md">Bioquímica Integrativa</span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Biofísica do Corpo</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Saúde Integrativa</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TREATMENTS / COMO FUNCIONA INDEX */}
      <section id="tratamentos" className="py-16 md:py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading matching title requirements */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 mb-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider font-accent">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Nossas Terapias Moleculares
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-indigo-950 tracking-tight font-black">
              Nossos Tratamentos
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-3 max-w-2xl font-light">
              Cada protocolo é meticulosamente fundamentado em exames bioquímicos individuais e administrado por enfermeiras e farmacêuticos qualificados sob supervisão médica criteriosa.
            </p>
          </div>

          {/* Grid of 6 white cards requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div 
                key={t.id}
                className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 pb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      {t.icon}
                    </div>
                    <div>
                      <h3 className="font-accent font-bold text-slate-900 text-base leading-tight">
                        {t.title}
                      </h3>
                      <p className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase font-sans mt-0.5">
                        {t.summary}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setBookingTreatment(t.title);
                    setIsModalOpen(true);
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-white border border-emerald-100 hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Agendar {t.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADDITIONAL SECTION REQUIRED IN MOCKUP: COMO FUNCIONA SECTION */}
      <section id="como-funciona" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider font-accent">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Passo a Passo Simplificado
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-indigo-950 tracking-tight font-black">
              Como Funciona
            </h2>
            <p className="text-slate-550 text-sm md:text-base leading-relaxed mt-3 max-w-2xl font-light">
              Sua jornada de saúde integrativa estruturada em etapas claras de segurança e cuidado integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10">
            {/* Step 1 */}
            <div className="relative text-center p-5 group">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-accent font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                01
              </div>
              <h3 className="font-accent font-bold text-slate-800 text-base mb-2">Primeiro Contato</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Agende facilmente através de nosso pré-cadastro ou ligando e agendando via WhatsApp com nossa equipe.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center p-5 group">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-accent font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                02
              </div>
              <h3 className="font-accent font-bold text-slate-800 text-base mb-2">Exames Funcionais</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Para que sua consulta seja totalmente assertiva, personalizada e profunda, você realiza uma avaliação tecnológica minuciosa antes mesmo de entrar no consultório. Esse mapeamento inicial permite que nossa equipe compreenda a fundo a sua fisiologia, investigue a raiz dos sintomas e otimize o seu tempo com o médico.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center p-5 group">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-accent font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                03
              </div>
              <h3 className="font-accent font-bold text-slate-800 text-base mb-2">Consulta Avançada</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Consulta clínica integrativa focando em seu histórico clínico e alinhamento de condutas multidisciplinares.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center p-5 group">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-accent font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                04
              </div>
              <h3 className="font-accent font-bold text-slate-800 text-base mb-2">Início das Terapias</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Início do cronograma terapêutico individualizado (como Soroterapia ou Equilíbrio Bioidêntico) em nosso espaço acolhedor.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-md transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Iniciar Minha Jornada de Saúde</span>
            </button>
          </div>

        </div>
      </section>

      {/* PEQUENAS E PERGUNTAS FREQUENTES (FAQ) */}
      <section id="faq" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Section heading text matching spec */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider font-accent">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Respostas Práticas
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-indigo-950 tracking-tight font-black">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-3 max-w-xl">
              Separamos as perguntas mais comuns para te ajudar mais rápido. Escolha sua dúvida:
            </p>
          </div>

          {/* Accordion List Container */}
          <div className="space-y-3.5 max-w-3xl mx-auto">
            {faqData.map((f, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-slate-150/80 rounded-r-xl overflow-hidden shadow-sm transition-all duration-300 faq-left-border"
                >
                  <button
                    id={`faq_toggle_${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-accent font-bold text-slate-900 text-sm sm:text-[15px] hover:bg-slate-50/80 transition-colors focus:outline-none animate-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base" role="img" aria-hidden="true">{f.icon}</span>
                      <span>{f.question}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-5 sm:px-6 py-4 bg-slate-50/30 text-slate-600 text-xs sm:text-sm font-sans font-light whitespace-pre-line leading-relaxed tracking-normal">
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* RODAPÉ (FOOTER) & COMPONENTE CONTATO */}
      <footer id="contato" className="bg-slate-950 text-white pt-16 pb-8 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 pb-14 border-b border-slate-800">
            
            {/* Left Column Description and Contacts matching user specifications */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              
              {/* Logo block with official Allegrum.png */}
              <div className="bg-white/95 px-4 py-2.5 rounded-xl inline-flex items-center justify-center shadow-md shadow-slate-950/20 max-w-[210px]">
                <img 
                  src={allegrumLogo} 
                  alt="Allegrum Vivi - Medicina Integrada Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                Oferecendo equilíbrio, rejuvenescimento celular, performance metabólica e reposição cuidadosa na Zona Leste mais nobre de São Paulo. Visite-nos e agende sua avaliação.
              </p>

              {/* Specific info required by physical design in Brazil */}
              <div className="space-y-4 pt-2 w-full text-xs sm:text-sm">
                
                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-bold uppercase text-[10px] tracking-wider leading-none mb-1">Endereço</h4>
                    <p className="text-slate-400 font-sans font-light">
                      Rua Urupas, 50 - Vila Gomes Cardim - São Paulo/SP - CEP: 03321-010.
                    </p>
                  </div>
                </div>

                {/* Telefone Fixo */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-bold uppercase text-[10px] tracking-wider leading-none mb-1">Telefone Fixo</h4>
                    <p className="text-slate-400 font-sans font-light hover:text-white transition-colors">
                      (11) 2296-0132
                    </p>
                  </div>
                </div>

                {/* Telefone WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-bold uppercase text-[10px] tracking-wider leading-none mb-1">WhatsApp de Agendamentos</h4>
                    <p 
                      className="text-slate-400 font-semibold cursor-pointer hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                      onClick={() => handleWhatsAppRedirect()}
                    >
                      (11) 2296-0132 <span className="text-[10px] text-emerald-500 font-normal underline">(Iniciar conversa)</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Social networks specific required info */}
              <div className="flex items-center gap-3.5 pt-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Embedded Map representation matching requirements */}
            <div className="lg:col-span-7 flex flex-col justify-start space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-accent font-bold text-xs tracking-widest uppercase text-slate-400">
                  Localização no Google Maps
                </h4>
                <span className="text-[10px] text-emerald-400 font-sans tracking-wide">Fácil estacionamento no local</span>
              </div>
              
              {/* Google Maps Real Iframe */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 text-slate-400">
                <iframe 
                  id="google_maps_iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.876356770543!2d-46.56847842371994!3d-23.536968760665673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e6f39cdbbbd%3A0xe54e60b1fe50d1bb!2sRua%20Urupas%2C%2050%20-%20Vila%20Gomes%20Cardim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003321-010!5e0!3m2!1spt-BR!2sbr!4v1717512345678!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Allegrum Vivi - Medicina Integrada"
                  className="absolute inset-0 w-full h-full grayscale filter contrast-[1.1]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-slate-400 bg-slate-900/50 p-3.5 border border-slate-800 rounded-xl">
                <span>📍 Referência: Esquina com Rua Tuiuti, próximo ao Metrô Tatuapé.</span>
                <a 
                  href="https://maps.app.goo.gl/3q2E5e6f39cdbbbd" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-350 font-medium underline flex items-center gap-1 shrink-0"
                >
                  Abrir no Waze / Maps <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Copyright notice at the bottom with slim dividers */}
          <div className="mt-12 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans tracking-normal">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Allegrum Vivi - Medicina Integrada. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:gap-6 flex-wrap justify-center text-slate-600">
              <span>CRM/SP Diretoria Médica: Dr. Rubens Cascapera Junior - CRM-SP 41749</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" /> Site 100% Protegido
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP CHAT INITIALIZER (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Floating Speech Banner, animates subtly on start */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="bg-white text-slate-800 border border-emerald-100 rounded-2xl py-2 px-4 shadow-xl text-teal-900/90 text-[11px] sm:text-xs font-semibold leading-normal flex items-center gap-2 pointer-events-auto cursor-pointer select-none hover:bg-slate-50 transition-colors border-l-4 border-l-emerald-500 shadow-emerald-950/5"
          onClick={() => handleWhatsAppRedirect()}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Fale Conosco agora! Olá Dr. Rubens e Dra. Joely! 💬</span>
        </motion.div>

        {/* Real Main Animated WhatsApp Button */}
        <motion.button
          id="floating_whatsapp_trigger"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          className="pointer-events-auto p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-205 group hover:rotate-6 shadow-emerald-500/20"
          onClick={() => handleWhatsAppRedirect()}
          aria-label="Chamar no WhatsApp"
        >
          {/* Custom SVG WhatsApp Logo for premium clean pixel-perfection */}
          <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847a9.757 9.757 0 0 0-2.887-6.959A9.835 9.835 0 0 0 12.008 1.9c-5.442 0-9.868 4.414-9.872 9.848-.001 1.73.473 3.418 1.374 4.896L2.39 21.053l4.257-1.119zM17.487 14.34c-.302-.151-1.785-.882-2.057-.981-.273-.099-.471-.148-.669.151-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.072-1.011-.507-1.722-.888-2.39-2.032-.178-.304-.178-.146.05-.389.206-.219.467-.545.545-.719.078-.174.039-.323-.02-.473-.058-.151-.471-1.139-.645-1.562-.17-.41-.357-.354-.471-.354-.109-.001-.235-.001-.36-.001-.125 0-.327.047-.497.233-.17.186-.649.633-.649 1.543 0 .911.662 1.79.754 1.912.093.123 1.3 1.984 3.151 2.784.44.19 1.016.388 1.516.347.36-.03.73-.23.864-.471.134-.241.134-.447.094-.49-.04-.043-.146-.07-.447-.221z"/>
          </svg>
        </motion.button>
      </div>

      {/* DETAILED APPOINTMENT BOOKING FUNNEL MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 z-10"
            >
              <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 px-2.5 bg-emerald-500 rounded-lg text-[10px] font-extrabold font-display leading-normal tracking-wider uppercase">Pré-Agendamento</span>
                  <Award className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <h3 className="font-display font-extrabold text-[#ffffff] text-xl tracking-tight mt-0.5">
                  Agende sua Consulta
                </h3>
                <p className="text-white/80 text-xs font-light font-sans mt-1">
                  Insira seus dados para iniciarmos o preenchimento do seu prontuário integrativo direto via WhatsApp.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="p-6 md:p-7 space-y-4 font-sans">
                
                {/* Nome Completo */}
                <div>
                  <label htmlFor="booking_name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="booking_name"
                    type="text"
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Ex: Rubens da Silva Cascapera"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all font-light"
                  />
                </div>

                {/* WhatsApp de Contato */}
                <div>
                  <label htmlFor="booking_phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    WhatsApp de Contato (com DDD) *
                  </label>
                  <input
                    id="booking_phone"
                    type="tel"
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all font-light"
                  />
                </div>

                {/* Tratamento / Consulta Escolhida */}
                <div>
                  <label htmlFor="booking_treatment" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Selecione o Serviço ou Tratamento
                  </label>
                  <select
                    id="booking_treatment"
                    value={bookingTreatment}
                    onChange={(e) => setBookingTreatment(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all cursor-pointer font-light"
                  >
                    <option value="Consulta Médica Integrativa">Consulta Geral / Planejamento Integrativo</option>
                    <option value="Soroterapia (Imunidade / Nutrientes)">Soroterapia (Imunidade/Nutrientes)</option>
                    <option value="Reposição Hormonal Bioidêntica">Reposição Hormonal Bioidêntica</option>
                    <option value="Detox Iônico (Celular / Spa dos Pés)">Detox Iônico (Spa Podal Celular)</option>
                    <option value="Suplementação EV e IM (Vias Injetáveis)">Suplementação Endovenosa & Intramuscular</option>
                    <option value="Cromoterapia Integrativa">Cromoterapia Integrativa</option>
                    <option value="Terapêutica Regenerativa de Plasma">Terapêutica de Plasma Avançado</option>
                  </select>
                </div>

                {/* Preferência de Data e Hora */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking_date" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Data Preferencial
                    </label>
                    <input
                      id="booking_date"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all cursor-pointer font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking_time" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Horário Preferencial
                    </label>
                    <input
                      id="booking_time"
                      type="time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all cursor-pointer font-sans"
                    />
                  </div>
                </div>

                {/* Submitting buttons action */}
                <div className="pt-4 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-100"
                  >
                    {/* SVG logo de WhatsApp */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.487 14.34c-.302-.151-1.785-.882-2.057-.981-.273-.099-.471-.148-.669.151-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.072-1.011-.507-1.722-.888-2.39-2.032-.178-.304-.178-.146.05-.389.206-.219.467-.545.545-.719.078-.174.039-.323-.02-.473-.058-.151-.471-1.139-.645-1.562-.17-.41-.357-.354-.471-.354-.109-.001-.235-.001-.36-.001-.125 0-.327.047-.497.233-.17.186-.649.633-.649 1.543 0 .911.662 1.79.754 1.912.093.123 1.3 1.984 3.151 2.784.44.19 1.016.388 1.516.347.36-.03.73-.23.864-.471.134-.241.134-.447.094-.49-.04-.043-.146-.07-.447-.221z"/>
                    </svg>
                    <span>Prosseguir para Confirmação no WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center leading-none mt-1">
                    🔒 Criptografado de ponta a ponta. Respeitamos totalmente suas normas de privacidade e sigilo clínico em conformidade com a LGPD e o Código de Ética Médica.
                  </p>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
