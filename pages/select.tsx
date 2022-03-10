import React from "react";
import Link from "next/link";
export default function Select(){

return(
<div className="grid grid-cols-2 grid-rows-2 w-full h-screen bg-black">
        <Link href="/plakety">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-stone-400 w-full h-full hover:scale-95 duration-500">
            <div className="flex justify-center h-full items-center">
                <div className=""><h1>Plakety select</h1></div>

            </div>
        </div>
        </Link>
        <Link href="/select">
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-stone-500 w-full h-full hover:scale-95 duration-500">
<div className="flex justify-center h-full items-center">
                <div className=""><h1>polozka 2</h1></div>

            </div>
        </div>
        </Link>
        <Link href="/select">
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-stone-600 w-full h-full hover:scale-95 duration-500">
<div className="flex justify-center h-full items-center">
                <div className=""><h1>polozka 3</h1></div>

            </div>
        </div>
        </Link>
            <Link href="/select">
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-stone-700 w-full h-full hover:scale-95 duration-500">
            <div className="flex justify-center h-full items-center">
                <div className=""><h1>polozka 4</h1></div>

            </div>
        </div></Link>
</div>
)

}