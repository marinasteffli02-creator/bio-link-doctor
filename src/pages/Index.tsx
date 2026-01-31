import DoctorCard from "@/components/DoctorCard";
import LinkButton from "@/components/LinkButton";
import { Calendar, Leaf } from "lucide-react";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start px-4 py-8 sm:py-12"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Doctor Photo with Logo */}
        <DoctorCard />
        
        {/* Tagline */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="flex items-start justify-center gap-2 text-foreground text-lg leading-relaxed">
            <Leaf className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
            <span>
              Invista na saúde do seu sangue<br />
              com respeito pela vida animal
            </span>
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="w-full space-y-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <LinkButton 
            href="https://www.doctoralia.com.br/z/UL6TuH"
            icon={<Calendar className="w-5 h-5" />}
            variant="secondary"
          >
            Consulta online especializada
          </LinkButton>
        </div>
        
        {/* Footer */}
        <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground text-xs text-center">
            Hematologia • Medicina Integrativa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
