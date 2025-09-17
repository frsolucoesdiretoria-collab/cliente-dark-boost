import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Award, Clock, Users, BookOpen, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CursoTecnico = () => {
  const navigate = useNavigate();
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  const features = [
    "Fundamentos da Eletricidade: tensão, corrente, resistência, normas NR 10 e segurança completa",
    "Instalações básicas e complexas: tomadas, disjuntores, iluminação, painéis elétricos residenciais e prediais",
    "Leitura e interpretação de projetos elétricos",
    "Dimensionamento de condutores, cálculo de carga e proteção elétrica",
    "Boas práticas de manutenção, identificação de falhas e consertos rápidos",
    "Atendimento ao cliente, orçamento profissional e precificação que cobre seus custos e multiplica seu lucro",
    "Como organizar seu negócio de eletricista: suprimentos, logística, equipe, formalização"
  ];

  const benefits = [
    "Certificado reconhecido que abre portas no mercado",
    "Ambiente de aprendizagem prático: muitos exercícios reais e casos do dia a dia",
    "Acesso vitalício: você pode rever as aulas quando quiser",
    "Suporte especializado para tirar dúvidas sempre que precisar",
    "Foco em resultados financeiros concretos: agenda cheia, clientes fiéis e faturamento consistente"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-dark-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-construction-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-construction-orange" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Curso Técnico <span className="bg-gradient-hero bg-clip-text text-transparent">Profissionalizante</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-construction-orange font-semibold mb-6">
              Torne-se um Eletricista Completo e Lucrativo
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Domine as Instalações Residenciais, Prediais e Comerciais, ganhe autonomia, 
              encha sua agenda de clientes e fature <strong className="text-construction-orange">R$4.000 ou mais por mês</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">R$ 180</div>
                <div className="text-lg text-muted-foreground line-through">R$ 350</div>
              </div>
              <div className="bg-construction-orange text-primary-foreground px-6 py-3 rounded-full font-bold">
                48% DE DESCONTO
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-xl px-12 py-6 mb-8"
            >
              <Phone className="w-6 h-6 mr-3" />
              Quero Começar Hoje e Lucrar Mais!
            </Button>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-construction-orange" />
                <span>Certificado Reconhecido</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-construction-orange" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-construction-orange" />
                <span>Suporte Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que você vai <span className="text-construction-orange">aprender</span>
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-card p-6 rounded-xl border border-border/50">
                  <CheckCircle className="w-6 h-6 text-construction-orange mt-1 flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que este curso é ideal */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Por que este curso é <span className="text-construction-orange">ideal para você</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-construction-orange mt-1 flex-shrink-0" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              🚀 <span className="text-construction-orange">Resultados</span> que você pode alcançar
            </h3>
            
            <div className="bg-gradient-card rounded-xl border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 bg-red-500/10">
                  <h4 className="text-xl font-bold mb-6 text-red-400">Situação Agora</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <span>Depende de indicação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <span>Preços baratos, muito esforço</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <span>Só você trabalhando</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 bg-construction-orange/10">
                  <h4 className="text-xl font-bold mb-6 text-construction-orange">Em Pouco Tempo</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange mt-0.5 flex-shrink-0" />
                      <span>Você gerencia anúncios e atrai clientes diretamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange mt-0.5 flex-shrink-0" />
                      <span>Você cobra o que merece, e fatura muito mais com menos correria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange mt-0.5 flex-shrink-0" />
                      <span>Você monta uma equipe ou auxiliares e fatura mesmo quando não está em campo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              🎯 Para quem é <span className="text-construction-orange">este curso</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                <p className="text-lg">Quem está começando em elétrica e quer entrar forte no mercado</p>
              </div>
              <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                <p className="text-lg">Eletricistas que já trabalham mas não sabem organizar seu negócio ou cobrar bem</p>
              </div>
              <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                <p className="text-lg">Profissionais que querem crescer, ter estabilidade financeira e reconhecimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-construction-orange/20 via-construction-orange/10 to-construction-orange/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🔥 Oferta <span className="text-construction-orange">Especial</span>
            </h3>
            
            <p className="text-xl mb-8 leading-relaxed">
              Inscreva-se nas próximas <strong className="text-construction-orange">72 horas</strong> e garanta 
              desconto de <strong className="text-construction-orange">30%</strong> + bloco bônus: 
              planilha de precificação + guia "Como montar sua agenda cheia" de brinde. 
              <strong className="text-construction-orange">Vagas limitadas</strong> para manter a qualidade.
            </p>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-foreground mb-2">R$ 180</div>
              <div className="text-xl text-muted-foreground line-through mb-4">R$ 350</div>
              <div className="bg-construction-orange text-primary-foreground px-6 py-3 rounded-full font-bold inline-block">
                ECONOMIA DE R$ 170
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-xl px-12 py-6 mb-6"
            >
              <Phone className="w-6 h-6 mr-3" />
              Quero Começar Hoje e Lucrar Mais!
            </Button>

            <p className="text-sm text-muted-foreground">
              💬 Entre em contato pelo WhatsApp: <strong>(47) 99999-9999</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursoTecnico;