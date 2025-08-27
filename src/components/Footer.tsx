import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999', '_blank');
  };

  return (
    <footer className="bg-dark-elevated border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              GMB Pro Training
            </h3>
            <p className="text-muted-foreground">
              Especialistas em Google Meu Negócio para profissionais da construção civil.
            </p>
            <p className="text-sm text-muted-foreground">
              Transformamos eletricistas, encanadores e pedreiros em empresários de sucesso.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-muted-foreground hover:text-construction-orange transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>(47) 99999-9999</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@gmbpro.com.br</span>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Atendimento Nacional</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Informações</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✅ Método 100% Online</p>
              <p>✅ Suporte via WhatsApp</p>
              <p>✅ Resultados em 7-30 dias</p>
              <p>✅ Acompanhamento personalizado</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 GMB Pro Training. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-construction-orange transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors duration-300">
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;