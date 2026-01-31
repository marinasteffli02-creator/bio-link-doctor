import doctorPhoto from "@/assets/doctor-photo.png";
import logoHematoveg from "@/assets/logo-hematoveg.png";

const DoctorCard = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto animate-fade-in">
      {/* Doctor Photo with gradient fade */}
      <div className="relative overflow-hidden">
        <img
          src={doctorPhoto}
          alt="Dra. Hematologista - HEMATOVEG"
          className="w-full h-auto object-cover"
        />
        
        {/* Gradient overlay for seamless blend */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, hsl(93 32% 26%) 100%)'
          }}
        />
        
        {/* Logo in bottom left corner */}
        <div className="absolute bottom-4 left-4 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <img
            src={logoHematoveg}
            alt="HEMATOVEG Logo"
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
