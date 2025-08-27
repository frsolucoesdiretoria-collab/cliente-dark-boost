import { Button } from "@/components/ui/button";
import { Phone, Star, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-dark-surface to-dark-elevated" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF8A00' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm10 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Lote Sua Agenda
                </span>
                <br />
                <span className="text-foreground">
                  de Clientes em 30 Dias
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Aprenda o método exclusivo para criar um perfil no <strong className="text-construction-orange">Google Meu Negócio</strong> que atrai clientes automaticamente para eletricistas, encanadores e pedreiros.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-construction-orange" />
                </div>
                <div className="text-2xl font-bold text-construction-orange">500+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-construction-blue" />
                </div>
                <div className="text-2xl font-bold text-construction-blue">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <div className="flex justify-center mb-2">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">Dias</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleWhatsApp}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Quero Lotar Minha Agenda
              </Button>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-construction-orange text-construction-orange" />
                ))}
              </div>
              <span>Mais de 500 profissionais já transformaram seus negócios</span>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Profissional da construção usando Google Meu Negócio"
                className="w-full rounded-2xl shadow-glow animate-float"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-cta p-4 rounded-full shadow-cta animate-float" style={{animationDelay: '2s'}}>
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-hero p-4 rounded-full shadow-glow animate-float" style={{animationDelay: '4s'}}>
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;