import { Button } from "@/components/ui/button";
import { Phone, Clock, Gift, Zap } from "lucide-react";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-surface via-background to-dark-elevated relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-construction-orange/5 via-transparent to-construction-blue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency header */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-full px-6 py-2 inline-block mb-8">
            <div className="flex items-center gap-2 text-destructive font-semibold">
              <Clock className="w-4 h-4" />
              <span>OFERTA POR TEMPO LIMITADO</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transforme Sua Vida
            </span>
            <br />
            Ainda Hoje!
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Não perca mais tempo com agenda vazia. <strong className="text-construction-orange">Comece hoje</strong> a atrair clientes automaticamente com o Google Meu Negócio.
          </p>

          {/* Value proposition */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card border border-construction-orange/20">
              <Gift className="w-8 h-8 text-construction-orange mx-auto mb-3" />
              <h3 className="font-bold text-construction-orange mb-2">BÔNUS EXCLUSIVO</h3>
              <p className="text-sm text-muted-foreground">Templates prontos para usar</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card border border-construction-blue/20">
              <Zap className="w-8 h-8 text-construction-blue mx-auto mb-3" />
              <h3 className="font-bold text-construction-blue mb-2">RESULTADO RÁPIDO</h3>
              <p className="text-sm text-muted-foreground">Primeiros clientes em 7 dias</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card border border-primary/20">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-primary mb-2">SUPORTE TOTAL</h3>
              <p className="text-sm text-muted-foreground">Acompanhamento personalizado</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-xl px-12 py-8 mx-auto block w-full max-w-md shadow-cta hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              QUERO LOTAR MINHA AGENDA
            </Button>

            <p className="text-sm text-muted-foreground">
              ✅ Acesso imediato por WhatsApp<br />
              ✅ Método testado e comprovado<br />
              ✅ Suporte até você ter resultado
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-12 p-6 bg-gradient-card rounded-2xl border border-border/50">
            <div className="flex items-center justify-center gap-3 text-construction-orange">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">WhatsApp: (47) 99999-9999</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Respondemos em até 5 minutos durante horário comercial
            </p>
          </div>

          {/* Final urgency */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-destructive">
              ⚠️ Vagas limitadas! Não deixe para amanhã o que pode mudar sua vida hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;