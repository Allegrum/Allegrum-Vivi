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
  Dna,
  Scale,
  HeartPulse,
  Flame,
  TrendingUp,
  ListChecks,
  BookOpen,
  Heart,
  Users,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Imagens geradas de alta qualidade do projeto
const drRubensPhoto = "/src/assets/images/Rubens_Final.png";
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
  
  // Exclusivos programs tab state
  const [activeProgramTab, setActiveProgramTab] = useState<'mentelivre' | 'neuroslim'>('mentelivre');
  
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
      id: "tratamentos_biofisicos",
      title: "Tratamentos Biofísicos e Integrativos",
      summary: "Tecnologia, biofrequências, ozônio e purificação",
      desc: "Protocolos modernos e não invasivos que aplicam campos eletromagnéticos, metaterapia NLS por biorressonância, ozônio medicinal, frequências de luz e ionização para modular o sistema nervoso, aliviar dores, identificar desarmonias e promover desintoxicação celular profunda.",
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "Os Tratamentos Biofísicos e Integrativos unem tecnologia médica de ponta, terapias baseadas em princípios físicos e modulações biológicas com ozônio para regular o sistema nervoso, otimizar a imunidade e promover purificação sistêmica. Este painel integra cinco grandes terapias: a Neuromodulação, a Ozonioterapia, a Cromoterapia, a Desintoxicação e a inovadora Metaterapia NLS, oferecendo uma abordagem sinérgica de alto impacto para o reequilíbrio celular e bem-estar geral.",
        sections: [
          {
            title: "1. Neuromodulação Tecnológica",
            paragraphs: [
              "A Neuromodulação é um tratamento de tecnologia médica avançada que aplica campos eletromagnéticos direcionados para modular e regular a atividade do Sistema Nervoso Central (cérebro e medula) e Periférico (nervos).",
              "Como atua: Ela ajuda a restabelecer as conexões e os neurotransmissores ideais em áreas do cérebro responsáveis pela regulação do humor, do movemento e da dor.",
              "Aplicações comuns: Indicado para depressão, ansiedade, dores crônicas, distúrbios de movimento (como Parkinson) e zumbidos no ouvido (tinnitus).",
              "Sem efeitos colaterais: É um método seguro, não invasivo e altamente personalizável para cada paciente."
            ]
          },
          {
            title: "2. Ozonioterapia Integrativa",
            paragraphs: [
              "A Ozonioterapia é um tratamento biológico e integrativo que utiliza uma mistura medicinal precisa de oxigênio e ozônio para otimizar a oxigenação tecidual, modular a inflamação e combater patógenos.",
              "Como atua: Ao entrar em contato com o organismo, o ozônio medicinal ativa vias antioxidantes vitais, aumenta a flexibilidade das hemácias (facilitando a microcirculação) e atua como um potente agente germicida (antiviral, antibacteriano e antifúngico).",
              "Aplicações comuns: Indicada para dores crônicas articulares ou musculares, modulação do sistema imune, suporte na cicatrização de feridas, combate ao estresse oxidativo e otimização da performance metabólica.",
              "Segurança clínica: O procedimento é realizado com dosagens exatas e calibradas sob rigoroso controle clínico, adaptado às necessidades individuais do paciente."
            ]
          },
          {
            title: "3. Metaterapia NLS (Biorressonância Quântica)",
            paragraphs: [
              "A Metaterapia NLS é uma tecnologia biofísica avançada e não invasiva que utiliza a análise de frequências eletromagnéticas para avaliar o estado de equilíbrio energético e vibracional de órgãos, tecidos e células.",
              "Como funciona: Através de sensores especializados de biorressonância, o sistema capta e analisa as frequências emitidas pelo corpo, identificando desvios e desarmonias antes mesmo que se manifestem como sintomas físicos. Em seguida, emite micro-impulsos de frequências corretivas (biofrequências saudáveis) para restaurar a harmonia celular e ativar a autocura.",
              "Aplicações clínicas: Excelente no manejo de dores crônicas (como fibromialgia, artrite e síndrome do intestino irritável), no suporte a desequilíbrios metabólicos e hormonais, regulação do sistema nervoso (ansiedade, estresse e distúrbios do sono) e medicina preventiva.",
              "Abordagem Integrativa: Atua em sintonia com os princípios da física quântica e da biofísica, estimulando a capacidade natural de autorregulação, regeneração celular e eliminação de toxinas do próprio organismo."
            ]
          },
          {
            title: "4. Cromoterapia Integrativa",
            paragraphs: [
              "A Cromoterapia utiliza as diferentes frequências e comprimentos de onda de espectros luminosos coloridos direcionados sobre centros biológicos energéticos do corpo.",
              "Equilíbrio de humor e dores: Cada espectro de cor atua de forma específica — o azul promove tranquilidade e tem efeito analgésico, o verde relaxa e harmoniza, o vermelho estimula a vitalidade e circulação, e o amarelo ativa a mente.",
              "Aplicação clínica: É realizada através de lâmpadas calibradas aplicadas sobre áreas estratégicas ou pontos de acupuntura para catalisar processos regenerativos e regular o sistema autônomo."
            ]
          },
          {
            title: "5. Desintoxicação (Spa Podal Celular)",
            paragraphs: [
              "A Desintoxicação é um tratamento de hidromassagem podal externa (spa dos pés medicinal) que utiliza emissão eletrolítica controlada para promover o equilíbrio bioenergético e celular.",
              "Como funciona: Através de eletrodos especiais na água e de milhares de poros presentes nos pés, cria-se um fluxo iônico que estimula a eliminação transdérmica de toxinas, impurezas orgânicas, resíduos inflamatórios e metais pesados (como chumbo e alumínio).",
              "Benefícios sistêmicos: Auxilia na melhora da circulação sanguínea, alívio de retenção de líquidos e cansaço nas pernas, além de restaurar o pH ideal e alcalino do corpo."
            ]
          }
        ],
        benefits: [
          "Mapeamento bioenergético completo e identificação de desvios frequenciais de saúde com a Metaterapia NLS.",
          "Neuromodulação do sistema nervoso central e periférico para alívio de estresse, ansiedade e dores crônicas.",
          "Aumento da oxigenação tecidual sistêmica e ativação de respostas antioxidantes endógenas através da Ozonioterapia.",
          "Potente ação germicida (antibacteriana, antiviral e antifúngica) e suporte ativo na modulação inflamatória e regeneração.",
          "Estímulo à cicatrização celular e regulação de humor através do espectro luminoso da cromoterapia.",
          "Eliminação transdérmica ativa de metais pesados, metabólitos inflamatórios e toxinas através da desintoxicação podal.",
          "Abordagens complementares, seguras e personalizadas para reativar o potencial vital e vibracional de autocura."
        ],
        precautions: [
          "Contraindicações da Neuromodulação: Dispositivos de neuromodulação (especialmente eletromagnéticos) não devem ser aplicados em pacientes portadores de marcapasso cardíaco ou outros implantes eletrônicos ativos.",
          "Contraindicações da Ozonioterapia: A Ozonioterapia é contraindicada de forma absoluta para pacientes portadores de deficiência da enzima G6PD (favismo) e hipertireoidismo descompensado, além de requerer avaliação médica minuciosa em gestantes, anemia grave ou hemorragias ativas.",
          "Contraindicações da Metaterapia NLS: Embora segura e não invasiva, não é recomendada durante a gravidez e lactação, e é contraindicada para portadores de marcapasso ou dispositivos eletrônicos implantados, além de requerer adiamento em infecções agudas ativas ou distúrbios psiquiátricos graves.",
          "Indicação da Desintoxicação: Embora segura e extremamente relaxante, a desintoxicação podal não é indicada para gestantes, portadores de marcapasso ou pessoas com feridas abertas nos pés.",
          "Acompanhamento Personalizado: Nossos tratamentos são conduzidos e parametrizados individualmente, garantindo as intensidades de estímulo e dosagens ideais para o seu biótipo e queixas."
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
        whatIs: "As suplementações injetáveis ganharam muita popularidade nos últimos anos, saindo dos hospitais diretamente para as clínicas de bem-estar. O grande diferencial dessas terapias é pular o sistema digestivo.\n\nQuando você toma uma vitamina em cápsula, ela precisa passar pelo estômago, fígado e intestino. Dependendo da saúde do seu trato gastrointestinal, uma grande parte dos nutrientes pode ser perdida antes mesmo de chegar à corrente sanguínea. As vias injetáveis resolvem esse problema entregando os nutrientes diretamente onde o corpo precisa. Existem duas formas principais de fazer isso: a intravenosa (Suplementação EV) e a intramuscular.",
        sections: [
          {
            title: "1. Terapia Intravenosa (Suplementação EV)",
            paragraphs: [
              "A Suplementação EV envolve a administração de um \"pool\" (mistura) de vitaminas, minerais, antioxidantes e aminoácidos diluídos em soro, diretamente na veia.",
              "Como funciona: Um acesso venoso é colocado no braço do paciente, e o soro goteja lentamente ao longo de 30 a 60 minutos.",
              "Velocidade: Como o líquido entra diretamente na corrente sanguínea, a absorção é de 100% e imediata. As células recebem os nutrientes na mesma hora.",
              "Vantagem principal: Permite a infusão de grandes volumes de nutrientes de uma só vez, além de promover uma hidratação celular profunda instantânea. É muito usada para \"boosts\" de imunidade, recuperação rápida (como pós-provas esportivas intensas) e reposição de ferro."
            ]
          },
          {
            title: "2. Aplicação Intramuscular (IM)",
            paragraphs: [
              "A injeção intramuscular entrega os nutrientes diretamente no fundo do tecido muscular (geralmente no glúteo ou no deltoide, o músculo do ombro).",
              "Como funciona: Uma injeção rápida e direta. Não exige o tempo de gotejamento da Suplementação EV.",
              "Velocidade: O músculo é altamente vascularizado, mas atua como um \"reservatório\". O nutriente forma um depósito no local e é absorvido gradualmente pela corrente sanguínea ao longo de dias ou até semanas.",
              "Vantagem principal: Excelente para tratamentos de manutenção e ação prolongada. É o método padrão para repor Vitamina B12 e Vitamina D, garantindo que o corpo tenha um suprimento constante do nutriente ao longo do tempo."
            ]
          }
        ],
        table: {
          title: "Qual a diferença na prática?",
          headers: ["Característica", "Suplementação EV (Intravenosa)", "Injeção Intramuscular (IM)"],
          rows: [
            ["Via de Acesso", "Direto na veia", "Fundo do tecido muscular"],
            ["Tempo de Sessão", "30 a 60 minutos", "Menos de 1 minuto"],
            ["Absorção", "Imediata e total", "Lenta, gradual e contínua"],
            ["Volume suportado", "Alto (estável de 100ml a 500ml)", "Baixo (geralmente 1ml a 4ml)"],
            ["Uso ideal", "Resposta rápida, hidratação profunda, coquetéis complexos", "Reposição de longo prazo (ex: B12, Vitamina D)"]
          ]
        },
        precautions: [
          "Avaliação Médica: Nunca faça Suplementação EV \"às cegas\". É necessário passar em consulta e fazer exames prévios para identificar o que realmente está faltando.",
          "Ambiente Clínico: Procedimentos injetáveis devem ser realizados por enfermeiros ou médicos capacitados, em ambiente estéril e com equipamentos de emergência disponíveis."
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
    },
    {
      id: "gerenciamento_peso",
      title: "Gerenciamento de Peso",
      summary: "Muito além das calorias",
      desc: "Um emagrecimento consciente, sustentável e baseado na sua individualidade biológica, cuidando de hormônios, metabolismo, sono e emoções de forma integrada.",
      icon: <Scale className="w-6 h-6 text-teal-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "Perder ou manter o peso não é uma questão de \"força de vontade\" ou de seguir a última dieta restritiva da moda. O corpo humano é um sistema complexo onde hormônios, metabolismo, sono e emoções estão intimamente interligados.\n\nNa clínica Allegrum Vivi, defendemos um emagrecimento consciente e sustentável.",
        sections: [
          {
            title: "Individualidade Biológica",
            paragraphs: [
              "Cada metabolismo reage de forma única. Investigamos as causas reais da dificuldade de perda de peso (fatores hormonais, inflamatórios ou metabólicos)."
            ]
          },
          {
            title: "Mudança de Comportamento",
            paragraphs: [
              "Sem neuras. O objetivo é construir uma relação saudável com a comida, focando na densidade nutricional e no prazer de se alimentar bem."
            ]
          },
          {
            title: "Suporte Médico Especializado",
            paragraphs: [
              "Utilizamos o que há de mais moderno na ciência médica para auxiliar no processo, garantindo que a perda de peso aconteça com preservação da massa magra e muito mais energia."
            ]
          }
        ],
        benefits: [
          "Construção de hábitos alimentares saudáveis, focando na densidade nutricional e no prazer de comer.",
          "Identificação e correção de barreiras metabólicas, inflamatórias e hormonais para perda de peso.",
          "Auxílio científico e de alta tecnologia médica para emagrecimento com preservação da massa magra.",
          "Regulação integral do organismo para que o peso ideal seja uma consequência natural da saúde restaurada."
        ],
        precautions: [
          "Foco na Longevidade: O emagrecimento consciente na Allegrum Vivi não se apoia em dietas da moda ou sacrifícios temporários, mas sim na restauração biológica completa.",
          "Acompanhamento Personalizado: Nossos planos integram suporte médico especializado e nutrição de precisão para garantir resultados duradouros."
        ]
      }
    },
    {
      id: "gerenciamento_estresse_burnout",
      title: "Gerenciamento de Estresse e Burnout",
      summary: "Resgatando a sua Vitalidade",
      desc: "Mapeamento preciso do sistema nervoso com a tecnologia Nerv Express para regular o cortisol, otimizar o sono e recuperar a performance e a paz de espírito.",
      icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      hasDetailedModal: true,
      longDesc: {
        whatIs: "O estresse crônico virou a engrenagem do mundo moderno, mas viver exausto não é normal. Quando o estresse ultrapassa o limite e se transforma em Burnout, o corpo e a mente cobram a conta: surgem a fadiga extrema, a névoa mental (brain fog), alterações no sono e a sensação de incapacidade.\n\nO Dr. Rubens e a Dra. Joely Pucci trazem para a internet um alerta fundamental: o esgotamento precisa de intervenção médica e lifestyle clínico. E para cuidar disso com máxima precisão, utilizamos a ciência a favor da sua saúde.",
        sections: [
          {
            title: "Tecnologia Aliada: Nerv Express",
            paragraphs: [
              "Para gerenciar o estresse de forma eficiente, primeiro precisamos mensurá-lo. Em nossa abordagem, utilizamos o Nerv Express, uma tecnologia avançada e não invasiva que funciona como uma verdadeira \"janela\" para o seu sistema nervoso.",
              "Através da análise quantitativa da Variabilidade da Frequência Cardíaca (VFC), o Nerv Express avalia em tempo real o equilíbrio entre duas engrenagens essenciais do seu corpo:",
              "• O Sistema Simpático: Responsável pela reação de \"luta ou fuga\" (ativado nos momentos de alerta e estresse).",
              "• O Sistema Parassimpático: Responsável pelo \"descanso e digestão\" (responsável pela recuperação celular e relaxamento)."
            ]
          },
          {
            title: "Por que esse exame é um divisor de águas?",
            paragraphs: [
              "Muitas vezes, os exames de sangue tradicionais parecem normais, mas você continua se sentindo esgotado. O Nerv Express nos permite identificar em qual fase de estresse o seu organismo se encontra e se o seu corpo perdeu a capacidade de relaxar."
            ]
          },
          {
            title: "Nossa Linha de Cuidado",
            paragraphs: [
              "• Modulação Personalizada do Estresse: Estratégias exatas para regular o cortisol e reequilibrar o sistema nervoso com base nos gráficos do seu teste.",
              "• Higiene do Sono e Cronobiologia: Ajustar o seu relógio biológico para devolver ao seu corpo a capacidade real de reparação noturna.",
              "• Gerenciamento Mental e Prático: Ferramentas para identificar gatilhos de ansiedade e estabelecer limites saudáveis na rotina profissional e pessoal."
            ]
          }
        ],
        benefits: [
          "Mapeamento objetivo do nível de estresse do seu sistema nervoso com a tecnologia do Nerv Express.",
          "Análise quantitativa da Variabilidade da Frequência Cardíaca (VFC) em tempo real.",
          "Estratégias personalizadas e exatas para regular o cortisol e reequilibrar o sistema simpático e parassimpático.",
          "Higiene do sono e ajustes cronobiológicos para restabelecer a capacidade real de reparação noturna."
        ],
        precautions: [
          "Se você sente que está operando no \"modo de sobrevivência\", saiba que mapear o seu nível de estresse com o Nerv Express é o primeiro passo para recuperar o entusiasmo, a performance e, acima de tudo, a paz de espírito.",
          "Tratamento Especializado: A reversão do quadro de burnout e estresse extremo exige o acompanhamento clínico cuidadoso que oferecemos em nossos programas integrativos."
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
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <a href="#home" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Home</a>
            <a href="#sobre" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Sobre Nós</a>
            <a href="#tratamentos" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Tratamentos</a>
            <a href="#como-funciona" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Como Funciona</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Equipes/FAQ</a>
            <a href="#contato" className="text-slate-600 hover:text-emerald-500 font-accent text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap">Contato</a>
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
                  Equipes/FAQ
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
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Ortomolecular</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Homeopatia</span>
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
                    A Dra. Joely Pucci (CRF 18634) é farmacêutica bioquímica integrativa e terapeuta complementar com sólida trajetória na promoção da saúde, longevidade e bem-estar. É idealizadora dos renomados programas clínicos <strong className="font-semibold text-slate-800">Mente Livre – Corpo Leve</strong> e <strong className="font-semibold text-slate-800">NeuroSlim Metabolic Reset®</strong>, focados em emagrecimento consciente e reprogramação neuroemocional. Atua com maestria no segmento da medicina e farmácia integrativa, focando na biofísica do corpo e no cuidado individualizado para que o organismo funcione em perfeito equilíbrio. Como responsável técnica e especialista em desenvolvimento de formulações individualizadas, seu trabalho une a ciência farmacêutica tradicional às terapias modernas e integrativas. O foco das consultas e tratamentos é desinflamar o corpo, organizar o metabolismo e respeitar o tempo biológico de cada paciente, auxiliando em processos de emagrecimento saudável, gerenciamento de crises de ansiedade e reabilitação da saúde integrativa.
                  </p>
                   <div className="mt-3 flex flex-wrap gap-2">
                     <a href="#programas-exclusivos" className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-accent font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all shadow-sm">
                       Ver Programa Mente Livre <ArrowRight className="w-3 h-3" />
                     </a>
                     <a href="#programas-exclusivos" className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-900 to-slate-900 text-white font-accent font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg hover:from-indigo-950 hover:to-slate-950 transition-all shadow-sm">
                       Ver Programa NeuroSlim <ArrowRight className="w-3 h-3" />
                     </a>
                   </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-accent">Especialidades:</span>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Biofísica do Corpo</span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Nutrição Ortomolecular</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-sans">Comportamento Alimentar</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROGRAMAS CLÍNICOS EXCLUSIVOS DRA. JOELY PUCCI */}
      <section id="programas-exclusivos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-teal-500/10 border border-teal-500/20 px-3.5 py-1 rounded-full text-teal-400 text-xs font-semibold uppercase tracking-wider font-accent">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Programas Exclusivos Dra. Joely Pucci
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight font-black">
              Emagrecimento Consciente e Integrativo
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl font-light">
              Protocolos de alta performance clínica desenvolvidos para desinflamar o corpo, reprogramar o comportamento alimentar e atingir um peso sustentável com base científica.
            </p>
          </div>

          {/* Dynamic Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-850 p-1.5 rounded-2xl border border-slate-850/80 flex gap-2">
              <button
                onClick={() => setActiveProgramTab('mentelivre')}
                className={`px-5 py-3 rounded-xl font-accent font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeProgramTab === 'mentelivre'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Scale className="w-4 h-4" />
                Mente Livre – Corpo Leve
              </button>
              <button
                onClick={() => setActiveProgramTab('neuroslim')}
                className={`px-5 py-3 rounded-xl font-accent font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeProgramTab === 'neuroslim'
                    ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md shadow-indigo-950/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Brain className="w-4 h-4" />
                NeuroSlim Metabolic Reset®
              </button>
            </div>
          </div>

          {/* AnimatePresence or conditional render for subpages */}
          <div className="max-w-6xl mx-auto">
            {activeProgramTab === 'mentelivre' ? (
              // MENTE LIVRE CORPO LEVE SUBPAGE
              <motion.div
                key="mentelivre-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Intro Card */}
                <div className="bg-slate-850 border border-slate-800 rounded-3xl p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-5 col-span-1">
                      <span className="text-emerald-400 font-accent font-extrabold text-xs uppercase tracking-widest block">PROPÓSITO DO PROGRAMA</span>
                      <h3 className="font-display text-2xl md:text-3.5xl font-extrabold tracking-tight text-white">
                        Programa Mente Livre – Corpo Leve
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2 font-light">
                        Promover um emagrecimento real, saudável e sustentável por meio da desintoxicação física, emocional e mental, com base na ciência funcional, ortomolecular, genética e epigenética. Atuamos diretamente nas causas fundamentais do ganho de peso e não apenas nos sintomas de forma segura, natural e duradoura.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <span className="text-2xl font-black text-emerald-400 block mb-1">100%</span>
                          <span className="text-[11px] font-accent font-bold uppercase tracking-wider text-slate-300">Abordagem Integral</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">Cuidado simultâneo nos aspectos físicos, emocionais e mentais.</p>
                        </div>
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <span className="text-2xl font-black text-emerald-400 block mb-1">8 sem.</span>
                          <span className="text-[11px] font-accent font-bold uppercase tracking-wider text-slate-300">Duração</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">4 semanas intensivas + 4 semanas de manutenção e consolidação.</p>
                        </div>
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <span className="text-2xl font-black text-emerald-400 block mb-1">4+</span>
                          <span className="text-[11px] font-accent font-bold uppercase tracking-wider text-slate-300">Especialistas</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">Equipe multidisciplinar totalmente integrada de acompanhamento.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5 relative col-span-1">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700 shadow-2xl">
                        <img 
                          src={draJoelyPhoto} 
                          alt="Mente Livre Corpo Leve" 
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">Ciência & Emoção</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7 Etapas do Programa */}
                <div>
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <h4 className="text-xs font-accent font-extrabold text-emerald-400 uppercase tracking-widest mb-1">Passo a Passo</h4>
                    <h3 className="font-display text-xl md:text-3xl font-extrabold text-white">As 7 Etapas do Programa</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-2">Um cronograma progressivo desenhado de forma científica para desinflamar e reprogramar seu organismo.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stage 1 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">01</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Avaliação Integrativa Inicial
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Análise profunda de bioimpedância, exames laboratoriais e padrões comportamentais com suporte médico completo.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Anamnese funcional e nutricional</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Avaliação bioquímica laboratorial e hormonal</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Teste genético nutrigenômico (queima calórica, sensibilidade e detox)</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Avaliação emocional e comportamental</li>
                      </ul>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">02</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Suplementação Ortomolecular
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Planejamento e infusão de suplementação endovenosa (EV) ou intramuscular (IM) personalizada para nutrição e detoxificação.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Ativos antioxidantes de altíssima absorção</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Detoxificação e proteção mitocondrial direta</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Ativação metabólica celular acelerada</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Reposição imediata de vitaminas e minerais essenciais</li>
                      </ul>
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">03</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Detox e Plano Alimentar
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Combinação de terapias de desintoxicação eletrônica com alimentação funcional anti-inflamatória de alta precisão.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Desintoxicação eletrônica iônica profunda</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Eliminação de metais pesados e regulação do pH</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Plano alimentar sem glúten, lactose ou açúcar inflamatório</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Inserção estratégica de bioativos e termogênicos</li>
                      </ul>
                    </div>

                    {/* Stage 4 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">04</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Suplementação Oral e Fitoterápicos
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Suporte diário com formulações personalizadas desenvolvidas especificamente para o seu perfil e seus objetivos clínicos.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Manipulados adaptógenos para modular estresse e cortisol</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Ativadores e termogênicos metabólicos naturais</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Nutrientes de suporte mitocondrial e celular</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Enzimas digestivas, probióticos e prébióticos específicos</li>
                      </ul>
                    </div>

                    {/* Stage 5 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">05</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Modulação Hormonal Científica
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Acompanhamento médico focado no equilíbrio hormonal sob rigorosa análise laboratorial personalizada.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Uso de hormônios bioidênticos e fitoterápicos de regulação</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Avaliação minuciosa de tireoide, hormônios sexuais e adrenais</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Segurança médica e dosagem fisiológica ideal</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Reversão da lentidão metabólica causada por desequilíbrios</li>
                      </ul>
                    </div>

                    {/* Stage 6 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">06</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Reprogramação Mental e Emocional
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Ferramentas avançadas de neurociência e comportamento para desprogramar crenças sabotadoras sobre o peso.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Identificação profunda de crenças limitantes sobre merecimento</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Coaching neuroemocional focado em autoestima</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Técnicas de Programação Neurolinguística (PNL)</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Desprogramação neurobiológica através de técnicas do Aura Master</li>
                      </ul>
                    </div>

                    {/* Stage 7 */}
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all md:col-span-2 lg:col-span-1 max-w-md mx-auto w-full group">
                      <span className="absolute top-4 right-4 text-slate-700 font-display font-black text-4xl group-hover:text-emerald-500/10 transition-colors">07</span>
                      <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                        Coaching e Comportamento Feminino
                      </h4>
                      <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                        Sessões de mentoria com foco em rotina prática, comportamento alimentar saudável e resgate da leveza feminina.
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-300 font-light">
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Clareza de metas e estratégias práticas de ação</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Organização de rotina diária de autocuidado</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Reconstrução e apoio à autoimagem feminina saudável</li>
                        <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Planejamento pós-programa detalhado para longevidade</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Multidisciplinary Team & Bonuses */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  {/* Team */}
                  <div className="lg:col-span-7 bg-slate-850 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                    <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-emerald-400" />
                      Acompanhamento por Equipe Multidisciplinar Integrada
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                      Nossa equipe atua em sincronia perfeita para oferecer um ecossistema completo de suporte, garantindo que cada área do seu emagrecimento seja monitorada de perto por especialistas clínicos.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-750">
                        <h5 className="font-display font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1">Farmacêutica Bioquímica</h5>
                        <p className="text-slate-300 text-[11px] font-light leading-snug">Especialista em coaching nutricional, nutrição clínica avançada e reprogramação comportamental.</p>
                      </div>
                      <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-750">
                        <h5 className="font-display font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1">Médico Integrativo</h5>
                        <p className="text-slate-300 text-[11px] font-light leading-snug">Especialista em medicina ortomolecular e modulação hormonal com base diagnóstica rigorosa.</p>
                      </div>
                      <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-750">
                        <h5 className="font-display font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1">Nutricionista</h5>
                        <p className="text-slate-300 text-[11px] font-light leading-snug">Profissional com abordagem funcional e elaboração de planos de alta densidade nutricional.</p>
                      </div>
                      <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-750">
                        <h5 className="font-display font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1">Enfermagem Especializada</h5>
                        <p className="text-slate-300 text-[11px] font-light leading-snug">Suporte de excelência em procedimentos de biossegurança e aplicação de vias endovenosas e intramusculares.</p>
                      </div>
                    </div>
                  </div>

                  {/* Bonuses & Duration */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 md:p-8 flex-1 space-y-4">
                      <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-400" />
                        Bônus Inclusos e Exclusivos
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-slate-800/30 p-3.5 rounded-xl border border-slate-750/50">
                          <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-display font-bold text-white text-xs">E-book de Receitas Funcionais</h5>
                            <p className="text-slate-400 text-[11px] font-light mt-0.5 leading-normal">Receitas deliciosas, fáceis, práticas e altamente nutritivas para dar sabor ao seu emagrecimento.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-slate-800/30 p-3.5 rounded-xl border border-slate-750/50">
                          <HeartPulse className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-display font-bold text-white text-xs">Meditações Guiadas Exclusivas</h5>
                            <p className="text-slate-400 text-[11px] font-light mt-0.5 leading-normal">Áudios neurais especialmente desenvolvidos para reequilibrar seu sistema nervoso e tratar a fome emocional.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-600/20 to-teal-800/30 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
                      <h4 className="font-display font-black text-sm uppercase tracking-widest text-emerald-300">Estrutura Sugerida</h4>
                      <p className="text-slate-300 text-xs font-light">
                        <strong className="font-semibold text-white">4 Semanas Intensivas:</strong> Cuidado de alto impacto clínico com consultas, suplementos e reprogramações semanais.
                      </p>
                      <p className="text-slate-300 text-xs font-light border-t border-emerald-500/10 pt-2">
                        <strong className="font-semibold text-white">1 Mês de Manutenção:</strong> Plano estruturado pós-protocolo para consolidação dos resultados e sedimentação dos hábitos.
                      </p>
                      <button 
                        onClick={() => {
                          setBookingTreatment('Mente Livre – Corpo Leve');
                          setIsModalOpen(true);
                        }}
                        className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-accent font-extrabold text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-md shadow-emerald-950/20"
                      >
                        Agendar Avaliação Inicial
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              // NEUROSLIM SUBPAGE
              <motion.div
                key="neuroslim-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Intro Card */}
                <div className="bg-slate-850 border border-slate-800 rounded-3xl p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-5 col-span-1">
                      <span className="text-indigo-400 font-accent font-extrabold text-xs uppercase tracking-widest block">PROTOCOLO INTEGRADO</span>
                      <h3 className="font-display text-2xl md:text-3.5xl font-extrabold tracking-tight text-white">
                        NeuroSlim Metabolic Reset®
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2 font-light">
                        Reprogramação Neuroemocional + Otimização Metabólica Integrada — um programa clínico de 8 sessões progressivas desenhado especificamente para a transformação profunda do corpo e da mente, combatendo as barreiras biológicas e psicológicas do emagrecimento de forma integrada.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <Flame className="w-5 h-5 text-rose-400 mb-1" />
                          <span className="text-xs font-accent font-bold uppercase tracking-wider text-white">Redução de Gordura</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">Melhora da composição corporal fundamentada na regulação hormonal e biológica real.</p>
                        </div>
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <Brain className="w-5 h-5 text-indigo-400 mb-1" />
                          <span className="text-xs font-accent font-bold uppercase tracking-wider text-white">Controle da Compulsão</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">Modulação do sistema nervoso simpático e regulação da fome emocional crônica.</p>
                        </div>
                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-750">
                          <TrendingUp className="w-5 h-5 text-teal-400 mb-1" />
                          <span className="text-xs font-accent font-bold uppercase tracking-wider text-white">Eficiência Metabólica</span>
                          <p className="text-[11px] text-slate-450 mt-1 font-light leading-snug">Estímulo ao aumento natural do gasto energético basal e sensibilidade celular.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5 relative col-span-1">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700 shadow-2xl">
                        <img 
                          src={draJoelyPhoto} 
                          alt="Neuroslim Metabolic Reset" 
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="bg-indigo-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">8 Sessões Clínicas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Base Fisiológica do Programa */}
                <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 md:p-8">
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <h4 className="text-xs font-accent font-extrabold text-indigo-400 uppercase tracking-widest mb-1">Cuidado de Alta Precisão</h4>
                    <h3 className="font-display text-xl md:text-3xl font-extrabold text-white">Base Fisiológica do NeuroSlim®</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-2">O programa atua de forma rigorosamente integrada em quatro sistemas fundamentais do organismo:</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-750 hover:border-slate-700 transition-colors">
                      <HeartPulse className="w-8 h-8 text-rose-500 mb-3" />
                      <h4 className="font-display font-bold text-sm text-white mb-2 font-semibold">Sistema Nervoso Autônomo</h4>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">
                        Redução da hiperativação simpática (modo de sobrevivência/alerta) e estímulo da recuperação parassimpática, alcançando equilíbrio neurológico profundo.
                      </p>
                    </div>
                    <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-750 hover:border-slate-700 transition-colors">
                      <TrendingUp className="w-8 h-8 text-teal-500 mb-3" />
                      <h4 className="font-display font-bold text-sm text-white mb-2 font-semibold">Metabolismo Energético</h4>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">
                        Correção e melhora expressiva da sensibilidade à insulina, facilitando a queima de gorduras e aumentando o gasto energético basal e de repouso.
                      </p>
                    </div>
                    <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-750 hover:border-slate-700 transition-colors">
                      <Scale className="w-8 h-8 text-emerald-500 mb-3" />
                      <h4 className="font-display font-bold text-sm text-white mb-2 font-semibold">Comportamento Alimentar</h4>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">
                        Redução da fome emocional crônica, aumento natural dos sinalizadores de saciedade do estômago e ressignificação comportamental com o prazer alimentar.
                      </p>
                    </div>
                    <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-750 hover:border-slate-700 transition-colors">
                      <Dna className="w-8 h-8 text-indigo-500 mb-3" />
                      <h4 className="font-display font-bold text-sm text-white mb-2 font-semibold">Microbiota Intestinal</h4>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">
                        Modulação inflamatória e bacteriana direta do trato intestinal, que influencia diretamente nos hormônios de apetite, humor, neurotransmissores e no metabolismo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline / Jornada das 8 Sessões */}
                <div>
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <h4 className="text-xs font-accent font-extrabold text-indigo-400 uppercase tracking-widest mb-1">A Jornada Clínica</h4>
                    <h3 className="font-display text-xl md:text-3xl font-extrabold text-white">Cronograma Clínico — 8 Sessões Progressivas</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-2">Uma jornada estruturada passo a passo para transformar sua relação com a saúde, do diagnóstico à sua total autonomia.</p>
                  </div>

                  <div className="relative border-l border-indigo-500/20 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
                    
                    {/* Session 1 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        1
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 1: Avaliação + Reset Inicial
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Mapear & Regular</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Fase inicial diagnóstica para compreender seus padrões biológicos e iniciar os primeiros estímulos celulares de limpeza metabólica.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Análise e Exames</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Avaliação de composição corporal avançada</li>
                              <li>• Diagnóstico de padrão alimentar e nível de estresse</li>
                              <li>• Avaliação do padrão de sono e sinais de compulsão</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Intervenções e Recursos</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Introdução ao NeuroSlim & Áudio de reprogramação "O Peso Invisível"</li>
                              <li>• Recurso: Desintoxicação iônica profunda + Equilius-Autoregulação</li>
                              <li>• Plano Inicial: Ajuste hídrico exato (30-40ml/kg) e redução de ultraprocessados</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 2 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        2
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 2: Inflamação e Saciedade
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Otimizar o Ambiente</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Foco total em desinflamar o trato gastrointestinal e repovoar a microbiota com bactérias benéficas para regular a saciedade e a fome emocional.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Intervenções e Mindset</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Áudio terapêutico "Permissão para Receber"</li>
                              <li>• Abordagem clínica sobre a culpa alimentar crônica</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Estratégias Clínicas</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Protocolo de probióticos específicos (L. gasseri, L. rhamnosus, B. lactis)</li>
                              <li>• Recurso físico: Desintoxicação iônica + Sessão Equilius-Autoregulação</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 3 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        3
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 3: Ativação Metabólica
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Queimar e Energizar</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Acelerar o metabolismo celular, otimizando o gasto energético geral, melhorando a disposição e os processos de queima de gordura localizada.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Estímulos e Movimento</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Áudio de reprogramação profunda "O Medo de Crescer"</li>
                              <li>• Organização de atividades: Força (3x/semana) + Caminhadas (7-10 mil passos)</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Termogênese & Detox</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Suporte de fitoterápicos termogênicos (EGCG, Gengibre, L-Carnitina, Pimenta)</li>
                              <li>• Recurso de Ativação física + Foco (Fígado-Rins-Intestinos) no Equilius</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 4 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        4
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 4: Identidade Metabólica
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Consistência de Hábitos</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Construir hábitos duradouros que definem uma nova identidade metabólica saudável, estabilizando e consolidando as mudanças comportamentais.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Mindset Terapêutico</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Áudio estrutural "A Nova Versão"</li>
                              <li>• Recurso especializado em Relaxamento Profundo e Sono Reparador</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Organização de Rotina</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Rotina alimentar estruturada, fácil e prática</li>
                              <li>• Organização clínica de horários e regulação do ciclo circadiano</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 5 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        5
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 5: Estresse e Cortisol
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Reduzir Auto-Sabotagem</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Combate e controle sobre o cortisol elevado (o hormônio do estresse que promove o acúmulo de gordura abdominal) e bloqueio das autossabotagens metabólicas.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Regulação Neurovegetativa</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Áudio de reprogramação "Histórias que se Repetem"</li>
                              <li>• Exercícios clínicos de respiração 4-6 (Coerência Cardíaca)</li>
                              <li>• Reforço estrutural na higiene de sono profunda</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Suporte Físico e Intestinal</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Reforço seletivo na microbiota com probióticos e fibras prebióticas</li>
                              <li>• Sessão de desintoxicação iônica + Regulação no Equilius</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 6 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        6
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 6: Consolidação e Autonomia
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Independência Plena</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Reavaliação final de composição corporal, fixação dos novos padrões comportamentais e estruturação do plano pós-protocolo.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Mapeamento de Resultados</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Áudio finalizador "O Novo Caminho"</li>
                              <li>• Reavaliação minuciosa da composição de massa muscular, peso e gordura</li>
                              <li>• Avaliação dos novos níveis de vitalidade, energia e estabilidade emocional</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">O Plano de Manutenção (30-90 Dias)</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Formulação do plano pós-programa personalizado para autonomia permanente</li>
                              <li>• Orientação nutritional de manutenção e longevidade preventiva</li>
                              <li>• Orientação para a continuidade recomendada de áudios e acompanhamentos</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 7 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        7
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 7: Sessão Bônus — Reavaliação dos Resultados (Fase I)
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Sustentação de Resultados</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Primeira sessão bônus dedicada a monitorar a consolidação da nova rotina, ajustar eventuais dificuldades práticas e realizar a primeira reavaliação evolutiva de resultados pós-fase intensiva.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Mapeamento & Ajustes</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Análise de adaptação comportamental pós-protocolo de emagrecimento</li>
                              <li>• Ajustes finos de suporte e estratégias para controle de ansiedade em datas festivas ou viagens</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Análise de Progresso</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Comparativo evolutivo de peso, gordura corporal e retenção de líquidos</li>
                              <li>• Avaliação de bem-estar gastrointestinal, sono e vitalidade no dia a dia</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session 8 */}
                    <div className="relative">
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 font-display font-black text-xs md:text-sm flex items-center justify-center shadow-lg shadow-indigo-950/40">
                        8
                      </span>
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg flex items-center gap-2">
                            Sessão 8: Sessão Bônus — Reavaliação dos Resultados (Fase II)
                          </h4>
                          <span className="bg-indigo-500/15 text-indigo-400 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Objetivo: Blindagem e Autonomia Plena</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 font-light leading-relaxed">
                          Segunda sessão bônus focada na reavaliação final consolidada dos resultados, celebração da transformação física e mental, e blindagem de longo prazo contra efeito sanfona.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Reavaliação Consolidada</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Comparativo final detalhado da composição corporal e do reset metabólico</li>
                              <li>• Certificação da autonomia comportamental frente à compulsão alimentar</li>
                              <li>• Consolidação do estilo de vida saudável e preventivo de longo prazo</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-indigo-400 font-accent font-bold text-[10px] uppercase block mb-1">Manutenção Vitalícia</span>
                            <ul className="space-y-1 text-slate-300 font-light">
                              <li>• Planejamento de checkups de biofrequência e equilíbrio integrativo</li>
                              <li>• Entrega das diretrizes finais personalizadas para longevidade e peso ideal estável</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Indications & Contraindications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Indications */}
                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h4 className="font-display font-bold text-[#ffffff] text-base flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      Para quem o NeuroSlim® é indicado?
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300 font-light">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Indivíduos com sobrepeso ou obesidade refratários a tratamentos convencionais.</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Pacientes que sofrem de episódios recorrentes de compulsão ou ansiedade alimentar.</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Quadros clínicos de fadiga crônica persistente leve ou moderada.</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Pessoas com estresse metabólico/cortisol e extrema dificuldade de adesão estável a dietas.</li>
                    </ul>
                  </div>

                  {/* Contraindications */}
                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h4 className="font-display font-bold text-[#ffffff] text-base flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      Contraindicações Relativas
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300 font-light">
                      <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0 mt-0.5 font-bold">•</span> Transtornos psiquiátricos graves ou em fases de crise não devidamente tratados.</li>
                      <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0 mt-0.5 font-bold">•</span> Doenças metabólicas crônicas ou endócrinas severamente descompensadas.</li>
                      <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0 mt-0.5 font-bold">•</span> Gestação ativa (necessidade de avaliação médica individualizada e detalhada).</li>
                    </ul>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="bg-gradient-to-br from-indigo-950/40 via-indigo-900/10 to-transparent border border-indigo-500/20 rounded-3xl p-6 md:p-10 text-center max-w-3xl mx-auto space-y-5">
                  <h4 className="font-display font-extrabold text-white text-xl md:text-2xl">Buscando recuperar a sua saúde e vitalidade real?</h4>
                  <p className="text-slate-300 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed">
                    O protocolo clínico NeuroSlim Metabolic Reset® une neurociência de ponta, modulação comportamental e nutrição funcional integrada para que a saúde e o peso ideal sejam consequências de um organismo curado e reequilibrado.
                  </p>
                  <button
                    onClick={() => {
                      setBookingTreatment('Gerenciamento de Estresse e Burnout'); // Map to clinical appointment
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-slate-950 font-accent font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-950/20"
                  >
                    Agendar Consulta Inicial NeuroSlim® <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                </div>
              </motion.div>
            )}
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

          {/* Grid of treatments */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative z-10">
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

            {/* Step 5 */}
            <div className="relative text-center p-5 group col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-accent font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                05
              </div>
              <h3 className="font-accent font-bold text-slate-800 text-base mb-2">Consulta de Retorno</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Ocorre em até 60 dias, para que o paciente possa retornar ao médico as informações sobre as melhoras e analisar os pontos que ainda demandam alguma atenção.
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
                    <option value="Programa Mente Livre – Corpo Leve">Programa Mente Livre – Corpo Leve</option>
                    <option value="Protocolo NeuroSlim Metabolic Reset">Protocolo NeuroSlim Metabolic Reset®</option>
                    <option value="Reposição Hormonal Bioidêntica">Reposição Hormonal Bioidêntica</option>
                    <option value="Gerenciamento de Peso">Gerenciamento de Peso Consciente</option>
                    <option value="Gerenciamento de Estresse e Burnout">Gerenciamento de Estresse e Burnout</option>
                    <option value="Tratamentos Biofísicos e Integrativos">Tratamentos Biofísicos e Integrativos (Ozonioterapia, Neuromodulação, etc)</option>
                    <option value="Suplementação EV e IM (Vias Injetáveis)">Suplementação Endovenosa & Intramuscular</option>
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
