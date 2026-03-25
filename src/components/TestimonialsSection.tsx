import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Ana Paula S.",
    text: "As roupas de cama da Angela Enxovais são simplesmente maravilhosas! A qualidade do tecido e o caimento são impecáveis. Sinto que meu quarto se transformou.",
    initials: "AP",
  },
  {
    name: "Mariana L.",
    text: "Comprei as toalhas de banho e fiquei encantada com a maciez. São lindas, duráveis e fazem toda a diferença no banheiro. Super recomendo!",
    initials: "ML",
  },
  {
    name: "Fernanda R.",
    text: "A mesa posta com os produtos da Angela Enxovais ficou um charme! Recebi muitos elogios dos convidados. Qualidade e beleza em cada detalhe.",
    initials: "FR",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-14 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            O que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="scroll-animate bg-card rounded-lg p-8 shadow-md"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
          {testimonial.initials}
        </div>
        <span className="font-semibold text-secondary text-sm">{testimonial.name}</span>
      </div>
    </div>
  );
};

export default TestimonialsSection;
