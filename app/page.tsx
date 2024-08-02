'use client'
import Link from "next/link";
import {useState, useEffect, ChangeEvent} from "react";
import {green} from "next/dist/lib/picocolors";

export default function Home() {
    const [theme, setTheme] = useState(window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light');
    const [font, setFont] = useState('Futura');
    const [tempTheme, setTempTheme] = useState(window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light');
    const [tempFont, setTempFont] = useState('Futura');
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);
        setTheme(mediaQuery.matches ? 'dark' : 'light');

        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
        }

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
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
                <div className={`Information ${appliedFont}`} style={{height: '94vh'}}>
                    <h1 className={"Title"}>Dev Patel</h1>
                    <h1 className={"Role"}>Full Stack Engineer</h1>
                    <div className={"flex justify-center"} id={"NavBar"}>
                        <button type={"button"} onClick={() => showSection("Home")}><h1 className={`mr-4`}>
                            Home</h1></button>
                        <button type={"button"} onClick={() => showSection("About")}><h1 className={"mr-4"}>
                            About</h1></button>
                        <button type={"button"} onClick={() => showSection("Projects")}><h1 className={"mr-4"}>
                            Projects</h1></button>
                        <button type={"button"} onClick={() => showSection("Contact")}><h1 className={""}>
                            Contact</h1></button>
                    </div>
                    <div id={"Home"} style={{display: activeSection == "Home" ? "initial" : "none"}}></div>
                    <div id={"AboutMe"} style={{display: activeSection == "About" ? "block" : "none"}}>
                        <h1>About Me</h1>
                    </div>
                    <div id={"Projects"} style={{display: activeSection == "Projects" ? "initial" : "none"}}>
                        <h1>Projects</h1>
                        <Link href={"https://vitality-hub-iota.vercel.app"} target={"_blank"}>Hello</Link>
                    </div>
                    <div id={"Contact"} style={{display: activeSection == "Contact" ? "initial" : "none"}}>
                        <h1>devpatel4528@gmail.com</h1>
                        <h1>Github</h1>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className={"Options"}>
                <input type={"radio"} className={"Radio Light"} value={'light'} name={'theme'} checked={theme === 'light'}
                       onChange={handleThemeChange} onMouseEnter={() => themeEnter("light")} onMouseLeave={() => themeExit('')} />
                <h1 className={"Color"}>Light</h1>
                <input type={"radio"} className={"Radio Dark"} value={'dark'} name={'theme'} checked={theme === 'dark'}
                       onChange={handleThemeChange} onMouseEnter={() => themeEnter("dark")} onMouseLeave={() => themeExit('')}/>

                <h1 className={"Color"}>Dark</h1>

                <input type={"radio"} className={"Radio Arial"} defaultChecked={true} value={"Futura"} name={'Font'}
                       onChange={handleFontChange} onMouseEnter={() => fontEnter("Futura")} onMouseLeave={() => fontExit('')}/>
                <h1 className={"Futura"}>Futura</h1>
                <input type={"radio"} className={"Radio Comic"} value={"Baskerville"} name={'Font'}
                       onChange={handleFontChange} onMouseEnter={() => fontEnter("Baskerville")} onMouseLeave={() => fontExit('')}/>
                <h1 className={"Baskerville"}>Baskerville</h1>
                <input type={"radio"} className={"Radio Mono"} name={"Font"} value={"Mono"}
                       onChange={handleFontChange} onMouseEnter={() => fontEnter("Mono")} onMouseLeave={() => fontExit('')}/>
                <h1 className={"Mono"}>Mono</h1>
            </div>
        </main>
    );
}
