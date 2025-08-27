import { Calendar, DollarSign, Clock, Shield, Target, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Agenda Sempre Lotada",
      description: "Nunca mais fique sem trabalho. Clientes vão te procurar diariamente.",
      color: "construction-orange"
    },
    {
      icon: DollarSign,
      title: "Renda 3x Maior",
      description: "Aumente seus ganhos com mais clientes e serviços de maior valor.",
      color: "construction-blue"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Pare de caçar clientes. Foque apenas no que você faz de melhor.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Credibilidade Profissional",
      description: "Avaliações positivas te posicionam como referência na região.",
      color: "accent"
    },
    {
      icon: Target,
      title: "Clientes Próximos",
      description: "Atenda apenas na sua região, reduzindo custos de deslocamento.",
      color: "construction-orange"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Primeiros clientes aparecem em até 7 dias após configuração.",
      color: "construction-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-surface to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforme Sua <span className="bg-gradient-hero bg-clip-text text-transparent">Carreira</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como o Google Meu Negócio pode revolucionar seu negócio e sua vida financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className={`bg-${benefit.color}/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-construction-orange transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Before vs After */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-destructive mb-6 text-center">ANTES</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Agenda vazia, esperando indicações
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Renda instável e imprevisível
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Concorrência com preços baixos
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Tempo perdido procurando trabalho
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-construction-orange/5 border-2 border-construction-orange/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-construction-orange mb-6 text-center">DEPOIS</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Agenda lotada com antecedência
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Renda 3x maior e previsível
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Você escolhe os melhores clientes
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Foco total no seu trabalho
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;