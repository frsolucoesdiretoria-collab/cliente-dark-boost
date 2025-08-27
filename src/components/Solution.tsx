import { CheckCircle, Smartphone, MapPin, Star } from "lucide-react";
import gmbScreenshot from "@/assets/gmb-screenshot.jpg";

const Solution = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-dark-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={gmbScreenshot} 
                alt="Interface do Google Meu Negócio"
                className="w-full rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-gradient-cta p-6 rounded-2xl shadow-cta animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">+300%</div>
                <div className="text-sm text-primary-foreground/80">Mais Clientes</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-gradient-hero p-6 rounded-2xl shadow-glow animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-primary-foreground fill-current" />
                <div>
                  <div className="text-xl font-bold text-primary-foreground">4.9★</div>
                  <div className="text-xs text-primary-foreground/80">Avaliações</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                A <span className="bg-gradient-hero bg-clip-text text-transparent">Solução</span> que Você Precisa
              </h2>
              <p className="text-xl text-muted-foreground">
                O <strong className="text-construction-orange">Google Meu Negócio</strong> é a ferramenta gratuita que pode transformar completamente seu negócio.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Apareça no Google</h3>
                  <p className="text-muted-foreground">Quando alguém pesquisar "eletricista perto de mim", você aparecerá primeiro.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-construction-blue/10 p-2 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Clientes da Sua Região</h3>
                  <p className="text-muted-foreground">Atraia clientes próximos à você, reduzindo deslocamento e aumentando lucro.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-construction-orange/10 p-2 rounded-full flex-shrink-0">
                  <Star className="w-6 h-6 text-construction-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Credibilidade Automática</h3>
                  <p className="text-muted-foreground">Avaliações e fotos dos seus trabalhos geram confiança instantânea.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">100% Gratuito</h3>
                  <p className="text-muted-foreground">Não precisa pagar por anúncios. O Google faz a divulgação para você.</p>
                </div>
              </div>
            </div>

            {/* Success metric */}
            <div className="bg-gradient-card p-6 rounded-2xl border border-construction-orange/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-construction-orange mb-2">92%</div>
                <p className="text-muted-foreground">
                  dos nossos alunos relataram aumento significativo de clientes em 30 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;