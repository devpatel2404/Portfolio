'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import {element} from "prop-types";

export default function Home() {
    let [scheme, setScheme] = useState('');

    const changeLight = () => {
        document.getElementById("Background").style.backgroundColor = "white";
        document.getElementById("Background").style.color = 'black';
        setScheme("Light");
    };

    const changeDark = () => {
        document.getElementById("Background").style.backgroundColor = "black";
        document.getElementById("Background").style.color = 'white';
        setScheme("Dark");
    };

    const Home = () => {
        document.getElementById("AboutMe").hidden = true;
        document.getElementById("Projects").hidden = true;
        document.getElementById("Contact").hidden = true;
        document.getElementById("Home").hidden = false;
    }

    const AboutMe = () => {
        document.getElementById("Projects").hidden = true;
        document.getElementById("Contact").hidden = true;
        document.getElementById("Home").hidden = true;
        document.getElementById("AboutMe").hidden = false;
    }

    const Projects = () => {
        document.getElementById("AboutMe").hidden = true;
        document.getElementById("Contact").hidden = true;
        document.getElementById("Home").hidden = true;
        document.getElementById("Projects").hidden = false;
    }

    const Contact = () => {
        document.getElementById("AboutMe").hidden = true;
        document.getElementById("Projects").hidden = true;
        document.getElementById("Home").hidden = true;
        document.getElementById("Contact").hidden = false;
    }

    return (
        <main className={`h-screen`} id={"Background"}>
            <div id={"Page"}></div>
            <div className={"Container"}>
                <div className={"flex justify-end pt-2 Options"}>
                    <input type={"radio"} id={"Light"} name="Color_Schemes" className={"mr-0.5"} onClick={changeLight}
                           defaultChecked={scheme === "Light"}/>
                    <h1 className={"mr-1.5"}>Light</h1>
                    <input type={"radio"} id={"Dark"} name="Color_Schemes" onClick={changeDark} className={"mr-0.5"}/>
                    <h1 className={"mr-1.5"}>Dark</h1>
                    <input type={"radio"} id={"Times"} name={"Fonts"} value={"Arial"} defaultChecked={true}/>
                    <h1 className={"mr-1.5"}>Arial</h1>
                    <input type={"radio"} id={"Times"} name={"Fonts"} value={"Helvetica"}/>
                    <h1 className={"mr-1.5"}>Helvetica</h1>
                    <input type={"radio"} id={"Sans"} name={"Fonts"} value={"Sans-Serif"}/><h1>Mono</h1>
                </div>
                <div
                    className={`font-sans text-center border-2 h-full ${scheme === "Light" ? 'border-blue-700' : "border-cyan-400"}`}
                    style={{height: '95vh'}}>
                    <h1 className={"mt-2 mr-2 text-4xl"}>Dev Patel</h1>
                    <h1 className={"mt-0.5 mr-2 text-lg"}>Full Stack Engineer</h1>
                    <div className={"flex justify-center"} id={"NavBar"}>
                        <button onClick={Home} type={"button"}><h1 className={`mr-3`}>Home</h1></button>
                        <button onClick={AboutMe} type={"button"}><h1 className={"mr-3"}>About Me</h1></button>
                        <button onClick={Projects} type={"button"}><h1 className={"mr-3"}>Projects</h1></button>
                        <button onClick={Contact} type={"button"}><h1 className={""}>Contact</h1></button>
                    </div>
                    <div id={"Home"} hidden={false}>
                        <h1>Home</h1>
                    </div>
                    <div id={"AboutMe"} hidden={true}>
                        <h1>About Me</h1>
                    </div>
                    <div id={"Projects"} hidden={true}>
                        <h1>Projects</h1>
                    </div>
                    <div id={"Contact"} hidden={true}>
                        <h1>Contact</h1>
                    </div>
                </div>

            </div>
        </main>
    );
}
