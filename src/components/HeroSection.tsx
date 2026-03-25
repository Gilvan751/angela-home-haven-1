import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bedroom.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Quarto elegante decorado com enxovais premium Angela Enxovais"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up">
          Transforme Seu Lar em um Refúgio de Conforto e Elegância
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Descubra a coleção exclusiva de enxovais que une design sofisticado, qualidade premium e o toque de aconchego que você merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" asChild className="px-10 py-6 text-lg">
            <a href="#produtos">Explore Nossas Coleções</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
