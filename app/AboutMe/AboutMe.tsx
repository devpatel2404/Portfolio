import "./AboutMe.css"

function AboutMe() {
    return (
        <main style={{height: '96vh-200px', overflowY: 'auto', margin: '0px auto'}} className={"About"}>
            <h1 className={"WhoAmI"}>Who am I?</h1>
            <p className={"WhoAmIDescription"}>Hello, I&apos;m a 19 year old sophomore studying computer science student
                at Rutgers University, and currently living in new jersey. I&apos;m driven by a passion for and am always
                eager to explore new challenges and opportunities in the tech world. Currently, I&apos;m focusing on working
                on projects and getting an internship opportunity, with a long-term vision of getting a job as a
                software engineer. Outside of work, I enjoy watching f1, playing games, and binging television, which
                helps me reduce stress and be able defog my mind after studying, and working. Feel free to explore my
                portfolio to see some of the projects I&apos;ve worked on, or connect with me by visiting my social media,
                contacting me through email or phone, or filling out the Connect With Me Form.</p>
            <h1 className={"Skills"}>Skills</h1>
            <ul>
                <li>Java</li>
                <li>Spring</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Angular</li>
                <li>C</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>SQL</li>
                <li>API Development</li>
            </ul>
            <h1 className={"Hobbys_Interests"}>Hobby/Interests</h1>
            <ul>
                <li>Video Games</li>
                <li>F1</li>
                <li>Esports</li>
                <li>Technology</li>
            </ul>
        </main>
    );
}

export default AboutMe;