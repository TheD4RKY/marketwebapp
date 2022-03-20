import { useState } from "react";
import * as React from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.module.css";
import active from "/styles/active.module.css"
const defaultSrc =
    "/donotopen.png";

export const Demo: React.FC = (props) => {
    var color = "white";
    const [userName, setuserName] = useState("Default ");

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const [userDescription, setDescription] = useState("Default popisek ");
    const dataPassage = async event => {
        event.preventDefault();
        setuserName(event.target.name.value+" ");
        setDescription(event.target.description.value + " ");
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
        <div className="bg-slate-800 grid grid-cols-2 w-full h-screen">
            
            <div className="col-start-1 col-end-2 flex flex-col w-full justify-center items-center">
                <br />
                <br />
                <div className="w-full flex justify-center pt-14">
                <Cropper
                    style={{ height: 400}}
                    zoomTo={0.5}
                    initialAspectRatio={1}
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
                <input className="pt-16  " type="file" onChange={onChange} />
                <div
                    className="box"
                    style={{ width: "50%", float: "right", height: "300px" }}
                >
                    <h1>
                        <div className="pt-10 w-full flex justify-center">
                        <button className="laptop:w-48 transition-all bg-stone-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={getCropData}>
                            Crop Image
                            </button></div>
                    </h1>
                </div>

                <div>
                    <label className="switch">
                        <button onClick={handleClick}>qdqwdqwdqwdq</button>
                            <span className="slider round"></span>
                    </label>

                </div>


                <form onSubmit={dataPassage} method="post">
                    <label >Uživatelské jméno</label>
                    <input type="text" id="name" name="first" />
                    <label >Popisek</label>
                    <input type="text" id="description" name="last" />
                    <button type="submit">Submit</button>
                </form>
            </div>
           
















            <div className="col-start-2 col-end-3 flex flex-col w-full justify-center items-center bg-fadedblue" >
                <svg
                    id="instagramCover"
                    viewBox="0 0 839 1090"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shadow-2xl"
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
                        <image href="/donotopen.png" x={0} y={0} width={47} height={47} />
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
                            <path className={active ? 'invisible' : "visible"  } id="svg_1" stroke-width="3" stroke={color} fill={"none"} d="m153.48936,809.85026c-5.49226,-9.16352 -20.93617,-6.48842 -20.93617,4.99397c0,7.90655 9.71962,15.99121 20.93617,26.81542c11.2183,-10.82422 20.93617,-18.90888 20.93617,-26.81542c0,-11.5214 -15.48404,-14.08963 -20.93617,-4.99397z"></path>
                            <path className={active ? "visible" : 'invisible'  } id="svg_1" stroke-width="3" stroke={"red"} fill={"red"} d="m153.48936,809.85026c-5.49226,-9.16352 -20.93617,-6.48842 -20.93617,4.99397c0,7.90655 9.71962,15.99121 20.93617,26.81542c11.2183,-10.82422 20.93617,-18.90888 20.93617,-26.81542c0,-11.5214 -15.48404,-14.08963 -20.93617,-4.99397z"></path>
                        </g>
                        <g>
                            <path id="XMLID_20_" fill="none" stroke-width="3" d="m232.43284,840.64192c-3.00747,1.63691 -6.39087,2.54631 -9.96223,2.54631c-11.278,0 -20.3004,-8.73019 -20.3004,-19.64292s9.02239,-19.64292 20.3004,-19.64292c11.278,0 20.3004,8.73019 20.3004,19.64292c0,3.63758 -0.93984,7.09327 -2.8195,10.00334" stroke={color} className="st1"></path>
                            <polyline id="XMLID_25_" fill="none" stroke-width="3" points="232.432861328125,840.6419067382812 242.5830535888672,844.0975952148438 239.9515380859375,833.5486450195312 " stroke={color} className="st0"></polyline>
                        </g>
                        <g>
                            <polygon id="XMLID_31_" stroke-width="3" fill="none" points="269,806.0849475860596 311.8564147949219,806.0849475860596 290.4281768798828,841.9150581359863 284.9771423339844,820.8171501159668 " stroke={color} className="st0">
                                </polygon> 
                                <line id="XMLID_33_" stroke-width="3" fill="none" y2="806.08494" x2="311.8564" y1="820.81713" x1="284.97717" stroke={color} className="st0"></line>
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
                        <image id="svg_6" href="/img/like_profiles.png" height="32" width="67" y="857.5" x="132.5"></image>
                    </g>
                </svg>


            </div>
        </div>
    );
};

export default Demo;
