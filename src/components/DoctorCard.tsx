import doctorPhoto from "@/assets/doctor-photo.png";
import logoHematoveg from "@/assets/logo-hematoveg.png";

const DoctorCard = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto animate-fade-in">
      {/* Doctor Photo */}
      <div className="relative overflow-hidden rounded-2xl shadow-soft">
        <img
          src={doctorPhoto}
          alt="Dra. Hematologista - HEMATOVEG"
          className="w-full h-auto object-cover"
        />
        
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 shadow-soft animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <img
              src={logoHematoveg}
              alt="HEMATOVEG Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
