import DoctorCard from "@/components/DoctorCard";
import LinkButton from "@/components/LinkButton";
import { Calendar, Leaf, ClipboardCheck, BookOpen, Gift, Stethoscope } from "lucide-react";
import leavesBackground from "@/assets/leaves-background.png";

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${leavesBackground})` }}
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Doctor Photo with Logo */}
        <DoctorCard />

        {/* ===== SEÇÃO 1 – HERO ===== */}
        <div className="w-full px-4 pt-6 pb-4 flex flex-col items-center gap-5">
          {/* Headline */}
          <div
            className="text-center animate-fade-in-up px-6 py-5 rounded-2xl shadow-xl border border-white/10"
            style={{
              animationDelay: "0.4s",
              background:
                "linear-gradient(145deg, hsla(75, 30%, 32%, 0.95) 0%, hsla(35, 25%, 55%, 0.9) 100%)",
              boxShadow:
                "0 8px 32px -8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <p className="flex items-start justify-center gap-2 text-white/95 text-lg leading-relaxed">
              <Leaf className="w-5 h-5 mt-1 text-white/80 flex-shrink-0" />
              <span>
                Invista na saúde do seu sangue
                <br />
                com respeito pela vida animal
              </span>
            </p>
          </div>

          {/* Subtitle */}
          <p
            className="text-center text-white/80 text-sm leading-relaxed animate-fade-in-up px-2"
            style={{ animationDelay: "0.5s" }}
          >
            Checklist médico para identificar sinais de anemia e ferro baixo em
            vegetarianas e veganas.
          </p>

          {/* CTA principal – Isca digital */}
          <div
            className="w-full animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <LinkButton
              href="https://www.doctoralia.com.br/z/UL6TuH"
              icon={<ClipboardCheck className="w-5 h-5" />}
              variant="primary"
            >
              <div className="flex flex-col items-center">
                <span>Acessar checklist + mini-guia gratuito</span>
              </div>
            </LinkButton>
          </div>
        </div>

        {/* ===== SEÇÃO 2 – MICRO-AUTORIDADE ===== */}
        <div
          className="w-full px-6 pb-5 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="text-center text-white/65 text-xs leading-relaxed italic">
            Material elaborado por médica hematologista, com foco em saúde do
            sangue sem abrir mão dos seus valores.
          </p>
        </div>

        {/* ===== SEÇÃO 3 – O QUE VAI RECEBER ===== */}
        <div
          className="w-full px-4 pb-6 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div
            className="rounded-2xl px-5 py-5 space-y-4 border border-white/10"
            style={{
              background:
                "linear-gradient(160deg, hsla(140, 20%, 18%, 0.85) 0%, hsla(85, 15%, 22%, 0.8) 100%)",
              boxShadow: "0 4px 24px -6px rgba(0,0,0,0.25)",
            }}
          >
            <h2 className="text-white/90 text-sm font-medium text-center tracking-wide uppercase">
              O que você vai receber
            </h2>

            <div className="space-y-3">
              <BenefitItem
                icon={<ClipboardCheck className="w-4 h-4" />}
                text="Checklist de sintomas de anemia e ferro baixo"
              />
              <BenefitItem
                icon={<BookOpen className="w-4 h-4" />}
                text="Mini-guia explicativo sobre anemia e falta de ferro"
              />
              <BenefitItem
                icon={<Gift className="w-4 h-4" />}
                text="Bônus: Curadoria de produtos veganos e cruelty-free"
              />
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4 – PORTA LATERAL (CONSULTA) ===== */}
        <div
          className="w-full px-4 pb-6 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          {/* Separador visual */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-white/15" />
            <Stethoscope className="w-4 h-4 text-white/30" />
            <div className="flex-1 h-px bg-white/15" />
          </div>

          <p className="text-center text-white/60 text-sm mb-3">
            Já decidiu que precisa de avaliação médica?
          </p>

          <LinkButton
            href="https://www.doctoralia.com.br/z/UL6TuH"
            icon={<Calendar className="w-5 h-5" />}
            variant="nude"
          >
            <div className="flex flex-col items-center">
              <span>Agendar consulta online especializada</span>
              <span className="text-xs opacity-75 font-normal">
                Clique aqui para agendar
              </span>
            </div>
          </LinkButton>
        </div>

        {/* ===== SEÇÃO 5 – RODAPÉ DE AUTORIDADE ===== */}
        <div
          className="w-full px-4 pb-8 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-white/50 text-xs text-center leading-relaxed">
            Dra. Marina Steffli – Médica hematologista
            <br />
            CRM-SC 22884 | RQE 18477
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---- Componente auxiliar ---- */
interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
}

const BenefitItem = ({ icon, text }: BenefitItemProps) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 text-accent flex-shrink-0 opacity-80">{icon}</span>
    <span className="text-white/85 text-sm leading-snug">{text}</span>
  </div>
);

export default Index;
