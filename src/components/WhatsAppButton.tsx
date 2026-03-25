import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "552166981343075";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Angela Enxovais.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-[#fff] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 bg-secondary text-secondary-foreground text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Precisa de ajuda? Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;
