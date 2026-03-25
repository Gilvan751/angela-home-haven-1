import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000),
});

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-xl">
        <div ref={ref} className="scroll-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4 text-center">
            Entre em Contato
          </h2>
          <p className="text-foreground text-center mb-10">
            Tem alguma dúvida? Envie sua mensagem e responderemos o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Seu Nome"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="bg-background"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu E-mail"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="bg-background"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                placeholder="Assunto"
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                className="bg-background"
              />
              {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <Textarea
                placeholder="Sua Mensagem"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="bg-background min-h-[120px]"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
