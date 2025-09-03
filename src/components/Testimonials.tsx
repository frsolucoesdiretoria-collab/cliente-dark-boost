import { Star, Quote } from "lucide-react";
import happyWorker from "@/assets/happy-worker.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      profession: "Eletricista",
      location: "São Paulo - SP",
      text: "Fiz o curso técnico e o de vendas. Em 3 meses aumentei minha renda em 400%. Agora tenho agenda lotada e cobro o que mereço!",
      rating: 5,
      image: happyWorker
    },
    {
      name: "João Santos",
      profession: "Eletricista",
      location: "Rio de Janeiro - RJ",
      text: "O curso de gestão me ensinou a abrir minha empresa. Hoje tenho 3 funcionários e faturamento mensal de R$ 25 mil!",
      rating: 5,
      image: happyWorker
    },
    {
      name: "Pedro Costa",
      profession: "Eletricista",
      location: "Belo Horizonte - MG",
      text: "Comecei do zero no curso técnico. Hoje sou especialista em automação residencial e ganho R$ 8 mil por mês!",
      rating: 5,
      image: happyWorker
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Histórias de <span className="bg-gradient-hero bg-clip-text text-transparent">Transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossos alunos revolucionaram suas carreiras e multiplicaram suas rendas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 relative overflow-hidden group hover:shadow-glow transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-construction-orange" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-construction-orange text-construction-orange" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-construction-orange/30"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-construction-orange rounded-full p-1">
                    <Star className="w-3 h-3 text-primary-foreground fill-current" />
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-construction-orange">{testimonial.profession}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 bg-gradient-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-orange mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Alunos Capacitados</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-construction-blue mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-muted-foreground">Cursos Disponíveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;