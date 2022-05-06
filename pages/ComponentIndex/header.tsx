import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "/styles/colorchangeindex.module.css";


export default function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className="fixed top-0 bg-stone-900 w-full h-16 z-30">
                <div className="w-2 desktop:flex desktop:flex-row-reverse">
                    <Image
                        src={"/logoplaceholder.png"}
                        layout="fill"
                        className="relative w-8 object-contain right-full"
                    />
                </div>
                <div className="relative h-full">
                    <button onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12 pl-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={active ? "visible" : 'invisible'}>
                <div className="h-screen w-screen bg-stone-800 fixed pt-16 z-20">
                    <div className="grid place-items-center h-5/6">
                        <div className={Style.colorchange}>
                            DOMOVNÍ STRÁNKA
                        </div>
                        <div className={Style.colorchange}>
                            O NÁS
                        </div>
                        <Link href="/select">
                            <div className={Style.colorchange}>
                                PRODUTKY
                            </div>
                        </Link>
                        <div className={Style.colorchange}>
                            KONTACT
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }