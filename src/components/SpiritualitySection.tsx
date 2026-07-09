import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Scale, 
  Award, 
  Globe, 
  Activity, 
  ClipboardList, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight, 
  Compass, 
  Brain, 
  Heart, 
  Info, 
  Sparkles,
  ArrowRight,
  Printer,
  Share2,
  Bookmark
} from 'lucide-react';

interface ArticleSection {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  content: React.ReactNode;
}

export default function SpiritualitySection() {
  const [activeTab, setActiveTab] = useState<string>('introducao');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#espiritualidade');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections: ArticleSection[] = [
    {
      id: 'introducao',
      num: '01',
      title: 'Introdução: O Despertar do Paradigma Multidimensional na Medicina',
      shortTitle: 'Introdução',
      icon: Compass,
      color: 'emerald',
      bgColor: 'bg-emerald-50/60',
      borderColor: 'border-emerald-100',
      textColor: 'text-emerald-700',
      content: (
        <div className="space-y-5">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            A prática médica contemporânea atravessa uma transição que transcende a mera atualização técnica; trata-se de um <strong className="font-semibold text-slate-900">imperativo deontológico</strong>. Durante décadas, a hegemonia do modelo fisiopatológico — focado na correção mecânica da biologia lesada — ofereceu avanços inegáveis, mas ao custo de uma desumanização tecnicista que fragmentou o paciente. A compreensão da saúde como uma entidade complexa exige, hoje, um holismo terapêutico que integre as dimensões sociais, psíquicas e espirituais.
          </p>
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/50 my-6">
            <h5 className="font-accent font-bold text-xs text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Objetivo Central
            </h5>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Demonstrar que a espiritualidade, longe de ser um apêndice místico ou subjetivo, constitui um <strong className="font-semibold text-slate-800">paradigma científico mensurável</strong> e um componente essencial no cuidado integral. A integração desse domínio não é apenas uma escolha benevolente, mas uma estratégia para mitigar o sofrimento e otimizar a resposta biológica.
            </p>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            Para que essa convergência ocorra com rigor ético, é imperativo estabelecer uma diferenciação ontológica clara entre o sagrado institucionalizado e a busca individual por propósito.
          </p>
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl">
            <Info className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h6 className="font-accent font-bold text-xs text-slate-800 uppercase tracking-wider mb-1">Nota dos Diretores Técnicos</h6>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-light">
                "Na Allegrum Vivi, o Dr. Rubens e a Dra. Joely integram essa perspectiva multidimensional. Entendemos que a cura real depende do equilíbrio entre a bioquímica celular e o sentido existencial do indivíduo."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'diferenciacao',
      num: '02',
      title: 'Diferenciação Ontológica: Espiritualidade versus Religiosidade',
      shortTitle: 'Diferenciação Ontológica',
      icon: Scale,
      color: 'indigo',
      bgColor: 'bg-indigo-50/60',
      borderColor: 'border-indigo-100',
      textColor: 'text-indigo-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            Para a aplicação ética e laica em ambientes de saúde, a distinção terminológica é fundamental. Sem essa clareza, o profissional corre o risco de incorrer em proselitismo ou de negligenciar as necessidades de sentido do paciente. A distinção permite que o cuidado seja inclusivo, respeitando a autonomia e a privacidade de cada ser humano.
          </p>
          
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-xs font-accent font-bold text-slate-700 uppercase tracking-wider">Conceito</th>
                  <th className="px-4 py-3 text-xs font-accent font-bold text-slate-700 uppercase tracking-wider">Definição e Escopo (Saad et al., 2001)</th>
                  <th className="px-4 py-3 text-xs font-accent font-bold text-slate-700 uppercase tracking-wider">Foco Principal (Powell et al., 2003)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-semibold text-indigo-700 bg-indigo-50/10">Religiosidade</td>
                  <td className="px-4 py-3.5 text-slate-600 font-light leading-relaxed">Sistematização de culto, doutrinas, ritos e práticas compartilhadas por um grupo institucionalizado.</td>
                  <td className="px-4 py-3.5 text-slate-600 font-light">Adesão a dogmas e participação formal em comunidades de fé.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-semibold text-emerald-700 bg-emerald-50/10">Espiritualidade</td>
                  <td className="px-4 py-3.5 text-slate-600 font-light leading-relaxed">Propensão humana intrínseca à busca de significado, transcendência e propósito para a existência.</td>
                  <td className="px-4 py-3.5 text-slate-600 font-light">Conexão pessoal com algo maior, independente de filiação institucional.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 rounded-bl-full pointer-events-none" />
            <h5 className="font-accent font-bold text-xs text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              A Hermenêutica do Sentido na Prática Clínica
            </h5>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              A confusão entre esses termos é um entrave à aliança terapêutica. Para o paciente ateu ou não religioso, a espiritualidade manifesta-se como uma <strong className="font-medium text-white">"hermenêutica do sentido"</strong>: o que mantém sua vontade de viver? Seja através do legado familiar, da produção artística ou do compromisso ético, identificar esses valores é o que permite ao médico oferecer um suporte existencial eficaz e laico, garantindo que o cuidado espiritual seja um direito universal, e não um privilégio do crente.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'marcos',
      num: '03',
      title: 'Marcos de Reconhecimento e Legitimação Científica',
      shortTitle: 'Marcos de Legitimação',
      icon: Award,
      color: 'amber',
      bgColor: 'bg-amber-50/60',
      borderColor: 'border-amber-100',
      textColor: 'text-amber-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            O processo de validação da espiritualidade pelas grandes autoridades mundiais e nacionais de saúde retirou o tema do campo puramente místico ou empírico, elevando-o ao patamar de rigor acadêmico e institucional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-150 shadow-2xs hover:border-amber-200 transition-colors">
              <span className="inline-block text-[10px] font-accent font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">OMS (1988)</span>
              <h5 className="font-accent font-bold text-slate-800 text-sm mb-2">Saúde Multidimensional</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                A Organização Mundial da Saúde incluiu oficialmente a dimensão espiritual no conceito de saúde multidimensional, reconhecendo-a como o conjunto de convicções que remetem ao significado da vida.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-150 shadow-2xs hover:border-amber-200 transition-colors">
              <span className="inline-block text-[10px] font-accent font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">DSM-IV (1995/2000)</span>
              <h5 className="font-accent font-bold text-slate-800 text-sm mb-2">Problemas Existenciais</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                A criação de categoria diagnóstica para problemas espirituais e religiosos permitiu diferenciar crises existenciais de transtornos mentais, evitando a patologização desnecessária do sofrimento espiritual.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-150 shadow-2xs hover:border-amber-200 transition-colors">
              <span className="inline-block text-[10px] font-accent font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">SBC (Diretrizes 2019)</span>
              <h5 className="font-accent font-bold text-slate-800 text-sm mb-2">Prevenção Cardiovascular</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Sob a liderança do Dr. Álvaro Avezum Júnior, a Sociedade Brasileira de Cardiologia associou formalmente a espiritualidade à prevenção cardiovascular, estabelecendo a "enfermidade moral" como fator de risco clínico.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rede-global',
      num: '04',
      title: 'A Rede Global de Investigação: Centros de Pesquisa e Instituições',
      shortTitle: 'Rede de Investigação',
      icon: Globe,
      color: 'teal',
      bgColor: 'bg-teal-50/60',
      borderColor: 'border-teal-100',
      textColor: 'text-teal-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            A legitimidade deste campo repousa sobre uma infraestrutura acadêmica internacional e nacional de altíssimo calibre, que desafia o ceticismo dogmático por meio da reprodutibilidade de dados estatísticos e fisiológicos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-150">
              <h5 className="font-accent font-bold text-xs text-teal-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Centros Nacionais (Brasil)
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <ChevronRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 font-medium">ProSER (IPq-USP):</strong> Coordenado pelo Dr. Frederico Leão, atua no tripé pesquisa, ensino e assistência, sendo referência máxima na integração da espiritualidade na psiquiatria e saúde mental.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <ChevronRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 font-medium">Nupes (UFJF):</strong> O Núcleo de Pesquisas em Espiritualidade e Saúde investiga com alto rigor científico a interface histórica e neurológica entre ciência e transcendência no país.
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-150">
              <h5 className="font-accent font-bold text-xs text-teal-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Centros Internacionais de Excelência
              </h5>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  A rede de investigação estende-se a instituições renomadas como a <strong className="font-medium text-slate-800">Universidade de Duke</strong> (liderada pelo Dr. Harold Koenig, pioneiro mundial), <strong className="font-medium text-slate-800">Stanford University</strong>, <strong className="font-medium text-slate-800">Columbia University</strong> e o <strong className="font-medium text-slate-800">Instituto George Washington</strong> (dirigido por Christina Puchalski).
                </p>
                <p className="pt-2 border-t border-slate-200">
                  Na Europa, destacam-se a <strong className="font-medium text-slate-800">Universidade de Munique</strong> e o <strong className="font-medium text-slate-800">Royal College of Psychiatrists</strong> (Reino Unido). Essa presença global valida a espiritualidade como um domínio clínico sério e respeitável.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'desfechos',
      num: '05',
      title: 'Desfechos Clínicos e Biológicos: Evidências na Prática Especializada',
      shortTitle: 'Evidências Clínicas',
      icon: Activity,
      color: 'rose',
      bgColor: 'bg-rose-50/60',
      borderColor: 'border-rose-100',
      textColor: 'text-rose-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            A medicina integrativa e de precisão é capaz de mensurar o imaterial através de marcadores biológicos e desfechos clínicos robustos, comprovando que o estado psíquico e existencial altera ativamente a homeostase do organismo.
          </p>

          <div className="space-y-4 my-6">
            {/* Cardiologia */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-150 hover:shadow-2xs transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-accent font-bold text-slate-800 text-sm sm:text-base mb-1">Cardiologia & Sentimentos Crônicos</h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  O Dr. Álvaro Avezum Júnior destaca que <strong className="font-semibold text-rose-800">a falta de perdão e o ressentimento crônico</strong> são preditores de hipertensão arterial sistêmica e doenças coronarianas agudas. Em um cenário onde o Brasil registrou 116.766 óbitos por doenças cardiovasculares em 2019, intervenções terapêuticas baseadas em gratidão e perdão emocional surgem como ferramentas essenciais de saúde coletiva.
                </p>
              </div>
            </div>

            {/* Neurociência */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-150 hover:shadow-2xs transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-accent font-bold text-slate-800 text-sm sm:text-base mb-1">Neurociência, Resiliência & Saúde Mental</h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  As práticas contemplativas e meditação influenciam diretamente a resiliência neurológica, com evidências científicas sólidas de menores taxas de ideação suicida, depressão e abuso de substâncias psicoativas. Durante o período da COVID-19, por exemplo, o banco de dados PubMed registrou mais de 110 artigos demonstrando cientificamente como a espiritualidade atuou como mediadora no enfrentamento saudável da pandemia.
                </p>
              </div>
            </div>

            {/* Modulação Neuroendócrina */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-150 hover:shadow-2xs transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-accent font-bold text-slate-800 text-sm sm:text-base mb-1">Modulação Neuroendócrina e Farmacocinética</h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Segundo o renomado neurocientista <strong className="font-medium text-slate-800">Sérgio Felipe de Oliveira</strong>, o estado mental atua como um potente modulador neuroendócrino. A descarga constante de adrenalina gerada pelo estresse e pela angústia altera fisicamente a biodisponibilidade e a distribuição de fármacos no organismo. O relaxamento, a confiança e a serenidade espiritual, portanto, otimizam a farmacocinética e aumentam a eficácia das medicações tradicionais.
                </p>
              </div>
            </div>

            {/* Oncologia Pediátrica */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-150 hover:shadow-2xs transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-accent font-bold text-slate-800 text-sm sm:text-base mb-1">Oncologia Pediátrica & Adaptação Existencial</h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  A resiliência é personificada no exemplo clínico da paciente <strong className="font-medium text-slate-800">Cora</strong>, que, amparada por um suporte espiritual lúdico, empático e integral, "ia rindo para a sala de cirurgia". Tal adaptação espiritual profunda minimiza o sofrimento psicológico pós-traumático e acelera de maneira mensurável a recuperação e cicatrização pós-operatória.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'aplicacoes',
      num: '06',
      title: 'Aplicações Práticas: Da Anamnese Espiritual ao Sistema Único de Saúde (SUS)',
      shortTitle: 'Aplicações Práticas',
      icon: ClipboardList,
      color: 'sky',
      bgColor: 'bg-sky-50/60',
      borderColor: 'border-sky-100',
      textColor: 'text-sky-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            A transição das evidências científicas teóricas para ferramentas clínicas aplicáveis garante o direito inalienável do paciente ao cuidado integral, humanizado e focado em sua totalidade de ser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            <div className="p-5 rounded-xl border border-sky-100 bg-sky-50/20">
              <h5 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-2">A Anamnese Espiritual Integrada</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                O uso de questionários estruturados de validação acadêmica internacional (como o protocolo <strong className="font-medium text-slate-800">FICA</strong> de Christina Puchalski) permite ao profissional mapear as fontes de esperança do paciente, suas crenças e a quem ele recorre em momentos de sofrimento agudo. Isso integra a espiritualidade ao plano terapêutico do médico e fortalece de maneira drástica a confiança mútua.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/20">
              <h5 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-2">PNPICs no SUS</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                A Política Nacional de Práticas Integrativas e Complementares (instituída em 2006) engloba hoje oficialmente 29 recursos terapêuticos validados (como Reiki, meditação, acupuntura e yoga), estando ativa em mais de 54% dos municípios brasileiros como suporte essencial de saúde pública de baixo custo.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 text-white relative">
            <h5 className="font-accent font-bold text-xs text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Uma Poderosa Defesa Contra o Negacionismo Científico
            </h5>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              Para o neurobiólogo <strong className="font-medium text-white">Sérgio Felipe de Oliveira</strong>, as práticas integrativas promovem um diálogo de acolhimento vital com o saber popular e regional do paciente. Ao abraçar o aculturamento espiritual de cada indivíduo, o médico constrói uma <strong className="font-medium text-white">verdadeira ponte de confiança</strong> que atua como escudo contra o negacionismo científico e movimentos perigosos anticiência. O acolhimento médico evita que o paciente abandone tratamentos convencionais de alta complexidade em prol de falsas curas milagrosas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conclusao',
      num: '07',
      title: 'Conclusão: A Integração como Imperativo Ético e Científico',
      shortTitle: 'Conclusão',
      icon: GraduationCap,
      color: 'purple',
      bgColor: 'bg-purple-50/60',
      borderColor: 'border-purple-100',
      textColor: 'text-purple-700',
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            A medicina contemporânea não pode mais se permitir o luxo do negacionismo em relação à dimensão espiritual. A superação de velhos dogmatismos, tanto religiosos quanto científicos, é o único caminho racional e empático para uma prática médica integrativa que honre a complexidade intrínseca da vida humana.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6 space-y-4">
            <h5 className="font-accent font-bold text-xs text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">Lições Fundamentais para a Prática Médica Integrativa</h5>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h6 className="font-accent font-bold text-slate-800 text-xs uppercase">Acolhimento da Multidimensionalidade</h6>
                  <p className="text-slate-500 text-xs font-light mt-0.5">Negligenciar a espiritualidade na clínica diária é oferecer um cuidado incompleto e falho, equivalente a ignorar os determinantes sociais ou biológicos que agridem o paciente.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h6 className="font-accent font-bold text-slate-800 text-xs uppercase">Competência Existencial Laica</h6>
                  <p className="text-slate-500 text-xs font-light mt-0.5">O profissional deve dominar a distinção ética entre dogma e espiritualidade para acolher a hermenêutica do sentido existencial de cada indivíduo, respeitando estritamente sua autonomia espiritual e mental.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h6 className="font-accent font-bold text-slate-800 text-xs uppercase">Segurança e Otimização Clínica</h6>
                  <p className="text-slate-500 text-xs font-light mt-0.5">A integração do cuidado existencial deve visar à segurança do paciente e à eficiência dos fármacos e suplementações, eliminando a futilidade terapêutica através da compreensão profunda de quem se está tratando.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-6 border-t border-slate-100 max-w-lg mx-auto">
            <p className="text-slate-800 font-display italic text-lg leading-relaxed font-semibold">
              "A técnica, quando desprovida de humanismo, é apenas mecânica; a empatia é o que a transforma em medicina."
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="espiritualidade" className="py-20 bg-slate-50 relative scroll-mt-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Header Design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider font-accent">
              <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
              Ciência e Transcendência
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-slate-950 tracking-tight font-black">
              Espiritualidade na Saúde
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-2xl font-light">
              Entenda a fundamentação científica, os marcos de legitimação global e a aplicação clínica da espiritualidade como pilar ativo de cura adotado na nossa prática terapêutica integrativa.
            </p>
          </div>

          {/* Action buttons on the header of the blog/article area */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleShare}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
              title="Copiar link do artigo"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>
            <button 
              onClick={() => window.print()}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
              title="Imprimir artigo"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* Dynamic Desktop/Tablet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Index Navigation Menu */}
          <div className="lg:col-span-4 space-y-2 sticky top-28 hidden md:block">
            <div className="p-4 bg-white border border-slate-150 rounded-2xl mb-4">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                <Bookmark className="w-4 h-4 text-emerald-500" />
                <span className="font-accent font-bold text-xs text-slate-800 uppercase tracking-wider">Índice de Capítulos</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light mb-4">Selecione uma área abaixo para ler as fundamentações e desfechos clínicos:</p>
              
              <div className="space-y-1">
                {sections.map((sect) => {
                  const IconComponent = sect.icon;
                  const isActive = activeTab === sect.id;
                  return (
                    <button
                      key={sect.id}
                      onClick={() => setActiveTab(sect.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-start gap-3 group text-xs sm:text-sm font-semibold cursor-pointer ${
                        isActive 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold leading-none shrink-0 mt-0.5 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-500'}`}>
                        {sect.num}
                      </span>
                      <span className="leading-tight truncate flex-1">{sect.shortTitle}</span>
                      <IconComponent className={`w-4 h-4 shrink-0 mt-0.5 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-900'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Promo box for booking integration */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-900 shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-500/10 rounded-full" />
              <h5 className="font-accent font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Saúde Integral
              </h5>
              <p className="text-[11px] text-emerald-100 leading-relaxed font-light mb-4">
                Trabalhamos de forma plena, integrando a medicina avançada e a biofísica com os aspectos emocionais e espirituais de cada indivíduo.
              </p>
              <a 
                href="#sobre"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <span>Conhecer os Doutores</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Mobile Tab Selector Option */}
          <div className="md:hidden w-full mb-4">
            <span className="text-[10px] font-accent font-extrabold text-slate-400 uppercase tracking-widest block mb-1.5">Navegar pelo Artigo:</span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
              {sections.map((sect) => {
                const isActive = activeTab === sect.id;
                return (
                  <button
                    key={sect.id}
                    onClick={() => setActiveTab(sect.id)}
                    className={`snap-start shrink-0 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                      isActive 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60 mr-1.5">{sect.num}</span>
                    {sect.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column Active Text Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {sections.map((sect) => {
                if (sect.id !== activeTab) return null;
                const IconComponent = sect.icon;
                return (
                  <motion.div
                    key={sect.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-slate-150 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden min-h-[420px]"
                  >
                    {/* Inner Accent Background Circle top right */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${sect.bgColor} rounded-bl-full opacity-40 pointer-events-none`} />

                    {/* Section Top Tag Info */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`font-mono text-sm font-black px-3 py-1 rounded-lg ${sect.bgColor} ${sect.textColor} border ${sect.borderColor}`}>
                        Capítulo {sect.num}
                      </span>
                      <span className="text-slate-300">|</span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <IconComponent className="w-4 h-4" />
                        <span>Artigo Científico</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-6 border-b border-slate-100 pb-5">
                      {sect.title}
                    </h3>

                    {/* Rich Content Output */}
                    <div className="prose prose-slate max-w-none">
                      {sect.content}
                    </div>

                    {/* Bottom Navigator for easier reader flow */}
                    <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                      <button
                        onClick={() => {
                          const idx = sections.findIndex(s => s.id === sect.id);
                          if (idx > 0) setActiveTab(sections[idx - 1].id);
                        }}
                        disabled={sections.findIndex(s => s.id === sect.id) === 0}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 hover:bg-slate-50 transition-all text-slate-500 hover:text-slate-800 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      >
                        ← Capítulo Anterior
                      </button>

                      <button
                        onClick={() => {
                          const idx = sections.findIndex(s => s.id === sect.id);
                          if (idx < sections.length - 1) setActiveTab(sections[idx + 1].id);
                        }}
                        disabled={sections.findIndex(s => s.id === sect.id) === sections.length - 1}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 transition-all text-white shadow-sm hover:shadow-md disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      >
                        Próximo Capítulo →
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
