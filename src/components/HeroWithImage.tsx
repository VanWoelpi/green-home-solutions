import React from "react";

interface HeroWithImageProps {
  title: string;
  description: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const HeroWithImage = ({ title, description, backgroundImage, children }: HeroWithImageProps) => {
  return (
      <section
          className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Fading Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-900 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent z-10" />

        {/* Content */}
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">{description}</p>
            {children}
          </div>
        </div>
      </section>
  );
};

export default HeroWithImage;
