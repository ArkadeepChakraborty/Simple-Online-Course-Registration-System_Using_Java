import React from 'react';

export default function Hero() {
  return (
    <section
      className="h-[70vh] flex flex-col items-center justify-center text-white bg-cover bg-center relative rounded-lg overflow-hidden shadow-md"
      style={{
        backgroundImage: `url("/OC1.jpg")`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to CPC Education Admin
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Manage courses and users efficiently — simple, fast, and secure.
        </p>
      </div>
    </section>
  );
}
