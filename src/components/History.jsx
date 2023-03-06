import React from "react";
import PageSection from "@/components/PageSection";

import armenia from '@/assets/history/armenia.jpg'
import bolivia from '@/assets/history/bolivia.jpg'
import cali from '@/assets/history/cali.jpg'
import cartagena from '@/assets/history/cartagena.jpg'
import chile from '@/assets/history/chile.jpg'
import ibague from '@/assets/history/ibague.jpg'
import panama from '@/assets/history/panama.jpg'
import peru from '@/assets/history/peru.jpg'
import {  FaCameraRetro } from "react-icons/fa";

const History = () => {
  const portfolios = [
    {
      id: 1,
      src: armenia,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 2,
      src: bolivia,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 3,
      src: cali,
      title: "Texto Relevante ",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 4,
      src: cartagena,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 5,
      src: chile,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 6,
      src: ibague,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 7,
      src: panama,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 8,
      src: peru,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
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
          <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-3">
            {portfolios.map(({ id, src, title, hour,code }) => (
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
                    <p className="m-4 text-sm md:text-lg">{hour}</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    <a href={code}>

                    <FaCameraRetro size={30} fill={"black"}  />
                    </a>
                      </div>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default History;
