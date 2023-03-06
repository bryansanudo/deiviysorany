import React from "react";
import PageSection from "@/components/PageSection";

import iglesia from '@/assets/itinerario/iglesia.jpg'
import fotos from '@/assets/itinerario/fotos.jpg'
import entradaNovios from '@/assets/itinerario/entradaNovios.jpg'
import cena from '@/assets/itinerario/cena.jpg'
import vela from '@/assets/itinerario/vela.jpg'
import fiesta from '@/assets/itinerario/fiesta.jpg'
import despedida from '@/assets/itinerario/despedida.jpg'
import FuncionSlide from '@/components/slide/FuncionSlide'


const ARRAY_IMG = [
  iglesia,fotos,entradaNovios,cena,vela,fiesta,despedida
]

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: iglesia,
      title: "Iglesia",
      
      hour: "3:00 PM",
    },
    {
      id: 2,
      src: fotos,
      title: "Fotos",
      
      hour: "4:00 PM",
    },
    {
      id: 3,
      src: entradaNovios,
      title: "Entrada Novios",
      
      hour: "6:00 PM",
    },
    {
      id: 4,
      src: cena,
      title: "cena",
      
      hour: "7:30 PM",
    },
    {
      id: 5,
      src: vela,
      title: "Vela",
      
      hour: "8:30 PM",
    },
    {
      id: 6,
      src: fiesta,
      title: "Fiesta",
      
      hour: "9:00 PM",
    },
    {
      id: 7,
      src: despedida,
      title: "Despedida",
      
      hour: "10:30 PM",
    },
    
  ];

  return (
    <PageSection
      name="itinerario"
      title="Itinerario"
      subtitle={`
      Me apasiona crear soluciones creativas e innovadoras para mis clientes y hacer que sus proyectos sean únicos y exitosos. En este portafolio, encontrarás una breve selección de mis trabajos.`}
    >
      <div className="w-full  ">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-4">
            {/* {portfolios.map(({ id, src, title, hour }) => (
              <div
                key={id}
                className="rounded-lg shadow-xl shadow-thPrimary w-[200px]  mx-auto "
              >
                
                  <div className="flex flex-col items-center justify-center  ">
                    <img
                      src={src}
                      className=" object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg font-semibold ">
                      {title}
                    </p>
                    <p className="m-4 text-sm md:text-lg font-semibold">{hour}</p>
                  </div>
                
              </div>
            ))} */}
            <FuncionSlide ARRAY_IMG={ARRAY_IMG} />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Portfolio;
