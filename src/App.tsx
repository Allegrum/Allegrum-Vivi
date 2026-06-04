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
  Lock,
  Brain,
  Dna
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Imagens geradas de alta qualidade do projeto
const drRubensPhoto = "/src/assets/images/Rubens.png";
const draJoelyPhoto = "/src/assets/images/Joely.png";
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
  const [activeTreatmentDetails, setActiveTreatmentDetails] = useState<any | null>(null);
  
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
      id: "reposicao_hormonal",
      title: "Reposição Hormonal",
      summary: "Balanço bioidêntico",
      desc: "Adequação metabólica focada no restabelecimento do equilíbrio endocrinológico através de hormônios homólogos à fisiologia interna humana, assegurando segurança no processo e resgatando qualidade de sono, libido e cognição.",
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "A reposição hormonal, quando conduzida com rigor clínico, é uma ferramenta poderosa para restaurar a qualidade de vida, proteger a saúde óssea e cardiovascular e equilibrar o metabolismo. No entanto, ela não é uma \"receita de bolo\". Cada organismo exige uma estratégia única, baseada em exames detalhados, histórico familiar e acompanhamento contínuo.\n\nAqui está um panorama de como a medicina aborda a terapia de reposição hormonal (TRH), com foco em formulações manipuladas, cuidados com a tireoide e segurança sistêmica.",
        sections: [
          {
            title: "Fórmulas Manipuladas e Hormônios \"Bioidênticos\"",
            paragraphs: [
              "O uso de hormônios manipulados permite que o médico personalize exatamente a dose e a via de administração para a necessidade de cada paciente, em vez de depender apenas das dosagens comerciais fixas das farmácias convencionais.",
              "Personalização extrema: Permite ajustes finos (como frações de miligramas de testosterona, estriol ou progesterona) e a escolha da base ideal (géis transdérmicos, cremes vaginais, pastilhas sublinguais).",
              "Estrutura molecular: Os chamados hormônios isomoleculares ou bioidênticos possuem a estrutura química exata dos produzidos pelo corpo humano. Isso facilita o reconhecimento celular e tende a reduzir os efeitos colaterais frequentemente associados a hormônios sintéticos.",
              "O rigor necessário: Sociedades médicas alertam que fórmulas manipuladas exigem farmácias de manipulação de extrema confiança e certificação. Se o veículo (o creme ou gel base) não for de alta tecnologia, a absorção do hormônio será irregular, o que pode deixar o paciente desprotegido ou causar picos hormonais indesejados no sangue."
            ]
          },
          {
            title: "A Tireoide: O Maestro do Metabolismo",
            paragraphs: [
              "A reposição de hormônios sexuais (estrogênio, progesterona, testosterona) nunca deve ser feita isoladamente sem avaliar a glândula tireoide. Os eixos hormonais estão profundamente interligados.",
              "Sintomas sobrepostos: A fadiga crônica, o ganho de peso, a queda de cabelo e a \"névoa mental\" da menopausa ou andropausa são quase idênticos aos sintomas do hipotireoidismo. Repor estrogênio ou testosterona sem tratar uma tireoide lenta não resolverá o cansaço.",
              "Interação medicamentosa: Se você já faz uso de levotiroxina (remédio para tireoide), iniciar a reposição de estrogênio (especialmente por via oral) aumenta a produção de uma proteína chamada TBG. Essa proteína se liga ao hormônio tireoidiano e o inativa, o que frequentemente exige que o médico aumente a dose da levotiroxina.",
              "Monitoramento integrado: Um protocolo seguro exige a avaliação de um painel tireoidiano completo (TSH, T4 Livre, T3 Livre e anticorpos) antes e durante a terapia hormonal para garantir que a tireoide não fique sobrecarregada."
            ]
          },
          {
            title: "Demais Elementos Críticos na Reposição",
            paragraphs: [
              "Para que o tratamento seja seguro a longo prazo, o médico precisa gerenciar ativamente outros sistemas do corpo e sincronizar as intervenções com o melhor momento biológico individual.",
              "A Janela de Oportunidade: A terapia hormonal traz benefícios cardiovasculares e neurológicos protetores quando iniciada precocemente, geralmente nos primeiros 10 anos após a menopausa (ou antes dos 60 anos). Iniciar a TRH muito tardiamente, quando já existem placas de gordura nas artérias, pode paradoxalmente aumentar o risco de eventos cardiovasculares."
            ]
          },
          {
            title: "Proteção e Preservação Sistêmica",
            paragraphs: [
              "Proteção do Útero e Mamas: Mulheres que possuem útero e recebem estrogênio precisam obrigatoriamente receber progesterona junto. O estrogênio isolado estimula o endométrio (camada interna do útero), e a progesterona é o freio natural que impede esse espessamento e zera o risco de câncer endometrial. Além disso, exames de imagem (mamografia e ultrassom pélvico) são pré-requisitos inegociáveis para liberar o tratamento.",
              "Preservação Óssea: O estrogênio e a testosterona são grandes defensores da arquitetura óssea. A reposição inibe a atividade das células que destroem o osso, prevenindo a osteoporose e reduzindo drasticamente o risco de fraturas graves na terceira idade."
            ]
          }
        ],
        table: {
          title: "Vias de Administração e Seus Impactos Fisiológicos:",
          headers: ["Via de Administração", "Passagem pelo Fígado", "Risco de Trombose", "Uso Mais Comum"],
          rows: [
            ["Transdérmica (Gel/Adesivo)", "Evita a primeira passagem hepática", "Baixíssimo", "Estrogênio e Testosterona"],
            ["Oral (Cápsulas)", "Alta metabolização hepática", "Moderado a Alto", "Progesterona micronizada"]
          ]
        },
        precautions: [
          "Avaliação de Contraindicações: Nenhuma reposição hormonal é isenta de riscos e ela não é indicada para todos. Histórico pessoal de câncer de mama, trombose venosa profunda ou doença hepática ativa grave são contraindicações formais para terapias sistêmicas com estrogênio.",
          "Direcionamento Clínico: A reposição ideal é aquela em que o paciente relata melhora substancial na qualidade de vida, confirmada por exames de sangue que mostram os hormônios em níveis fisiológicos de uma pessoa adulta saudável — sem excessos e com foco na prevenção."
        ]
      }
    },
    {
      id: "detox_ionico",
      title: "Detox Iônico",
      summary: "Limpeza celular para circulação",
      desc: "Terapia de purificação orgânica profunda através de ionização de hidromassagem podal externa (spa dos pés medicinal), estimulando a liberação sistêmica de toxinas, metais pesados e otimizando a circulação microvascular.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "O Detox Iônico através dos pés é um método de terapia não invasivo e indolor, que realiza uma ação revigorante e relaxante logo após a primeira sessão. Atualmente, a aplicação iônica tornou-se um importante instrumento terapêutico complementar com o intuito de compor com qualquer outro tratamento. Ele tem a finalidade de promover o equilíbrio bioenergético e estimular as funções naturais de desintoxicação do organismo.",
        howItWorks: "Esta tecnologia, de alta consolidação nos EUA e Europa, opera por meio de milhares de poros existentes em nossos pés. Com o auxílio do equipamento de emissão eletrolítica e seus eletrodos de cobre e aço de alta pureza, estimula-se a eliminação transdérmica de impurezas orgânicas, radicais livres, resíduos agrotóxicos e metabólitos inflamatórios.\n\nO tratamento promove uma verdadeira depuração dos órgãos vitais e ajuda no rebalanceamento do pH sanguíneo, tornando o meio humoral mais alcalino e propício para o fortalecimento imunológico e regenerativo.",
        benefits: [
          "Desintoxicação profunda e purificação do organismo, auxiliando fígado, intestinos e rins.",
          "Auxilia efetivamente na eliminação e redução de metais pesados tóxicos do corpo (como alumínio, chumbo e cobre).",
          "Promove estabilidade e reequilíbrio do pH corporal, facilitando a regeneração celular.",
          "Fortalecimento completo do sistema imunológico através do expurgo de toxoresíduos.",
          "Melhora perceptível na circulação sanguínea e fluxo linfático corporal.",
          "Diminuição expressiva dos níveis gerais de estresse, episódios de ansiedade e insônia recorrente.",
          "Auxiliar metabólico em dietas de emagrecimento por acelerar o metabolismo celular básico.",
          "Redução e alívio de dores de cabeça constantes, enxaquecas, além de atenuar os sintomas associados à menopausa.",
          "Reduz significativamente a retenção de líquidos nocivos e edemas nos membros inferiores.",
          "Recuperação linfática que diminui problemas cutâneos (p. ex., acnes e marcas sob os olhos).",
          "Auxilia como terapia complementar para alívio no tratamento de artrite, artrose e reumatismo."
        ],
        colors: [
          {
            name: "Laranja",
            bgClass: "bg-orange-500",
            textClass: "text-orange-700",
            borderClass: "border-orange-100",
            lightBg: "bg-orange-50",
            desc: "Indica a desintoxicação profunda e liberação de toxinas acumuladas nas articulações e tecidos conectivos.",
            chakra: "Articulações e Sistema Esquelético"
          },
          {
            name: "Marrom",
            bgClass: "bg-amber-800",
            textClass: "text-amber-900",
            borderClass: "border-amber-150",
            lightBg: "bg-stone-50",
            desc: "Identifica a desintoxicação de resíduos hepáticos, gorduras celulares e resíduos inalados (como poluição acumulada ou tabaco).",
            chakra: "Hepático e Purificação de Vias"
          },
          {
            name: "Verde",
            bgClass: "bg-emerald-500",
            textClass: "text-emerald-700",
            borderClass: "border-emerald-100",
            lightBg: "bg-emerald-50",
            desc: "Reflete a filtragem e equilíbrio das funções ligadas aos canais da vesícula biliar e fígado.",
            chakra: "Biliar e Sistema Gastrointestinal"
          }
        ]
      }
    },
    {
      id: "suplementacao_ev_im",
      title: "Suplementação EV e IM",
      summary: "Nutrientes intravenosos e intramusculares",
      desc: "Protocolos injetáveis individualizados para reposição celular de coenzimas, minerais e imunomoduladores. Indicados para fadiga persistente, destoxificação crônica, melhora de foco e emagrecimento biológico otimizado.",
      icon: <Syringe className="w-6 h-6 text-teal-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "As suplementações injetáveis ganharam muita popularidade nos últimos anos, saindo dos hospitais diretamente para as clínicas de bem-estar. O grande diferencial dessas terapias é pular o sistema digestivo.\n\nQuando você toma uma vitamina em cápsula, ela precisa passar pelo estômago, fígado e intestino. Dependendo da saúde do seu trato gastrointestinal, uma grande parte dos nutrientes pode ser perdida antes mesmo de chegar à corrente sanguínea. As vias injetáveis resolvem esse problema entregando os nutrientes diretamente onde o corpo precisa. Existem duas formas principais de fazer isso: a intravenosa (soroterapia) e a intramuscular.",
        sections: [
          {
            title: "1. Terapia Intravenosa (Soroterapia)",
            paragraphs: [
              "A soroterapia envolve a administração de um \"pool\" (mistura) de vitaminas, minerais, antioxidantes e aminoácidos diluídos em soro, diretamente na veia.",
              "Como funciona: Um acesso venoso é colocado no braço do paciente, e o soro goteja lentamente ao longo de 30 a 60 minutos.",
              "Velocidade: Como o líquido entra diretamente na corrente sanguínea, a absorção é de 100% e imediata. As células recebem os nutrientes na mesma hora.",
              "Vantagem principal: Permite a infusão de grandes volumes de nutrientes de uma só vez, além de promover uma hidratação celular profunda instantânea. É muito usada para \"boosts\" de imunidade, recuperação rápida (como pós-provas esportivas intensas) e reposição de ferro."
            ]
          },
          {
            title: "2. Aplicação Intramuscular (IM)",
            paragraphs: [
              "A injeção intramuscular entrega os nutrientes diretamente no fundo do tecido muscular (geralmente no glúteo ou no deltoide, o músculo do ombro).",
              "Como funciona: Uma injeção rápida e direta. Não exige o tempo de gotejamento da soroterapia.",
              "Velocidade: O músculo é altamente vascularizado, mas atua como um \"reservatório\". O nutriente forma um depósito no local e é absorvido gradualmente pela corrente sanguínea ao longo de dias ou até semanas.",
              "Vantagem principal: Excelente para tratamentos de manutenção e ação prolongada. É o método padrão para repor Vitamina B12 e Vitamina D, garantindo que o corpo tenha um suprimento constante do nutriente ao longo do tempo."
            ]
          }
        ],
        table: {
          title: "Qual a diferença na prática?",
          headers: ["Característica", "Soroterapia (Intravenosa)", "Injeção Intramuscular (IM)"],
          rows: [
            ["Via de Acesso", "Direto na veia", "Fundo do tecido muscular"],
            ["Tempo de Sessão", "30 a 60 minutos", "Menos de 1 minuto"],
            ["Absorção", "Imediata e total", "Lenta, gradual e contínua"],
            ["Volume suportado", "Alto (estável de 100ml a 500ml)", "Baixo (geralmente 1ml a 4ml)"],
            ["Uso ideal", "Resposta rápida, hidratação profunda, coquetéis complexos", "Reposição de longo prazo (ex: B12, Vitamina D)"]
          ]
        },
        precautions: [
          "Avaliação Médica: Nunca faça soroterapia \"às cegas\". É necessário passar em consulta e fazer exames prévios para identificar o que realmente está faltando.",
          "Ambiente Clínico: Procedimentos injetáveis devem ser realizados por enfermeiros ou médicos capacitados, em ambiente estéril e com equipamentos de emergência disponíveis."
        ]
      }
    },
    {
      id: "cromoterapia",
      title: "Cromoterapia",
      summary: "Energia da cor",
      desc: "Utilização estruturada de comprimentos de onda de espectros luminosos coloridos dirigidos sobre centros biológicos energéticos para modular oscilações de humor, aliviar dores, reequilibrar sistemas nervosos e catalisar cicatrizações.",
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "A cromoterapia é um tipo de tratamento que consiste na utilização das cores para curar doenças e restaurar o equilíbrio físico e emocional do paciente. A palavra tem origem no grego \"khrôma\" que significa \"cor\".",
        history: "Historiadores afirmam que no Antigo Egito a cor — através dos raios solares — já era usada para o benefício do ser humano. Mais tarde, no século XVIII, o cientista alemão Johann Wolfgang Von Goethe conduziu uma pesquisa exaustiva a respeito das cores, concluindo que o vermelho estimula, o azul suaviza, o amarelo causa alegria e o verde é relaxante. Contudo, a cromoterapia só chegou ao Ocidente no século XIX. Nos dias de hoje, a terapia é realizada com lâmpadas específicas direcionadas aos campos de energia e pele do corpo.",
        howItWorks: "Normalmente, um suporte com uma lâmpada calibrada de 25 watts é usado no tratamento, sendo colocado a cerca de 5 centímetros da pele e atuando durante aproximadamente 3 minutos em pontos específicos (frequentemente ligados aos pontos de acupuntura ou chakras do corpo, que influenciam nossa regulação de humor, circulação e sistema autônomo).",
        colors: [
          {
            name: "Vermelho",
            bgClass: "bg-red-500",
            textClass: "text-red-700",
            borderClass: "border-red-100",
            lightBg: "bg-red-50",
            desc: "É uma cor poderosa e estimulante. Desperta a vitalidade, ativa a circulação sanguínea e estimula o sistema nervoso.",
            chakra: "Básico (baixo ventre, comanda a coluna vertebral e energia física)"
          },
          {
            name: "Laranja",
            bgClass: "bg-orange-500",
            textClass: "text-orange-700",
            borderClass: "border-orange-100",
            lightBg: "bg-orange-50",
            desc: "Uma cor alegre, restauradora e antidepressiva. Rejuvenesce os tecidos e aperfeiçoa o metabolismo e sistema digestivo.",
            chakra: "Umbilical (comanda as ações criativas, sexuais e decisão pessoal)"
          },
          {
            name: "Amarelo",
            bgClass: "bg-amber-400",
            textClass: "text-amber-800",
            borderClass: "border-amber-100",
            lightBg: "bg-amber-50",
            desc: "Inspiradora e brilhante. Desperta o dinamismo, estimula a capacidade de expressão e age sobre os tecidos internos.",
            chakra: "Plexo Solar (rege o estômago, o poder pessoal e satisfação)"
          },
          {
            name: "Verde",
            bgClass: "bg-emerald-500",
            textClass: "text-emerald-700",
            borderClass: "border-emerald-100",
            lightBg: "bg-emerald-50",
            desc: "A cor da natureza, da harmonia, do relaxamento e da saúde física global.",
            chakra: "Cardíaco (comanda o coração, os sentimentos e o sistema circulatório)"
          },
          {
            name: "Azul",
            bgClass: "bg-blue-500",
            textClass: "text-blue-700",
            borderClass: "border-blue-100",
            lightBg: "bg-blue-50",
            desc: "Altamente relaxante, indutora de paz e serenidade. Tem propriedades analgésicas e desacelera o ritmo estressante.",
            chakra: "Laríngeo (atua no sistema respiratório e facilita a expressão verbal)"
          },
          {
            name: "Índigo",
            bgClass: "bg-indigo-600",
            textClass: "text-indigo-700",
            borderClass: "border-indigo-100",
            lightBg: "bg-indigo-50",
            desc: "Símbolo de profunda intuição, sabedoria e compreensão. Tem excelentes efeitos de purificação e tranquilidade.",
            chakra: "Frontal / Terceiro Olho (localizado na testa, rege o sistema nervoso central)"
          },
          {
            name: "Violeta",
            bgClass: "bg-purple-600",
            textClass: "text-purple-750",
            borderClass: "border-purple-100",
            lightBg: "bg-purple-50",
            desc: "Promove estabilidade mental, concentração profunda e paz de espírito. Excelente para acalmar dores musculares e tensões.",
            chakra: "Coronário (topo da cabeça, integra foco, clareza e conexão mental)"
          }
        ]
      }
    },
    {
      id: "neuromodulacao",
      title: "Neuromodulação",
      summary: "Tecnologia e sistema nervoso",
      desc: "Tratamento de tecnologia médica avançada aplicando campo eletromagnético para modular o Sistema Nervoso Central e Periférico em casos de Parkinson, dores crônicas, depressão, ansiedade e zumbidos.",
      icon: <Brain className="w-6 h-6 text-teal-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "A Neuromodulação é um tratamento médico com tecnologia avançada que consiste em aplicar um campo eletromagnético para modificar e modular o Sistema Nervoso Central (cérebro e medula) e/ou o Sistema Nervoso Periférico (nervos periféricos) nas patologias como Doença de Parkinson, depressão, esquizofrenia, bipolaridade, Tinnitus (zumbido), Distúrbio Cognitivo, AVC, dor crônica, epilepsia, dependência química, ansiedade, distúrbios do movimento, tremor essencial, distonia, Transtorno obsessivo compulsivo (TOC), entre outras, atuando na regulação da área neuronal estimulada, inibindo ou estimulando seus neurotransmissores responsáveis por alguma função ou comportamento.",
        benefits: [
          "Opção não medicamentosa para tratamento a longo prazo de condições pré-existentes ou crônicas.",
          "Importante grau de controle terapêutico pelo médico, não causando danos ao sistema nervoso.",
          "Na técnica não invasiva praticamente isento de efeitos colaterais, e nas técnicas invasivas os efeitos colaterais são muito menores quando comparado aos procedimentos cirúrgicos padrões.",
          "As técnicas não-invasivas não geram prejuízo cognitivo, pelo contrário, aumenta as conexões neuronais.",
          "Não é preciso interromper o tratamento medicamentoso quando se inicia a neuromodulação.",
          "O tratamento é definido individualmente e personalizado para cada paciente, ou seja, o ajuste de cada técnica é personalizado para cada paciente.",
          "Os aparelhos de neuromodulação podem ser reajustados de acordo com a necessidade de cada paciente (ex: aumentando a intensidade, frequência e etc)."
        ]
      }
    },
    {
      id: "testes_geneticos",
      title: "Testes Genéticos e Metabólicos",
      summary: "Mapeamento biológico de precisão",
      desc: "Análise avançada através de testes de nutrigenômica, perfil metabólico celular e mapeamento de microbiota intestinal para diagnóstico preventivo de alta precisão.",
      icon: <Dna className="w-6 h-6 text-teal-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "Na medicina tradicional, muitas vezes o tratamento começa apenas quando o sintoma aparece. Na medicina integrativa, nós acreditamos em um caminho diferente: agir antes que a doença se instale, tratando você de forma única e olhando para a verdadeira raiz da sua saúde.\n\nHoje, a ciência nos permite ir muito além das recomendações gerais de \"coma bem e faça exercícios\". Com o avanço da tecnologia, podemos ler o que o seu próprio corpo tem a dizer por meio de testes genéticos, nutrigenéticos, metabólicos e de microbiota.\n\nFazer esses exames não é apenas \"descobrir predisposições\" — é assumir o controle ativo da sua saúde para viver com mais energia, longevidade e qualidade.",
        howItWorks: "Cada teste é uma peça fundamental do seu quebra-cabeça biológico. Ao mapear o seu funcionamento interno, podemos criar uma estratégia de saúde exatamente sob medida para você.",
        sections: [
          {
            title: "1. Teste de Microbiota Intestinal (O seu \"Segundo Cérebro\")",
            paragraphs: [
              "O seu intestino é o lar de trilhões de bactérias que controlam desde a sua digestão até a sua imunidade e o seu humor. O teste de microbiota mapeia exatamente quais microrganismos habitam o seu trato gastrointestinal.",
              "Ação preventiva: Um intestino desequilibrado (disbiose) é a porta de entrada para inflamações crônicas, doenças autoimunes, ansiedade e ganho de peso inexplicável. Ao conhecer sua flora, podemos modular sua saúde intestinal com probióticos e alimentos específicos antes que o desequilíbrio gere uma cascata de doenças."
            ]
          },
          {
            title: "2. Teste Nutrigenético (A sua Dieta no DNA)",
            paragraphs: [
              "O que é um \"superalimento\" para uma pessoa pode causar inflamação em outra. A nutrigenética estuda como os seus genes interagem com os alimentos que você consome.",
              "Ação preventiva: Em vez de dietas genéricas, descobrimos como o seu corpo processa carboidratos, gorduras, vitaminas, cafeína e até a sua predisposição a intolerâncias (como glúten e lactose). Isso permite que nossa equipe prescreva uma alimentação que \"desliga\" genes associados a doenças e \"liga\" os genes da longevidade."
            ]
          },
          {
            title: "3. Teste Metabólico (A sua Usina de Energia)",
            paragraphs: [
              "Este exame avalia como as suas células estão trabalhando agora. Ele mede como o seu corpo produz energia, como ele se recupera do estresse oxidativo e qual é a eficiência das suas vias de desintoxicação (detox hepático).",
              "Ação preventiva: Identificamos gargalos no seu metabolismo que causam fadiga crônica, dificuldade de emagrecer, envelhecimento precoce e acúmulo de toxinas. Com esses dados, suplementamos exatamente os nutrientes que o seu corpo está tendo dificuldade de sintetizar ou absorver."
            ]
          }
        ],
        table: {
          title: "O Mapa da Sua Saúde Integrativa",
          headers: ["Tipo de Exame", "O que revela sobre você", "Principal Benefício Preventivo"],
          rows: [
            ["Microbiota Intestinal", "O perfil das bactérias boas e ruins do seu intestino.", "Previne inflamações, fortalece a imunidade e melhora a clareza mental."],
            ["Nutrigenético", "Como seus genes reagem aos alimentos e nutrientes.", "Direciona a alimentação perfeita para o seu DNA, evitando dietas frustrantes."],
            ["Metabólico", "Como suas células produzem energia e lidam com toxinas.", "Otimiza o metabolismo, previne doenças crônicas e combate a fadiga."]
          ]
        },
        benefits: [
          "Mapeamento genético e metabólico completo que põe fim ao método de tentativa e erro.",
          "Mapeamento com precisão ativa para adotar suplementos que seu corpo realmente absorve e necessita.",
          "Prevenção inteligente estimulada pela leitura genética antes que a doença se instale de fato.",
          "Construção de hábitos alimentares e estilo de vida que atuam de forma coordenada no seu DNA."
        ],
        precautions: [
          "Avaliação Médica: Os testes genéticos e metabólicos servem como ferramentas valiosas de orientação. Eles devem sempre ser interpretados no contexto de uma avaliação clínica integrativa detalhada.",
          "Preparo Técnico: Alguns exames metabólicos ou de fezes (microbiota) exigem dietas específicas ou restrições temporárias de suplementos antes da coleta. Peça orientação à equipe clínica."
        ]
      }
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

                {t.hasDetailedModal ? (
                  <div className="flex gap-2.5 mt-auto">
                    <button
                      onClick={() => setActiveTreatmentDetails(t)}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold tracking-wide transition-all border border-slate-200 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Saiba Mais
                    </button>
                    <button
                      onClick={() => {
                        setBookingTreatment(t.title);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Agendar</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setBookingTreatment(t.title);
                      setIsModalOpen(true);
                    }}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-white border border-emerald-100 hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Agendar {t.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
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
                Para que sua consulta seja totalmente assertiva, personalizada e profunda, você realiza uma avaliação tecnológica minuciosa antes mesmo de entrar no consultório.
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
                Início do cronograma terapêutico individualizado (como Suplementação EV/IM ou Equilíbrio Bioidêntico) em nosso espaço acolhedor.
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
                    <option value="Reposição Hormonal Bioidêntica">Reposição Hormonal Bioidêntica</option>
                    <option value="Detox Iônico (Celular / Spa dos Pés)">Detox Iônico (Spa Podal Celular)</option>
                    <option value="Suplementação EV e IM (Vias Injetáveis)">Suplementação Endovenosa & Intramuscular</option>
                    <option value="Cromoterapia Integrativa">Cromoterapia Integrativa</option>
                    <option value="Neuromodulação Tecnológica">Neuromodulação Tecnológica</option>
                    <option value="Testes Genéticos e Metabólicos">Testes Genéticos e Metabólicos</option>
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

      {/* DETAILED TREATMENT MODAL (E.G. NEUROMODULAÇÃO) */}
      <AnimatePresence>
        {activeTreatmentDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTreatmentDetails(null)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm z-40"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 z-50 my-8 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6 relative flex-shrink-0">
                <button
                  onClick={() => setActiveTreatmentDetails(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                    {activeTreatmentDetails.icon}
                  </div>
                  <div>
                    <span className="p-1 px-2.5 bg-emerald-500 rounded-lg text-[10px] font-extrabold font-display leading-normal tracking-wider uppercase">Tratamento Avançado</span>
                    <h3 className="font-display font-extrabold text-[#ffffff] text-2xl tracking-tight mt-1">
                      {activeTreatmentDetails.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 font-sans">
                {activeTreatmentDetails.longDesc && (
                  <>
                    {/* What is it? */}
                    <div>
                      <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                        O que é {activeTreatmentDetails.title}?
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-light whitespace-pre-line">
                        {activeTreatmentDetails.longDesc.whatIs}
                      </p>
                    </div>

                    {/* History */}
                    {activeTreatmentDetails.longDesc.history && (
                      <div>
                        <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                          História e Ciência
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                          {activeTreatmentDetails.longDesc.history}
                        </p>
                      </div>
                    )}

                    {/* How it works */}
                    {activeTreatmentDetails.longDesc.howItWorks && (
                      <div>
                        <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                          Como funciona a aplicação?
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                          {activeTreatmentDetails.longDesc.howItWorks}
                        </p>
                      </div>
                    )}

                    {/* Sections (detailed structural breakdown) */}
                    {activeTreatmentDetails.longDesc.sections && (
                      <div className="space-y-5">
                        {activeTreatmentDetails.longDesc.sections.map((sec: any, idx: number) => (
                          <div key={idx} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
                            <h5 className="text-sm font-bold text-teal-900 mb-2.5 flex items-center gap-2">
                              <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                              {sec.title}
                            </h5>
                            <div className="space-y-2">
                              {sec.paragraphs.map((p: string, pIdx: number) => {
                                const isBoldPrefix = p.includes(':');
                                if (isBoldPrefix) {
                                  const [prefix, rest] = p.split(/:(.*)/s);
                                  return (
                                    <p key={pIdx} className="text-slate-600 text-sm leading-relaxed font-light">
                                      <strong className="font-semibold text-slate-800">{prefix}:</strong>{rest}
                                    </p>
                                  );
                                }
                                return (
                                  <p key={pIdx} className="text-slate-600 text-sm leading-relaxed font-light">
                                    {p}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Comparison Table */}
                    {activeTreatmentDetails.longDesc.table && (
                      <div className="space-y-3">
                        {activeTreatmentDetails.longDesc.table.title && (
                          <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                            {activeTreatmentDetails.longDesc.table.title}
                          </h4>
                        )}
                        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                                {activeTreatmentDetails.longDesc.table.headers.map((h: string, idx: number) => (
                                  <th key={idx} className="p-3 font-semibold uppercase tracking-wider">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {activeTreatmentDetails.longDesc.table.rows.map((row: string[], rIdx: number) => (
                                <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                                  {row.map((cell: string, cIdx: number) => (
                                    <td key={cIdx} className={`p-3 text-slate-600 ${cIdx === 0 ? 'font-medium text-teal-950 bg-slate-50/30' : 'font-light'}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Benefits List */}
                    {activeTreatmentDetails.longDesc.benefits && (
                      <div>
                        <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                          Benefícios da {activeTreatmentDetails.title}:
                        </h4>
                        <ul className="space-y-3.5">
                          {activeTreatmentDetails.longDesc.benefits.map((benefit: string, idx: number) => (
                            <li key={idx} className="flex gap-3 items-start text-sm text-slate-600 font-light leading-relaxed">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold text-xs flex items-center justify-center mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Precautions (Cuidados) */}
                    {Array.isArray(activeTreatmentDetails.longDesc.precautions) && (
                      <div className="bg-amber-50/45 border border-amber-100 p-5 rounded-2xl space-y-3">
                        <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-amber-500 rounded-full"></span>
                          Cuidados Essenciais
                        </h4>
                        <ul className="space-y-3">
                          {activeTreatmentDetails.longDesc.precautions.map((prec: string, idx: number) => {
                            const isBoldPrefix = prec.includes(':');
                            if (isBoldPrefix) {
                              const [title, desc] = prec.split(/:(.*)/s);
                              return (
                                <li key={idx} className="flex gap-3 items-start text-xs text-amber-900 font-light leading-relaxed">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <span>
                                    <strong className="font-semibold text-amber-950">{title}:</strong>{desc}
                                  </span>
                                </li>
                              )
                            }
                            return (
                              <li key={idx} className="flex gap-3 items-start text-xs text-amber-900 font-light leading-relaxed">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center mt-0.5">
                                  {idx + 1}
                                </span>
                                <span>{prec}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Colors Guide */}
                    {activeTreatmentDetails.longDesc.colors && (
                      <div>
                        <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                          {activeTreatmentDetails.id === 'detox_ionico' ? 'Significado da Cor da Água / Desintoxicação:' : 'As Cores e seus Significados Terapêuticos:'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeTreatmentDetails.longDesc.colors.map((color: any, idx: number) => (
                            <div key={idx} className={`p-4 rounded-xl border ${color.borderClass} ${color.lightBg} transition-all duration-300 hover:shadow-sm flex flex-col justify-between`}>
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <div className={`w-5 h-5 rounded-full ${color.bgClass} shadow-inner shrink-0`} />
                                  <span className={`font-semibold text-sm ${color.textClass}`}>
                                    {color.name}
                                  </span>
                                </div>
                                <p className="text-slate-600 text-xs leading-relaxed font-light mb-3">
                                  {color.desc}
                                </p>
                              </div>
                              {color.chakra && (
                                <div className="text-[10px] text-slate-500 font-normal border-t border-slate-100 pt-2 shrink-0">
                                  <span className="font-bold text-teal-800 uppercase">Chakra:</span> {color.chakra}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-150 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={() => setActiveTreatmentDetails(null)}
                  className="flex-1 py-3 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-semibold rounded-xl text-sm transition-colors text-center cursor-pointer"
                >
                  Fechar Detalhes
                </button>
                <button
                  onClick={() => {
                    const treatmentName = activeTreatmentDetails.title;
                    setActiveTreatmentDetails(null);
                    setBookingTreatment(treatmentName);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-100 cursor-pointer"
                >
                  <span>Agendar Tratamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
