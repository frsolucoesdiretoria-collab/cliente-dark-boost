import { AlertTriangle, Clock, TrendingDown, Phone } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-surface to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-destructive">Cansado</span> de ficar sem clientes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você é um excelente profissional, mas ainda depende de indicações e tem dificuldade para encontrar novos clientes...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 text-center">
            <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">Agenda Vazia</h3>
            <p className="text-muted-foreground">
              Passa dias sem trabalho, dependendo apenas de indicações que nem sempre chegam.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 text-center">
            <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">Tempo Perdido</h3>
            <p className="text-muted-foreground">
              Gasta horas procurando trabalho ao invés de fazer o que sabe fazer melhor.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 text-center">
            <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">Renda Instável</h3>
            <p className="text-muted-foreground">
              Sem previsibilidade de trabalho, fica difícil planejar o futuro da família.
            </p>
          </div>
        </div>

        {/* Pain amplifier */}
        <div className="mt-16 bg-destructive/5 border border-destructive/20 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-destructive mb-4">
            E quando o telefone não toca...
          </h3>
          <p className="text-lg text-muted-foreground">
            Você se pergunta: <strong>"Como outros profissionais conseguem ter agenda lotada enquanto eu fico aqui esperando?"</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;