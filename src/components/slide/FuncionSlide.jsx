import { useState } from "react";



import {  GrLinkPrevious,GrLinkNext } from "react-icons/gr";


const FuncionSlide = ({ARRAY_IMG = []}) => {

    const [index, setIndex] = useState(0);
    const handleClickNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };
    return (
        <section>
        
        <div className="flex gap-5">
            <button className="flex  items-center justify-center  " onClick={handleClickPrev}>
                    <GrLinkPrevious size={40} />
                </button>
            <img
                src={ARRAY_IMG[index]}
                alt=""
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
        
    </section>
  )
}

export default FuncionSlide