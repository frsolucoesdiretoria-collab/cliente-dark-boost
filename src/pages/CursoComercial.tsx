import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, TrendingUp, Target, Calendar, Gift, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CursoComercial = () => {
  const navigate = useNavigate();
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  const targetAudience = [
    "Está com agenda vazia e vive esperando indicação",
    "Aceita qualquer serviço, mesmo os que pagam mal, só para não ficar parado",
    "Perde clientes bons para a concorrência",
    "Quer recusar projetos ruins e só pegar trabalhos bem pagos",
    "Sonha em ser referência na cidade e dar mais conforto para a família"
  ];

  const learningTopics = [
    {
      title: "Google Meu Negócio",
      description: "Passo a passo para aparecer no mapa do Google e ser encontrado pelos clientes certos"
    },
    {
      title: "Google Ads",
      description: "Como criar anúncios que só atraem clientes de qualidade, sem desperdiçar seu dinheiro"
    },
    {
      title: "Instagram Profissional",
      description: "Transforme seu perfil em uma vitrine que gera orçamentos todos os dias"
    },
    {
      title: "Orçamentos Lucrativos",
      description: "Aprenda a cobrar certo e a dizer NÃO para serviços que não valem a pena"
    },
    {
      title: "Filtro de Clientes",
      description: "Como escolher os melhores trabalhos e montar uma agenda lotada sem se matar de trabalhar"
    }
  ];

  const results = [
    {
      period: "Primeira Semana",
      result: "Você já começa a receber contatos e orçamentos no WhatsApp"
    },
    {
      period: "30 Dias",
      result: "Agenda cheia, podendo recusar serviços ruins e escolher os melhores clientes"
    },
    {
      period: "Meta Realista",
      result: "Sair dos R$3.500 e chegar a R$8.000 ou mais por mês"
    }
  ];

  const bonuses = [
    "Planilha de Orçamento Automático – precifique em minutos, sem medo de cobrar caro",
    "Modelo de Anúncio Pronto – copie e cole para atrair clientes no Google e Instagram",
    "Mini-Mentoria Online – sessão ao vivo para revisar seus anúncios e orçamentos"
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
            <div className="bg-construction-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-construction-blue" />
            </div>
            
            <div className="bg-construction-blue/20 text-construction-blue px-6 py-3 rounded-full inline-block mb-6 font-bold">
              ⚡ Lote Sua Agenda e Pare de Aceitar Serviços Baratos
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Curso Comercial <span className="bg-gradient-hero bg-clip-text text-transparent">Avançado</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-construction-blue font-semibold mb-6">
              para Eletricistas
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprenda a atrair clientes todos os dias, cobrar o que você merece e encher sua agenda 
              de serviços lucrativos — <strong className="text-construction-blue">mesmo que você esteja começando do zero</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">R$ 297</div>
                <div className="text-lg text-muted-foreground line-through">R$ 497</div>
              </div>
              <div className="bg-construction-blue text-primary-foreground px-6 py-3 rounded-full font-bold">
                40% DE DESCONTO
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-xl px-12 py-6 mb-8"
            >
              <Phone className="w-6 h-6 mr-3" />
              Quero Lotar Minha Agenda Agora
            </Button>

            <div className="bg-construction-blue/10 p-4 rounded-lg inline-block">
              <p className="text-sm text-construction-blue font-semibold">
                Garantia incondicional de 7 dias – se não gostar, devolvemos seu dinheiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              🔧 Este Curso é Para <span className="text-construction-blue">Você Que…</span>
            </h3>
            
            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-card p-6 rounded-xl border border-border/50">
                  <Target className="w-6 h-6 text-construction-blue mt-1 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai dominar */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ✅ O que você vai <span className="text-construction-blue">dominar</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {learningTopics.map((topic, index) => (
                <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <h4 className="text-xl font-bold text-construction-blue mb-3">{topic.title}</h4>
                  <p className="text-muted-foreground">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Rápidos */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              🚀 <span className="text-construction-blue">Resultados</span> Rápidos
            </h3>
            
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-construction-blue/20 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-construction-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-construction-blue mb-2">{result.period}</h4>
                      <p className="text-lg">{result.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Exclusivo */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
              🎁 Bônus <span className="text-construction-blue">Exclusivo</span>
            </h3>
            
            <div className="text-center mb-12">
              <div className="bg-red-500/20 text-red-400 px-6 py-3 rounded-full inline-block font-bold">
                ⚠️ Somente Hoje - Bônus disponível só até hoje às 23h59
              </div>
            </div>
            
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-card p-6 rounded-xl border border-construction-blue/20">
                  <Gift className="w-6 h-6 text-construction-blue mt-1 flex-shrink-0" />
                  <p className="text-lg">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-construction-blue/20 via-construction-blue/10 to-construction-blue/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pare de trabalhar por <span className="text-construction-blue">preços baixos</span>
            </h3>
            
            <p className="text-xl mb-8 leading-relaxed">
              Encha sua agenda de clientes e cobre o que você merece.
            </p>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-foreground mb-2">R$ 297</div>
              <div className="text-xl text-muted-foreground line-through mb-4">R$ 497</div>
              <div className="bg-construction-blue text-primary-foreground px-6 py-3 rounded-full font-bold inline-block mb-4">
                ECONOMIA DE R$ 200
              </div>
              <div className="text-sm text-muted-foreground">
                À vista ou em até 12x no cartão
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-xl px-12 py-6 mb-6"
            >
              <Phone className="w-6 h-6 mr-3" />
              🔶 QUERO LOTAR MINHA AGENDA AGORA
            </Button>

            <div className="bg-construction-blue/10 p-6 rounded-lg">
              <p className="text-construction-blue font-semibold mb-2">
                ✅ Garantia incondicional de 7 dias
              </p>
              <p className="text-sm text-muted-foreground">
                Se não gostar, devolvemos seu dinheiro. Entre em contato: <strong>(47) 99999-9999</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursoComercial;