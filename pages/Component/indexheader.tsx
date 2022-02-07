import React from "react";
import Image from "next/image";


export default function Indexlogo(){
return(
    <>
    <nav className="relative bg-stone-900 w-full h-16 z-10">
            <div className="w-2 desktop:flex desktop:flex-row-reverse">
    <Image
    src={"/logoplaceholder.png"}
    layout="fill"
    className="relative w-8 object-contain right-full"
    />
</div>
<div className="relative h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12 pl-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>   
</div>
    </nav>

<div className="w-full z-0">
    <section className="w-full h-128 grid grid-rows-3 items-center z-0">
        <video autoPlay muted loop className="h-screen w-screen pb-4 absolute laptop:fixed object-cover sm:w-full sm:h-full -z-10 blur-sm" >
            <source src='/video(1).mp4' type="video/mp4"/>
        </video>
                <div className="row-start-1 row-end-2 z-0">
            <div className=" grid justify-items-center w-full">                  
                        <h1 className="text-black pb-4 text-2xl tablet:text-4xl laptop:text-5xl laptop:font-semibold"> HOLA AMIGO </h1>

                        <span className="border w-80 border-black"></span>
                        <h1 className="text-black pt-3 text-xl tablet:text-3xl laptop:text-3xl laptop:font-semibold"> COMO ESTAS </h1>
            </div>
        </div>
                <div className="row-start-2 row-end-3 z-0">
                    <div className="grid justify-items-center w-full p-6 desktop:p-40">
                        <h1 className="text-stone-800 text-lg tablet:text-xl text-center laptop:text-2xl laptop:font-semibold"> Eu incididunt dolor laborum occaecat pariatur officia. Sunt reprehenderit nulla ipsum dolor cillum tempor consectetur adipisicing pariatur reprehenderit aliqua cillum. Sit excepteur laboris esse ut aliquip tempor irure amet fugiat dolore mollit labore.  </h1>
                    </div>
                </div>
                <div className="row-start-3 row-end-4 z-0">
            <div className="grid justify-items-center w-full laptop:h-16">
                        <button className="laptop:w-48 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                            Let's start it
                        </button>

            </div>
        </div>
    </section>
</div>
    </>


)


}