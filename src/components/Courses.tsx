import { Button } from "@/components/ui/button";
import { Phone, BookOpen, TrendingUp, Users, FileText, CheckCircle, Star, Clock } from "lucide-react";

const Courses = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  const mainCourses = [
    {
      id: 1,
      title: "Curso Técnico",
      subtitle: "Eletricista Predial Profissionalizante",
      description: "Domine fundamentos da elétrica predial com teoria e prática. Do básico ao intermediário para quem quer entrar na profissão.",
      price: "R$ 180",
      originalPrice: "R$ 350",
      icon: BookOpen,
      color: "construction-orange",
      features: [
        "20+ horas de vídeo aulas",
        "Apostilas em PDF",
        "Certificado de conclusão",
        "Suporte por 6 meses",
        "Exercícios práticos",
        "Acesso vitalício"
      ],
      badge: "MAIS VENDIDO",
      path: "/curso-tecnico"
    },
    {
      id: 2,
      title: "Comercial & Vendas",
      subtitle: "Marketing Digital para Eletricistas",
      description: "Aprenda a conseguir clientes através do marketing digital. Google Meu Negócio, redes sociais e muito mais.",
      price: "R$ 297",
      originalPrice: "R$ 597",
      icon: TrendingUp,
      color: "construction-blue",
      features: [
        "Estratégias de Google Meu Negócio",
        "Marketing nas redes sociais",
        "Como precificar serviços",
        "Técnicas de vendas",
        "Templates prontos",
        "Mentoria em grupo"
      ],
      badge: "RESULTADO GARANTIDO",
      path: "/curso-comercial"
    }
  ];

  const complementaryMaterials = [
    "Planilha de Orçamentação de Mão de Obra",
    "Planilha de Cálculo de Materiais",
    "Apostila: Erros a Evitar Durante Instalações",
    "Checklist de Ferramentas por Tipo de Serviço",
    "Modelo de Contrato Profissional"
  ];

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-background to-dark-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-hero bg-clip-text text-transparent">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do iniciante ao empresário: escolha o curso ideal para seu momento profissional
          </p>
        </div>

        {/* Main Courses */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div 
                key={course.id}
                className="relative bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                {/* Badge */}
                {course.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-${course.color} text-primary-foreground px-4 py-2 rounded-full text-sm font-bold`}>
                    {course.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`bg-${course.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 text-${course.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className={`text-${course.color} font-semibold mb-4`}>{course.subtitle}</p>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Acesso imediato</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${course.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={() => window.location.href = course.path}
                  className="w-full text-lg py-6"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ver Detalhes do Curso
                </Button>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-construction-orange text-construction-orange" />
                    ))}
                  </div>
                  <span>4.9/5 (200+ alunos)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complementary Materials */}
        <div className="bg-gradient-to-r from-dark-surface via-dark-elevated to-dark-surface rounded-2xl p-8 border border-construction-orange/20">
          <div className="text-center mb-8">
            <div className="bg-construction-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-construction-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Materiais Complementares</h3>
            <p className="text-muted-foreground mb-6">
              Ferramentas práticas para acelerar seu crescimento profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {complementaryMaterials.map((material, index) => (
              <div key={index} className="bg-gradient-card p-4 rounded-lg border border-border/50">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-construction-orange mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{material}</span>
                </div>
                <div className="mt-2 text-construction-orange font-bold">R$ 49,90</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              💡 Dica: Compre junto com qualquer curso e ganhe <strong className="text-construction-orange">50% de desconto</strong>
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsApp}
              className="px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ver Pacotes Completos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;