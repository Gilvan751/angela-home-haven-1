import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import beddingImg from "@/assets/product-bedding.jpg";
import bathImg from "@/assets/product-bath.jpg";
import tableImg from "@/assets/product-table.jpg";
import decorImg from "@/assets/product-decor.jpg";

const products = [
  {
    title: "Roupas de Cama",
    description: "Conforto e Sofisticação para suas Noites",
    image: beddingImg,
    alt: "Roupas de cama premium com lençóis de algodão",
  },
  {
    title: "Roupas de Banho",
    description: "Maciez e Luxo para o seu dia a dia",
    image: bathImg,
    alt: "Toalhas de banho luxuosas e macias",
  },
  {
    title: "Mesa Posta",
    description: "Elegância em Cada Refeição",
    image: tableImg,
    alt: "Mesa posta elegante com toalha e guardanapos",
  },
  {
    title: "Decoração",
    description: "Toques Finais que Encantam",
    image: decorImg,
    alt: "Almofadas e mantas decorativas para sala",
  },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-14 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Explore Nossa Coleção Exclusiva
          </h2>
          <p className="text-foreground max-w-xl mx-auto">
            Peças selecionadas com carinho para transformar cada cômodo do seu lar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="group scroll-animate rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={800}
          height={800}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-heading font-semibold text-secondary mb-1">
          {product.title}
        </h3>
        <p className="text-foreground text-sm mb-4">{product.description}</p>
        <Button variant="hero" size="sm" asChild className="w-full">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Comprar Agora
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
