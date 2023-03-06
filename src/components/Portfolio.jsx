import React from "react";
import PageSection from "@/components/PageSection";

import iglesia from '@/assets/itinerario/iglesia.jpg'
import fotos from '@/assets/itinerario/fotos.jpg'
import entradaNovios from '@/assets/itinerario/entradaNovios.jpg'
import cena from '@/assets/itinerario/cena.jpg'
import vela from '@/assets/itinerario/vela.jpg'
import fiesta from '@/assets/itinerario/fiesta.jpg'
import despedida from '@/assets/itinerario/despedida.jpg'



import { useState } from "react";



import {  GrLinkPrevious,GrLinkNext } from "react-icons/gr";
import {  FaBaby } from "react-icons/fa";



const ARRAY_IMG = [
  iglesia,fotos,entradaNovios,cena,vela,fiesta,despedida
]

const Portfolio = () => {
  const [index, setIndex] = useState(0);
    const handleClickNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };

  return (
    <>
    <h1 className="text-black" name="itinerario">
        .
      </h1>
    <div className="max-w-screen-xl mx-auto h-fit" >
        <div className="my-40 mx-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-center">Itinerario</h1>
          <div className="my-8 flex flex-col gap-5 items-center justify-center font-semibold">Adoramos a los niños, pero creemos que merecen descansar  ¡Niños, dulces sueños! <FaBaby size={40}/> </div>
            
          <p className="font-semibold my-8 text-center">( solo adultos)</p>
      
        <div className="flex  justify-center items-center  md:gap-20 gap-4 mx-8">
          
            
           
            <button className="flex  items-center justify-center  " onClick={handleClickPrev}>
                    <GrLinkPrevious size={40} />
                </button>
            <img
                src={ARRAY_IMG[index]}
               /*  className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer rounded-md  2xl:max-h-[500px]" */
                className="rounded-lg shadow-xl shadow-thPrimary  object-cover "
            />
            
                
                <button
                    className=" flex  items-center justify-center"
                    onClick={handleClickNext}
                >
                    <GrLinkNext size={40} />
                </button>
           
           
          
        </div>
        </div>
      
        </div>
        </>
  );
};

export default Portfolio;
