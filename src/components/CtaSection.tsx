import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 text-center max-w-2xl scroll-animate">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
          Pronta para Renovar Seu Lar?
        </h2>
        <p className="text-secondary-foreground/80 mb-10 text-lg">
          Visite nossa loja virtual e descubra a coleção completa de enxovais que vão trazer mais beleza, 
          conforto e sofisticação para o seu dia a dia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild className="px-10 py-6 text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Ir para a Loja Virtual
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="px-10 py-6 text-lg">
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
