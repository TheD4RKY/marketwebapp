import React from 'react';
import Image from 'next/image';
import Style from '/styles/indexmenutext.module.css';
import Link from "next/link";
import { withRouter } from 'next/router';
export default function Indexmenu() {


    return (
        <>
        <section className="w-full">
                <div className="w-full grid grid-rows-5 laptop:grid-cols-4 gap-y-3 bg-stone-800 items-center ">
                    <div className="row-start-1 row-end-2 laptop:col-start-1 laptop:col-end-5">
                        <div className="grid justify-items-center pr-3 laptop:pb-5">
                            <h1 className={Style.stylish}> Co vlastně děláme?</h1>
        </div>
        </div>
                    {/* <div className="row-start-2 row-end-3 col-start-1 col-end-2 tablet:invisible">
                        <div className="grid justify-items-center pr-5 desktop:justify-items-start desktop:pl-64">
                            <div className="rounded-xl desktop:w-100 desktop:h-24 w-80 h-16 bg-stone-900 flex items-center pl-3">
                                <h1 className="text-white"> BLABLABLA KRÁTKÝ POPIS </h1>
                        </div>
                        </div>
                    </div>

                    <div className="row-start-3 row-end-4 col-start-1 col-end-2 tablet:invisible">
                        <div className="grid justify-items-center pl-5 desktop:justify-items-start desktop:pl-24">
                            <div className="rounded-xl desktop:w-100 desktop:h-24 w-80 h-16 bg-stone-900 flex items-center flex-row-reverse pr-3">
                                <h1 className="text-white"> BLABLABLA KRÁTKÝ POPIS </h1>
                            </div>
                        </div>
                    </div>

                    <div className="row-start-4 row-end-5 col-start-1 col-end-2 tablet:invisible">
                        <div className="grid justify-items-center pr-5 desktop:justify-items-start desktop:pl-64">
                            <div className="rounded-xl desktop:w-100 desktop:h-24 w-80 h-16 bg-stone-900 flex items-center pl-3">
                                <h1 className="text-white"> BLABLABLA KRÁTKÝ POPIS</h1>
                            </div>
                      </div>
                    </div>

                    <div className="row-start-5 row-end-6 col-start-1 col-end-2 tablet:invisible">
                        <div className="grid justify-items-center pl-5 desktop:justify-items-start desktop:pl-24">
                            <div className="rounded-xl desktop:w-100 desktop:h-24 w-80 h-16 bg-stone-900 flex items-center flex-row-reverse pr-3">
                                <h1 className="text-white"> NADPIS </h1>
                            </div>
                        </div>
                    </div> */}

                    <div className="row-start-2 row-end-6 laptop:row-start-2 laptop:row-end-6 col-start-1 col-end-2 laptop:col-start-1 laptop:col-end-2 ">
                        <div className="grid justify-items-center">
                            <h1 className='text-white text-center pb-6'> NADPIS </h1>
                            <div className="rounded-xl w-44 h-44 sm:w-60 sm:h-60 xl:w-72 xl:h-72 bg-white flex items-center flex-row-reverse pr-3">
                                
                            </div>
                            <h2 className="text-white text-center pl-8 pr-8 pt-8 pb-12">POPIS Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum.</h2>
                        </div>
                    </div>
                    <div className="laptop:row-start-2 laptop:row-end-6 col-start-1 col-end-2 laptop:col-start-2 laptop:col-end-3 ">
                        <div className="grid justify-items-center">
                            <h1 className='text-white text-center pb-6'> NADPIS </h1>
                            <div className="rounded-xl w-44 h-44 sm:w-60 sm:h-60 xl:w-72 xl:h-72 bg-white flex items-center flex-row-reverse pr-3">

                            </div>
                            <h2 className="text-white text-center pl-8 pr-8 pt-8 pb-12">POPIS Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum.</h2>
                        </div>
                    </div>
                    <div className="laptop:row-start-2 laptop:row-end-6 col-start-1 col-end-2 laptop:col-start-3 laptop:col-end-4 ">
                        <div className="grid justify-items-center">
                            <h1 className='text-white text-center pb-6'> NADPIS </h1>
                            <div className="rounded-xl w-44 h-44 sm:w-60 sm:h-60 xl:w-72 xl:h-72 bg-white flex items-center flex-row-reverse pr-3">

                            </div>
                            <h2 className="text-white text-center pl-8 pr-8 pt-8 pb-12">POPIS Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum.</h2>
                        </div>
                    </div>
                    <div className="laptop:row-start-2 laptop:row-end-6 col-start-1 col-end-2 laptop:col-start-4 laptop:col-end-5 ">
                        <div className="grid justify-items-center">
                            <h1 className='text-white text-center pb-6'> NADPIS </h1>
                            <div className="rounded-xl w-44 h-44 sm:w-60 sm:h-60 xl:w-72 xl:h-72 bg-white flex items-center flex-row-reverse pr-3">

                            </div>
                            <h2 className="text-white text-center pl-8 pr-8 pt-8 pb-12">POPIS Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum. Pariatur id aliquip aliquip incididunt ipsum.</h2>
                        </div>
                    </div>
                    
        </div>
        </section>
            <section className='flex flex-col flex-wrap  w-full h-60 bg-stone-900'>
            <div>
                    <div className="w-full h-32 grid items-center">
            <h1 className={Style.stylishbot}>Už jsi si vybral?</h1>
            </div>
                    <div className="w-full h-12 grid justify-items-center">
                        <Link href="/select">
                <button className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                    {"Let's start it"}
                </button>
</Link>
                </div>
                </div>
        </section>
        </>
    );
};
