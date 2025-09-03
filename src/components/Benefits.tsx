import { Calendar, DollarSign, Clock, Shield, Target, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Capacitação Completa",
      description: "Do técnico ao empresarial: domine todas as áreas da elétrica.",
      color: "construction-orange"
    },
    {
      icon: DollarSign,
      title: "Renda Até 5x Maior",
      description: "Profissionais capacitados cobram mais e têm mais oportunidades.",
      color: "construction-blue"
    },
    {
      icon: Clock,
      title: "Aprenda no Seu Ritmo",
      description: "Acesso vitalício para estudar quando e onde quiser.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Certificação Reconhecida",
      description: "Certificados que agregam valor ao seu currículo profissional.",
      color: "accent"
    },
    {
      icon: Target,
      title: "Foco na Prática",
      description: "Teoria aplicada com exercícios e casos reais do mercado.",
      color: "construction-orange"
    },
    {
      icon: Zap,
      title: "Suporte Especializado",
      description: "Tire dúvidas com instrutores experientes do mercado.",
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
            Veja como nossos cursos podem revolucionar sua carreira e multiplicar sua renda
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
                  Conhecimento limitado e desatualizado
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Dificuldade para conseguir clientes
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Concorrência com preços baixos
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Falta de gestão e organização
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-construction-orange/5 border-2 border-construction-orange/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-construction-orange mb-6 text-center">DEPOIS</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Conhecimento técnico especializado
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Agenda lotada e renda até 5x maior
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Negócio organizado e lucrativo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Reconhecimento como especialista
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