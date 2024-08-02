'use client'
import Link from "next/link";
import {useState, useEffect} from "react";

export default function Home() {
    const [theme, setTheme] = useState(window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light');
    const [font, setFont] = useState('Futura');
    const [tempTheme, setTempTheme] = useState(window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light');
    const [tempFont, setTempFont] = useState('Futura');

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);
        setTheme(mediaQuery.matches ? 'dark' : 'light');

        const handleChange = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        }

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        }
    }, []);

    const handleThemeChange = (e) => {
      setTheme(e.target.value);
    };

    const handleFontChange = (e) => {
        setFont(e.target.value);
    }

    const themeEnter = (e) => {
        setTempTheme(e.target.value);
    }

    const themeExit = (e) => {
        setTempTheme('');
    }

    const fontEnter = (e) => {
        setTempFont(e.target.value);
    }

    const fontExit = (e) => {
        setTempFont('');
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
                        <button type={"button"}><h1 className={`mr-4`}>Home</h1></button>
                        <button type={"button"}><h1 className={"mr-4"}>About Me</h1></button>
                        <button type={"button"}><h1 className={"mr-4"}>Projects</h1></button>
                        <button type={"button"}><h1 className={""}>Contact</h1></button>
                    </div>
                    <div id={"Home"} hidden={false}></div>
                    <div id={"AboutMe"} hidden={true}>
                        <h1>About Me</h1>
                    </div>
                    <div id={"Projects"} hidden={true}>
                        <h1>Projects</h1>
                        <Link href={"https://vitality-hub-iota.vercel.app"} target={"_blank"}>Hello</Link>
                    </div>
                    <div id={"Contact"} hidden={true}>
                        <h1>devpatel4528@gmail.com</h1>
                        <h1>Github</h1>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className={"Options"}>
                <input type={"radio"} className={"Radio Light"} value={'light'} name={'theme'} checked={theme === 'light'}
                       onChange={handleThemeChange} onMouseEnter={themeEnter} onMouseLeave={themeExit} />
                <h1 className={"Color"}>Light</h1>
                <input type={"radio"} className={"Radio Dark"} value={'dark'} name={'theme'} checked={theme === 'dark'}
                       onChange={handleThemeChange} onMouseEnter={themeEnter} onMouseLeave={themeExit}/>
                <h1 className={"Color"}>Dark</h1>

                <input type={"radio"} className={"Radio Arial"} defaultChecked={true} value={"Arial"} name={'Font'}
                       onChange={handleFontChange} onMouseEnter={fontEnter} onMouseLeave={fontExit}/>
                <h1 className={"Futura"}>Futura</h1>
                <input type={"radio"} className={"Radio Comic"} value={"Comic"} name={'Font'}
                       onChange={handleFontChange} onMouseEnter={fontEnter} onMouseLeave={fontExit}/>
                <h1 className={"Baskerville"}>Baskerville</h1>
                <input type={"radio"} className={"Radio Mono"} name={"Font"} value={"Mono"}
                       onChange={handleFontChange} onMouseEnter={fontEnter} onMouseLeave={fontExit}/>
                <h1 className={"Mono"}>Mono</h1>
            </div>
        </main>
    );
}
