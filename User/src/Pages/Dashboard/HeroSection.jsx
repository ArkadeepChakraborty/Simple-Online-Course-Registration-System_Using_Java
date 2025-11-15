const HeroSection = () => {
  return (
    <section
      className="h-[80vh] flex flex-col items-center justify-center text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url("/photo-1529070538774-1843cb3265df.avif")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          The Best Online Course Platform
        </h1>
        <p className="text-lg text-center max-w-2xl">
          CPC Courses — Learn Online, Grow Faster, Upgrade Skills
        </p>
      </div>
    </section>
  );
};

export default HeroSection;