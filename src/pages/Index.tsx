import DoctorCard from "@/components/DoctorCard";
import LinkButton from "@/components/LinkButton";
import { Calendar, Leaf, ClipboardCheck, BookOpen, Gift, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import leavesBackground from "@/assets/leaves-background.png";

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${leavesBackground})` }}
    >
      {/* Overlay escuro para garantir contraste */}
      <div className="min-h-screen w-full flex flex-col items-center" style={{ background: 'linear-gradient(180deg, rgba(15,30,15,0.55) 0%, rgba(20,35,20,0.75) 50%, rgba(10,20,10,0.85) 100%)' }}>
        <div className="w-full max-w-sm flex flex-col items-center">
          {/* Doctor Photo with Logo */}
          <DoctorCard />

          {/* ===== SEÇÃO 1 – HERO ===== */}
          <div className="w-full px-4 pt-6 pb-4 flex flex-col items-center gap-5">
            {/* Headline */}
            <div
              className="text-center animate-fade-in-up px-6 py-5 rounded-2xl border border-white/15"
              style={{
                animationDelay: "0.4s",
                background: "linear-gradient(145deg, hsla(75, 35%, 28%, 0.95) 0%, hsla(45, 30%, 40%, 0.92) 100%)",
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <p className="flex items-start justify-center gap-2.5 text-white text-lg font-medium leading-relaxed drop-shadow-sm">
                <Leaf className="w-5 h-5 mt-1 text-emerald-300 flex-shrink-0" />
                <span>
                  Invista na saúde do seu sangue
                  <br />
                  com respeito pela vida animal
                </span>
              </p>
            </div>

            {/* Subtitle */}
            <p
              className="text-center text-sm leading-relaxed animate-fade-in-up px-2 font-medium drop-shadow-md"
              style={{ animationDelay: "0.5s", color: "hsl(50, 40%, 90%)" }}
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
                href="https://veg.dramarinasteffli.com.br/ebook"
                icon={<ClipboardCheck className="w-5 h-5" />}
                variant="primary"
              >
                <div className="flex flex-col items-center">
                  <span className="font-semibold">Acessar checklist + mini-guia gratuito</span>
                </div>
              </LinkButton>
            </div>
          </div>

          {/* ===== SEÇÃO 3 – O QUE VAI RECEBER ===== */}
          <div
            className="w-full px-4 pb-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div
              className="rounded-2xl px-5 py-5 space-y-4 border border-white/12"
              style={{
                background: "hsla(0, 0%, 100%, 0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px -6px rgba(0,0,0,0.3)",
              }}
            >
              <h2 className="text-white text-sm font-semibold text-center tracking-widest uppercase">
                O que você vai receber
              </h2>

              <div className="space-y-3.5">
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
                  bold
                />
              </div>
            </div>

            <p className="text-center text-sm leading-relaxed italic mt-4 px-2" style={{ color: "hsl(45, 25%, 78%)" }}>
              Material elaborado por médica hematologista, com foco em saúde do
              sangue sem abrir mão dos seus valores.
            </p>
          </div>

          {/* ===== SEÇÃO 4 – PORTA LATERAL (CONSULTA) ===== */}
          <div
            className="w-full px-4 pb-6 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            {/* Separador visual */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(45, 25%, 65%), transparent)" }} />
              <Stethoscope className="w-4 h-4" style={{ color: "hsl(45, 25%, 70%)" }} />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(45, 25%, 65%), transparent)" }} />
            </div>

            <p className="text-center text-sm mb-3 font-medium" style={{ color: "hsl(45, 20%, 80%)" }}>
              Já decidiu que precisa de avaliação médica?
            </p>

            <LinkButton
              href="https://www.doctoralia.com.br/z/UL6TuH"
              icon={<Calendar className="w-5 h-5" />}
              variant="nude"
            >
              <div className="flex flex-col items-center text-center">
                <span className="font-bold uppercase">Agendar consulta com especialista</span>
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
            <p className="text-xs text-center leading-relaxed" style={{ color: "hsl(45, 15%, 65%)" }}>
              Dra. Marina Steffli – Médica hematologista
              <br />
              CRM-SC 22884 | RQE 18477
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---- Componente auxiliar ---- */
interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
  bold?: boolean;
}

const BenefitItem = ({ icon, text, bold }: BenefitItemProps) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 flex-shrink-0" style={{ color: "hsl(120, 45%, 65%)" }}>{icon}</span>
    <span className={cn("text-white text-sm leading-snug", bold && "font-semibold")}>{text}</span>
  </div>
);

export default Index;
