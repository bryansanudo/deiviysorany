import React from "react";
import invitacionImg from "@/assets/invitacion.jpg";
import PageSection from "@/components/PageSection";
import invitacionVideo from '@/assets/invitacion.mp4'
const Services = () => {
  return (
    <PageSection
      name="invitacion"
      
      
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
        

        <div className="w-full  flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={invitacionImg}
              className="rounded-lg shadow-xl shadow-thPrimary  object-cover   "
            />
          </a>
        </div>
        <div className="w-full  flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <video
              src={invitacionVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-lg shadow-xl shadow-thPrimary object-cover w-[350px] md:h-[589px]"
            ></video>
          </a>
        </div>
      </div>
    </PageSection>
  );
};

export default Services;
