'use client'
import {useState, useEffect, ChangeEvent} from "react";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "@/app/Projects/Projects";

export default function Home() {
    const [theme, setTheme] = useState('dark');
    const [font, setFont] = useState('Futura');
    const [tempTheme, setTempTheme] = useState('');
    const [tempFont, setTempFont] = useState('');
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);
            setTheme(mediaQuery.matches ? 'dark' : 'light');

            const handleChange = (e: MediaQueryListEvent) => {
                setTheme(e.matches ? 'dark' : 'light');
            }
            mediaQuery.addEventListener('change', handleChange);


            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            }
        }
    }, []);

    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTheme(e.target.value);
    };

    const handleFontChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFont(e.target.value);
    }

    const themeEnter = (newTheme: string) => {
        setTempTheme(newTheme);
    }

    const themeExit = (q: string) => {
        setTempTheme(q);
    }

    const fontEnter = (newFont: string) => {
        setTempFont(newFont);
    }

    const fontExit = (q:string) => {
        setTempFont(q);
    }

    const showSection = (section:string) => {
        setActiveSection(section);
    }

    const appliedTheme = tempTheme || theme;
    const appliedFont = tempFont || font;

    return (
        <main className={`h-screen ${appliedTheme}-theme`} id={"Background"}>

            <div className={"Container"}>
                <div className={`Information ${appliedFont}`} style={{height: '96vh'}}>
                    <h1 className={"Title"}>Dev Patel</h1>
                    <h1 className={"Role"}>Full Stack Engineer</h1>
                    <div className={"flex justify-center Navbar"} id={"NavBar"}>
                        <button type={"button"} onClick={() => showSection("Home")}><h1 className={`mr-4`}>
                            Home</h1></button>
                        <button type={"button"} onClick={() => showSection("About")}><h1 className={"mr-4"}>
                            About</h1></button>
                        <button type={"button"} onClick={() => showSection("Projects")}><h1 className={"mr-4"}>
                            Projects</h1></button>
                        <button type={"button"} onClick={() => showSection("Contact")}><h1 className={""}>
                            Contact</h1></button>
                    </div>

                    <div id={"Home"} className={"Home"} style={{display: activeSection == "Home" ? "initial" : "none",
                        overflowY: "auto", height: "96vh - 200p"}}>
                        <h1 className={"Home_Title"}>Welcome To My Portfolio</h1>
                        <p className={"Resume"}>If you haven&apos;t look at my resume <a href={"/DevPatelResume.pdf"} target={"_blank"}>preview it here</a>.</p>
                        <p>Alternatively, you can  <a href={"/DevPatelResume.pdf"} download={true}>download it directly</a>.</p>
                    </div>

                    {activeSection == "About" && <AboutMe />}
                    {activeSection == "Projects" && <Projects />}
                    {activeSection == "Contact" && <Contact />}
                </div>
            </div>
            <div className={"Options"}>
                <input type={"radio"} className={"Radio Light"} value={'light'} name={'theme'}
                       checked={theme === 'light'}
                       onChange={handleThemeChange} onMouseEnter={() => themeEnter("light")}
                       onMouseLeave={() => themeExit('')}/>
                <h1 className={"Color"}>Light</h1>
                <input type={"radio"} className={"Radio Dark"} value={'dark'} name={'theme'} checked={theme === 'dark'}
                       onChange={handleThemeChange} onMouseEnter={() => themeEnter("dark")}
                       onMouseLeave={() => themeExit('')}/>
                <h1 className={"Color"}>Dark</h1>
                <input type={"radio"} className={"Radio Arial"} value={"Futura"}
                       name={'Font'} defaultChecked={true}
                       onChange={handleFontChange}
                       onMouseEnter={() => fontEnter("Futura")}
                       onMouseLeave={() => fontExit('')}/>
                <h1 className={"Futura"}>Futura</h1>
                <input type={"radio"} className={"Radio Comic"} value={"Baskerville"} name={'Font'}
                       onChange={handleFontChange} onMouseEnter={() => fontEnter("Baskerville")}
                       onMouseLeave={() => fontExit('')}/>
                <h1 className={"Baskerville"}>Baskerville</h1>
                <input type={"radio"} className={"Radio Mono"} name={"Font"} value={"Mono"}
                       onChange={handleFontChange} onMouseEnter={() => fontEnter("Mono")}
                       onMouseLeave={() => fontExit('')}/>
                <h1 className={"Mono"}>Mono</h1>
            </div>
        </main>
    );
}
