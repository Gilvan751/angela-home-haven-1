import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-4">
              Angela Enxovais
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Transformando lares com enxovais de qualidade premium, design exclusivo e conforto inigualável.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trocas e Devoluções</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>angelaamaradejesussouss@gmail.com</li>
              <li>(66) 98134-3075</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Angela Enxovais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
