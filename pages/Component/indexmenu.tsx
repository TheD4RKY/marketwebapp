import React from 'react'
import Image from 'next/image';
export default function Indexmenu() {


    return (
        <div className="flex  justify-center h-screen bg-gradient-to-b from-indigo-800 to-neutral-900 flex-col p-10">
            <div className="flex justify-center items-center p-5 hover:p-1 hover:-translate-y-1 duration-300">
                <Image
                    src="/placeholder.png"
                    alt="placeholder"
                    objectFit="cover"
                    height="300"
                    width="300"
                ></Image>
            </div>
            <div className="flex justify-center items-center p-5 hover:p-1 hover:-translate-y-1 duration-300">
                <Image
                    src="/placeholder.png"
                    alt="placeholder"
                    objectFit="cover"
                    height="300"
                    width="300"
                ></Image>
            </div>
        </div>
    );
};