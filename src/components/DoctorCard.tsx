import doctorPhoto from "@/assets/doctor-photo.png";

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
        
        {/* Gradient overlay for seamless blend with tagline box */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, hsla(75, 35%, 35%, 0.6) 85%, hsla(75, 35%, 35%, 0.95) 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default DoctorCard;
