import aboutImage from "@/assets/about-image.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div ref={ref} className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center scroll-animate">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
            Nossa História: Paixão por Detalhes que Transformam
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A Angela Enxovais nasceu do desejo de oferecer muito mais do que simples peças para o lar. 
            Acreditamos que cada detalhe importa — desde a escolha dos tecidos até o acabamento final — 
            e que um ambiente bem cuidado tem o poder de transformar o dia a dia.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Nossa curadoria une design contemporâneo, materiais de alta qualidade e o cuidado artesanal 
            que só quem é apaixonado pelo que faz consegue entregar. Cada peça é selecionada para trazer 
            beleza, conforto e durabilidade ao seu lar.
          </p>
          <p className="text-foreground leading-relaxed">
            Mais do que enxovais, oferecemos a experiência de viver em um ambiente que inspira, 
            acolhe e encanta — todos os dias.
          </p>
        </div>
        <div className="relative">
          <img
            src={aboutImage}
            alt="Dedicação e cuidado na seleção de tecidos premium"
            className="rounded-lg shadow-lg w-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
