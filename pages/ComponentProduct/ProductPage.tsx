import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.module.css";
import button from "./button.module.css";
import active from "/styles/active.module.css"
import { privateDecrypt } from "crypto";
import Header from "../ComponentIndex/header";
const defaultSrc =
    "/donotopen.jpg";

export const Demo: React.FC = (props) => {
    var color = "white";
    const [cena, setCena] = useState(100);
    const [userName, setuserName] = useState("Default ");

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    
        const [userDescription, setDescription] = useState("Default popisek ");
    const handleChangeText = (e) => {
        e.preventDefault();
        setDescription(e.target.value); 
    };
    const handleChangeName = (e) => {
        e.preventDefault();
        setuserName(e.target.value);
    };
    const dataPassage = async event => {
        event.preventDefault();
        setuserName(event.target.name.value+" ");
        setDescription(event.target.description.value + " ");
    }

    function handleCenaDrevo(){
        setCena(150);
    }
    function handleCenaPlast() {
        setCena(255);
    }
    function handleCenaSklo() {
        setCena(450);
    }
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState<any>();
    const onChange = (e: any) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as any);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());  
        }
    };
    return (
        <div className="flex flex-col-reverse bg-slate-800 lg:grid lg:grid-cols-2 lg:w-full lg:h-screen">
            <div className="col-start-1 col-end-2">
                <Header /></div>
            <div className="w-full flex flex-col lg:col-start-1 lg:col-end-2 lg:flex lg:flex-col lg:w-full lg:justify-center lg:items-center bg-slate-800">
                <br />
                <br />
                <div className="pt-10"><p>*Všechny desky dodáváme průhledné, modré pozadí v editoru slouží k lepšímu zobrazení barev.
                    Náhled je pouze ilustrační. Případné nepřesnosti Vám opraví náš grafický tým.</p></div>
                <div className="lg:w-full flex justify-center lg:pt-14">
                    
                <Cropper
                    style={{ height: 400, width: 400}}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    aspectRatio={1 / 1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={true}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                    guides={true}
                />
                    </div>
                <div className="flex justify-center"> 
                <input className="lg:pt-16" type="file" onChange={onChange} />
                </div>
                <div className="">
                    
                    <div className="bg-slate-800">
                        <div className="grid grid-cols-2 grid-rows-1 h-20 items-center">
                            <div className="col-start-1 col-end-2"><div className="flex justify-center"> <h1>{"Lajknutý příspěvek"}</h1></div></div>
                            <div className="col-start-2 col-end-3">
                    <div className="flex items-center justify-center w-full ">
                        <label
                         
                            className="flex items-center cursor-pointer"
                        >
                          
                            <div className="relative">
                               
                                <input onClick={handleClick} id="toogleA" type="checkbox" className="sr-only" />
                              
                                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                            
                                <div className={[" absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"] + " " + button.dot }></div>
                            </div>
                        
                            <div className="ml-3 text-gray-700 font-medium">
                                
                            </div>
                        </label>

                                </div></div>
                            </div>
                        </div>
                        
                    <form onSubmit={dataPassage} method="post">
                        <div className="grid grid-cols-1 grid-rows-3 items-center">
                        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
                        <div className="flex justify-start">
                        <input className="w-80 h-16" type="text" id="name" name="first" placeholder="Jmeno" onChange={handleChangeName}/>
                                     </div></div>
                        
                                <div className="row-start-2 row-end-3 col-start-1 col-end-2">
                                    <div className="flex justify-start">
                                    <textarea className="w-128 h-28" id="description" name="last" placeholder="Popisek" onChange={handleChangeText}/>
                                     </div></div>
                        <div className="row-start-3 row-end-4 col-start-1 col-end-3">
                                <div className="flex justify-center">
                                        <div><button onClick={getCropData} type="submit" className="laptop:w-26 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Potvrdit</button></div></div>
                            </div></div></form>
                        

                        <div className="w-full flex lg:grid lg:grid-cols-4 lg:gap-6 justify-center pt-10 pb-10">
                        <div className="col-start-1 col-end-2">
                    <h1> Material: </h1></div>
                            <div className="col-start-2 col-end-3">
                    <div className="w-full flex justify-center">
                       
                            <button className="laptop:w-28 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={
                            handleCenaDrevo
                            }><h2> Dřevo </h2></button>
                               
                            
                                </div></div>
                            <div className="col-start-3 col-end-4">
                         <div className="w-full flex justify-center">
                            
                            <button onClick={
                            handleCenaPlast
                            } className="laptop:w-28 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                                <h2> Plast </h2>
                            </button>
                                </div></div>
                            <div className="col-start-4 col-end-5">
                        <div className="w-full flex justify-center">
                            
                            <button onClick={
                            handleCenaSklo
                             } className="laptop:w-28 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                            <h2> Sklo </h2>
                            </button>
                                </div> </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center mb-10">
                        <h1 className="pr-8 text-3xl"> Finální cena: {cena}</h1></div>
                        
                    </div>
                    <div className="w-full flex justify-center mb-12">
                        <Link href={{
                            pathname: "/stripe",
                            query: {
                                cena,
                                image
                            },
                        }}><button className="laptop:w-26 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                                Pokračovat
                            </button></Link>
                    </div>
                </div>
               
                </div>

                
           















            
            <div className="flex pt-20 lg:pt-2 flex-col w-screen lg:col-start-2 lg:col-end-3 lg:flex lg:flex-col lg:w-full justify-center items-center bg-fadedblue lg:pb-72" >
                
                <svg
                    id="instagramCover"
                    viewBox="0 0 839 1090"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shadow-2xl scale-90 lg:scale-100 lg:fixed"
                    style={{
                        maxHeight: "65vh",
                        backgroundColor: "#484b5e",
                        maxWidth: "477.978px",
                    }}
                    data-v-6b966f65=""
                    {...props}
                >
                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset={0} />
                        <stop stopColor="#fdf497" offset={0.05} />
                        <stop stopColor="#fd5949" offset={0.45} />
                        <stop stopColor="#d6249f" offset={0.6} />
                        <stop stopColor="#285AEB" offset={0.9} />
                    </radialGradient>
                    <pattern
                        id="profileImagePattern"
                        patternUnits="userSpaceOnUse"
                        width={47}
                        height={47}
                    >
                        <image href={cropData} x={0} y={0} width={47} height={47} />
                    </pattern>
                    <g>
                        <title>{"background"}</title>
                        <rect
                            id="canvas_background"
                            x={-1}
                            y={-1}
                            width={849.47479}
                            height={1092.63641}
                            fill="none"
                        />
                        <g id="canvasGrid" display="none">
                            <rect
                                id="svg_2"
                                width="100%"
                                height="100%"
                                x={0}
                                y={0}
                                strokeWidth={0}
                                fill="url(#gridpattern)"
                            />
                        </g>
                    </g>
                    <g>
                        <title>{"Layer 1"}</title>
                        <rect
                            height={575}
                            width={575}
                            x={132}
                            y={206.78841}
                            fill="var(--fill-color)"
                        />
                        <image
                            id="svg_6"
                            href={cropData}
                            height={575}
                            width={575}
                            x={132}
                            y={206.78841}
                        />
                        <g>
                            <path className={active ? 'invisible' : "visible"  } id="svg_1" strokeWidth="3" stroke={color} fill={"none"} d="m153.48936,809.85026c-5.49226,-9.16352 -20.93617,-6.48842 -20.93617,4.99397c0,7.90655 9.71962,15.99121 20.93617,26.81542c11.2183,-10.82422 20.93617,-18.90888 20.93617,-26.81542c0,-11.5214 -15.48404,-14.08963 -20.93617,-4.99397z"></path>
                            <path className={active ? "visible" : 'invisible'  } id="svg_1" strokeWidth="3" stroke={"red"} fill={"red"} d="m153.48936,809.85026c-5.49226,-9.16352 -20.93617,-6.48842 -20.93617,4.99397c0,7.90655 9.71962,15.99121 20.93617,26.81542c11.2183,-10.82422 20.93617,-18.90888 20.93617,-26.81542c0,-11.5214 -15.48404,-14.08963 -20.93617,-4.99397z"></path>
                        </g>
                        <g>
                            <path id="XMLID_20_" fill="none" strokeWidth="3" d="m232.43284,840.64192c-3.00747,1.63691 -6.39087,2.54631 -9.96223,2.54631c-11.278,0 -20.3004,-8.73019 -20.3004,-19.64292s9.02239,-19.64292 20.3004,-19.64292c11.278,0 20.3004,8.73019 20.3004,19.64292c0,3.63758 -0.93984,7.09327 -2.8195,10.00334" stroke={color} className="st1"></path>
                            <polyline id="XMLID_25_" fill="none" strokeWidth="3" points="232.432861328125,840.6419067382812 242.5830535888672,844.0975952148438 239.9515380859375,833.5486450195312 " stroke={color} className="st0"></polyline>
                        </g>
                        <g>
                            <polygon id="XMLID_31_" strokeWidth="3" fill="none" points="269,806.0849475860596 311.8564147949219,806.0849475860596 290.4281768798828,841.9150581359863 284.9771423339844,820.8171501159668 " stroke={color} className="st0">
                                </polygon> 
                                <line id="XMLID_33_" strokeWidth="3" fill="none" y2="806.08494" x2="311.8564" y1="820.81713" x1="284.97717" stroke={color} className="st0"></line>
                        </g>
                        <g id="svg_30">
                            <b></b>
                            <g id="svg_24">
                                <ellipse
                                    id="svg_23"
                                    fill="url(#profileImagePattern)"
                                    strokeWidth={0}
                                    cx={162.62537}
                                    cy={161.12961}
                                    rx={24}
                                    ry={24}
                                />
                            </g> 
                            <foreignObject x={200} y={150} width={400} height={50}>
                                <div
                                    style={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: 21,
                                        color: "var(--color)",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                    }}
                                >
                                    <span>{userName}</span>
                                </div>
                            </foreignObject>
                        </g>
                        <ellipse
                            id="svg_31"
                            fill="var(--color)"
                            stroke="var(--color)"
                            strokeWidth={0}
                            cx={701.68067}
                            cy={161.25276}
                            rx={3}
                            ry={3}
                        />
                        <ellipse
                            id="svg_32"
                            fill="var(--color)"
                            stroke="var(--color)"
                            strokeWidth={0}
                            cx={692.12201}
                            cy={161.14713}
                            rx={3}
                            ry={3}
                        />
                        <ellipse
                            id="svg_33"
                            fill="var(--color)"
                            stroke="var(--color)"
                            strokeWidth={0}
                            cx={682.44134}
                            cy={161.20168}
                            rx={3}
                            ry={3}
                        />
                        <ellipse
                            id="svg_35"
                            fill="var(--color)"
                            stroke="var(--color)"
                            strokeWidth={0}
                            cx={701.68067}
                            cy={161.25276}
                            rx={3}
                            ry={3}
                        />
                    </g>
                    <g>
                        <title>{"Layer 2"}</title>
                        <polygon
                            id="XMLID_35_"
                            strokeWidth={3}
                            fill="none"
                            points="673.1809692382812,806.3119049072266 707.2666625976562,806.3119049072266 707.2666625976562,843.6880950927734 690.5681762695312,828.1826858520508 673.1809692382812,843.6880950927734 "
                            stroke="var(--color)"
                            className="st0"
                        />
                        <g id="XMLID_8_" stroke="null">
                            <path
                                id="svg_1"
                                strokeWidth={3}
                                stroke="var(--color)"
                                fill="none"
                                d="m153.48936,809.85026c-5.49226,-9.16352 -20.93617,-6.48842 -20.93617,4.99397c0,7.90655 9.71962,15.99121 20.93617,26.81542c11.2183,-10.82422 20.93617,-18.90888 20.93617,-26.81542c0,-11.5214 -15.48404,-14.08963 -20.93617,-4.99397z"
                            />
                        </g>
                        <g id="XMLID_30_" fillOpacity={0} stroke="null">
                            <path
                                id="XMLID_20_"
                                fill="var(--color)"
                                strokeWidth={3}
                                d="m232.43284,840.64192c-3.00747,1.63691 -6.39087,2.54631 -9.96223,2.54631c-11.278,0 -20.3004,-8.73019 -20.3004,-19.64292s9.02239,-19.64292 20.3004,-19.64292c11.278,0 20.3004,8.73019 20.3004,19.64292c0,3.63758 -0.93984,7.09327 -2.8195,10.00334"
                                stroke="var(--color)"
                                className="st1"
                            />
                            <polyline
                                id="XMLID_25_"
                                fill="var(--color)"
                                strokeWidth={3}
                                points="232.432861328125,840.6419067382812 242.5830535888672,844.0975952148438 239.9515380859375,833.5486450195312 "
                                stroke="var(--color)"
                                className="st0"
                            />
                        </g>
                        <g id="XMLID_32_" stroke="null">
                            <polygon
                                id="XMLID_31_"
                                strokeWidth={3}
                                fill="none"
                                points="269,806.0849475860596 311.8564147949219,806.0849475860596 290.4281768798828,841.9150581359863 284.9771423339844,820.8171501159668 "
                                stroke="var(--color)"
                                className="st0"
                            />
                            <line
                                id="XMLID_33_"
                                strokeWidth={3}
                                fill="none"
                                y2={806.08494}
                                x2={311.8564}
                                y1={820.81713}
                                x1={284.97717}
                                stroke="var(--color)"
                                className="st0"
                            />
                        </g>
                        <text
                            id="svg_4"
                            xmlSpace="preserve"
                            textAnchor="start"
                            fontFamily="Montserrat, sans-serif"
                            fontSize={21}
                            y={883}
                            x={210}
                            strokeWidth={0}
                            stroke="var(--color)"
                            fill="var(--color)"
                        >
                            {"To se l\xEDb\xED "}
                            <tspan
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                {"___"}
                            </tspan>
                            {" a "}
                            <tspan
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                {"dal\u0161\xEDm (___)"}
                            </tspan>
                        </text>
                        <foreignObject x={132} y={900} width={575} height={120}>
                            <div
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: 21,
                                    color: "var(--color)",
                                    textAlign: "left",
                                }}
                            >
                                <b>{ userName }</b>
                                <span>{userDescription}</span>
                            </div>
                        </foreignObject>
                        <image id="svg_6" href="/profilovkysmall.png" height="32" width="67" y="857.5" x="132.5"></image>
                    </g>
                </svg>
                
                
            </div>
           
            </div>
    );
};

export default Demo;
