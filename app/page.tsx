'use client'
import {useState, useEffect, ChangeEvent} from "react";
import Contact from "./Contact/Contact";
import Projects from "@/app/Projects/Projects";
import {CIcon} from "@coreui/icons-react";
import {cibCplusplus, cibMysql, cibNextJs, cibSpring, cibTypescript, cilCode} from "@coreui/icons";

export default function Home() {
    const [theme, setTheme] = useState('dark');

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

    const handleThemeChange = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const appliedTheme = theme;

    let cisCode;
    return (
        <main className={`${appliedTheme}-theme`} id={"Background"} style={{paddingBottom: '1.5rem'}}>
            <div className={"Navbar"}>
                <h1 className={"Title"}><a href={"#Home"}>Dev Patel</a></h1>
                <h1 className={"Role"}>Full Stack Engineer</h1>
                <div className={"Navigation"}>
                    <i className="fa-solid fa-sun" onClick={handleThemeChange}></i>
                    <i className="fa-solid fa-moon" onClick={handleThemeChange}></i>
                    <h1 className={"navlinks"}><a href={"#AboutMe"}>About Me</a></h1>
                    <h1 className={"navlinks"}><a href={"#Skills"}>Skills</a></h1>
                    <h1 className={"navlinks"}><a href={"#Projects"}>Projects</a></h1>
                    <h1 className={"navlinks"}><a href={"#Contact"}>Contact Me</a></h1>
                </div>
            </div>
            <div className={"Container"}>
                <div id={"Home"} className={"Home ${appliedTheme}-theme"}>
                    <img src={"/obi-wan-kenobi-hello-there.gif"} className={"Greetings"}></img>
                    <h1 className={""}>Welcome To My Portfolio</h1>
                    <p className={""}>If you haven&apos;t look at my resume&nbsp;
                        <a href={"/Dev Patel Resume.pdf"} target={"_blank"}>preview it here</a>.</p>
                    <p>Alternatively, you can <a href={"/Dev Patel Resume.pdf"} download={true}>download it directly</a>.
                    </p>
                </div>
                <div className={"About Section"} id={"AboutMe"}>
                    <h1 className={"AboutMeTitle"}>About Me</h1>
                    <p className={"WhoAmIDescription"}>I&apos;m a sophomore studying computer science at Rutgers University
                        in New Jersey. I&apos;m passionate about exploring new challenges in tech, focusing on projects and
                        seeking internship opportunities with the goal of becoming a software engineer. Outside of work,
                        I enjoy watching F1, playing games, and binge-watching TV shows to unwind. Check out my
                        portfolio to see
                        my projects, or connect with me through social media or my contact form!</p>
                    <h1 className={"Hobbys_Interests"}>Hobby/Interests</h1>
                    <ul>
                        <li>Video Games</li>
                        <li>F1</li>
                        <li>Esports</li>
                        <li>Technology</li>
                    </ul>
                </div>
                <div className={"Section Skills"} id={"Skills"}>
                    <h1 className={"Skills"}>Skills</h1>
                    <div>
                        <h2>Programming Languages</h2>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"}>
                                <i className="fa-solid fa-c"></i>
                                <h1>C</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <CIcon icon={cibCplusplus} className={"icons CPP"}/>
                                <h1>C++</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-golang"></i>
                                <h1>Go</h1>
                            </div>
                        </div>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-java"></i>
                                <h1>Java</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-js"></i>
                                <h1>JavaScript</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <CIcon icon={cibTypescript} className={"icons "} />
                                <h1>TypeScript</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"Frameworks"}>
                        <h2>Frameworks and Libraries</h2>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-react"></i>
                                <h1>React</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <CIcon icon={cibNextJs} className={"icons"}/>
                                <h1>NextJS</h1>
                            </div>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-angular"></i>
                                Angular
                            </div>
                        </div>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"} >
                                <CIcon icon={cibSpring} className={"icons"}/>
                                Spring
                            </div>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-node"></i>
                                NodeJS
                            </div>
                        </div>
                    </div>

                    <div className={"Web-Development"}>
                        <h2>Web Development</h2>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-html5"></i>
                                HTML
                            </div>
                            <div className={"SkillDiv"}>
                                <i className="fa-brands fa-css3-alt"></i>
                                CSS
                            </div>
                        </div>
                    </div>

                    <div className={"Databases"}>
                        <h2>Databases</h2>
                        <div className={"SkillsContainer"}>
                            <div className={"SkillDiv"}>
                                <CIcon icon={cibMysql} className={"icons"}/>
                                MySQL
                            </div>
                        </div>
                    </div>
                </div>
                <Projects/>
                <Contact/>
            </div>
        </main>
    );
}
