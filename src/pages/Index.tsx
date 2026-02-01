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
            className="text-center animate-fade-in-up px-5 py-4 rounded-2xl backdrop-blur-sm shadow-lg" 
            style={{ 
              animationDelay: '0.4s',
              background: 'linear-gradient(135deg, hsla(75, 35%, 35%, 0.95), hsla(85, 30%, 28%, 0.95))'
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
            <p className="text-white/60 text-xs text-center">
              Hematologia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
