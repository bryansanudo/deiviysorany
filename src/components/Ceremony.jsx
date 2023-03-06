import React from "react";
import PageSection from "@/components/PageSection";

import armenia from '@/assets/history/armenia.jpg'


const Ceremony = () => {
  const fathers = [
    {
      id: 1,
      src: armenia,
      title: "Texto Relevante",
      
      name: "DD/MM/AA",
    },
    {
      id: 2,
      src: armenia,
      title: "Texto Relevante",
      
      name: "DD/MM/AA",
    },
    {
      id: 3,
      src: armenia,
      title: "Texto Relevante",
      
      name: "DD/MM/AA",
    },
    {
      id: 4,
      src: armenia,
      title: "Texto Relevante",
      
      name: "DD/MM/AA",
    },
    
    
  ];
  const padrinos = [
    {
      id: 1,
      src: armenia,
      title: "padrino",
      
      name: "DD/MM/AA",
    },
    {
      id: 2,
      src: armenia,
      title: "padrino",
      
      name: "DD/MM/AA",
    },
    {
      id: 3,
      src: armenia,
      title: "padrino",
      
      name: "DD/MM/AA",
    },
    {
      id: 4,
      src: armenia,
      title: "padrino",
      
      name: "DD/MM/AA",
    },
    
    
  ];

  return (
    <PageSection
      name="nuestra historia"
      title="Nuestra Historia"
      subtitle={`
      El día que decidimos unir nuestras vidas, lo hicimos con la sincera intención de caminar, reír, llorar y superarlo todo juntos.`}
    >
      <div className="w-full  text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-2">
            {fathers.map(({ id, src, title, name }) => (
              <div
                key={id}
                className="rounded-lg shadow-xl shadow-thPrimary    mx-auto "
              >
                
                  <div className="flex flex-col items-center justify-center  ">
                    <img
                      src={src}
                      className=" object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg text-thPrimary">
                      {title}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{name}</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    
                      </div>
                  </div>
                
              </div>
            ))}
          </div>
          <div className="my-40 mx-8 text-center lg:text-center">
          <h1 className="text-4xl lg:text-5xl">Padrinos</h1>
          
          
        
          <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-2">
            {padrinos.map(({ id, src, title, name }) => (
              <div
                key={id}
                className="rounded-lg shadow-xl shadow-thPrimary    mx-auto "
              >
                
                  <div className="flex flex-col items-center justify-center  ">
                    <img
                      src={src}
                      className=" object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg text-thPrimary">
                      {title}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{name}</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    
                      </div>
                  </div>
                
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Ceremony;
