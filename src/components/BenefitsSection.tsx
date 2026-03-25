import { Award, Palette, Heart, Home } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Award,
    title: "Qualidade Premium",
    text: "Materiais selecionados para durabilidade e toque incomparável.",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    text: "Peças que combinam as últimas tendências com elegância atemporal.",
  },
  {
    icon: Heart,
    title: "Conforto Inigualável",
    text: "Toque macio e aconchegante para o seu bem-estar.",
  },
  {
    icon: Home,
    title: "Transformação do Lar",
    text: "Crie ambientes que inspiram e acolhem.",
  },
];

const BenefitsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-14 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Por que escolher Angela Enxovais?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="scroll-animate text-center p-6"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <benefit.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-secondary mb-2">{benefit.title}</h3>
      <p className="text-foreground text-sm">{benefit.text}</p>
    </div>
  );
};

export default BenefitsSection;
