import "./Project.css"

function Projects() {
    return(
        <main className={"Projects"}>
            <a href={"https://github.com/devpatel2404/Portfolio"} target={"_blank"} className={"ProjectLink First"}>
                <h1>This Portfolio</h1>
                <ul>
                    <li>Created using JavaScript, TypeScript, and NextJS</li>
                    <li>Using HTML, and CSS.</li>
                    <li>Hosted via Vercel.</li>
                </ul>
            </a>
            <a href={"https://github.com/devpatel2404/Arrange"} target={"_blank"} className={"ProjectLink Second"}>
                <h1>Arrange (Currently in Development)</h1>
                <ul>
                    <li>A online scheduler, and a social media app.</li>
                    <li>Created using TypeScript, Angular, and Spring-boot</li>
                    <li>Using multiple databases, and apis.</li>
                </ul>
            </a>
            <a href={"https://github.com/devpatel2404/VitalityHub"} target={"_blank"} className={"ProjectLink Third"}>
                <h1>VitalityHub (Currently in Development)</h1>
                <ul>
                    <li>A fitness app.</li>
                    <li>Created using TypeScript, NextJS, and Spring-boot</li>
                    <li>Using multiple databases, and apis.</li>
                </ul>
            </a>
        </main>
    );
}

export default Projects;