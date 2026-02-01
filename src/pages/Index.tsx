import DoctorCard from "@/components/DoctorCard";
import LinkButton from "@/components/LinkButton";
import { Calendar, Leaf } from "lucide-react";
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
        
        {/* Content area */}
        <div className="w-full px-4 py-6 flex flex-col items-center gap-6">
          {/* Tagline */}
          <div 
            className="text-center animate-fade-in-up px-6 py-5 rounded-2xl shadow-xl border border-white/10" 
            style={{ 
              animationDelay: '0.4s',
              background: 'linear-gradient(145deg, hsla(75, 30%, 32%, 0.95) 0%, hsla(35, 25%, 55%, 0.9) 100%)',
              boxShadow: '0 8px 32px -8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <p className="flex items-start justify-center gap-2 text-white/95 text-lg leading-relaxed">
              <Leaf className="w-5 h-5 mt-1 text-white/80 flex-shrink-0" />
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
              variant="nude"
            >
              Consulta online especializada
            </LinkButton>
          </div>
          
          {/* Footer */}
          <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/70 text-sm text-center font-medium">
              Dra. Marina Steffli - Hematologista e Vegetariana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
