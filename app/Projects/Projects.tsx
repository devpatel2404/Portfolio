import "./Project.css"

function Projects() {
    return(
        <main className={"Projects"}>
            <button className={"ProjectLink"}>
                <a href={"https://github.com/devpatel2404/Portfolio"} target={"_blank"}>
                    <h1>This Portfolio</h1>
                    <ul>
                        <li>Created using JavaScript, TypeScript, and NextJS</li>
                        <li>Using HTML, and CSS.</li>
                        <li>Hosted via Vercel.</li>
                    </ul>
                </a>
            </button>
            <button className={"ProjectLink"}>
                <a href={"https://github.com/devpatel2404/Arrange"} target={"_blank"}>
                    <h1>Arrange (Currently in Development)</h1>
                    <ul>
                        <li>A online scheduler, and a social media app.</li>
                        <li>Created using TypeScript, Angular, and Spring-boot</li>
                        <li>Using mulitple databases, and apis.</li>
                    </ul>
                </a>
            </button>
        </main>
    );
}

export default Projects;