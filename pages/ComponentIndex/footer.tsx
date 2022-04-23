import React from "react";
import { SocialIcon } from 'react-social-icons';
export default function Footer(){
    return(
        <div className="w-full bg-stone-900 h-72">
            <div className="">
            <h1 className=" text-center text-white"> SOCIALS </h1>
</div>
            <div className="flex pt-3 justify-center flex-row h-20 space-x-4 overflow-hidden ">
                <div className="">   
                    
                        <SocialIcon className="" network="facebook" bgColor="white" /> 
                </div>      <div className="">
                        <SocialIcon className="" network="twitter" bgColor="white" />
                </div>
                <div className="">
                        <SocialIcon className="" network="instagram" bgColor="white" /> 
                </div>
        </div>
            <div className="">
                <h1 className="text-white text-center text-2xl p-1 font-medium"> KONTAKY </h1>
                <h1 className="text-white text-center text-xl p-1 font-medium"> Všeobecné obchodní podmínky </h1>
                <h1 className="text-white text-center text-xl p-1 font-medium"> Zpracování osobních údajů </h1>
        </div>
        <div>
                <h5 className="text-center text-white pt-4 text-sm"> Copyright © 2022, Tom Prčík</h5>
        </div>
        </div>
    )



}
