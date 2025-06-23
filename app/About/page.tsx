"use client";
import CIcon from "@coreui/icons-react";
import "../styles/About.css";
import { cibTypescript } from "@coreui/icons";

export default function About() {
  const ELevelOne = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.className;
    const id = e.currentTarget.id;
    const items = document.getElementsByClassName(name);

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.add("FL1");
      }
    }
  };

  const LLevelOne = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.className;
    const id = e.currentTarget.id;
    const items = document.getElementsByClassName(name);

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.remove("FL1");
      }
    }
  };

  const ELevelTwo = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    const name = id.substring(0, 3);
    const items = document.getElementsByClassName(name);

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.add("FL2");
      }
    }
  };

  const LLevelTwo = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    const name = id.substring(0, 3);
    const items = document.getElementsByClassName(name);

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.remove("FL2");
      }
    }
  };

  return (
    <div className={"AboutContainer"}>
      <div
        className={"Section"}
        id={"BTW"}
        onMouseEnter={ELevelOne}
        onMouseLeave={LLevelOne}
      >
        <h1 className={"Header"}>Behind the Work</h1>
        <div className={"Subsection"}>
          <div
            className={"AboutItem BTW"}
            id={"BTW0"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>My Top Picks</h1>
            <p>
              Book The Great Gatsby, Movie Good Will Hunting, Tv Show Naruto,
              Song Mockingbird by Eminem, Artist Kendrick Lamar, Youtuber Nexpo.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW1"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Favorite Genres</h1>
            <p>
              Psychological Thriller, Mystery, Dark Comedy, Crime, Satire,
              Sci-Fi, Fantasy, Horror, Action/Adventure, Supernatural, True
              Crime and Educational.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW2"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Music</h1>
            <p>
              Helps me relax and getting into the zone. Favorite artists
              currently: Kendrick Lamar, yung kai, d4vd, and Eminem.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW3"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Video Games</h1>
            <p>
              Relieves stress and helps the brain working. Currently playing:
              Valorant, League of Legends, Honkai Star Rail, and Wuthering
              Waves.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW4"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Journaling</h1>
            <p>
              It helps me stay aware of my emotions and thoughts through the
              day, boosts long-term productivity, and makes it easier to
              remember meaningful events and important ideas.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW5"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Walking</h1>
            <p>
              It helps me relieve stress, adds movement to an otherwise
              sedentary work style, and boosts problem-solving when I'm stuck.
            </p>
          </div>
          <div
            className={"AboutItem BTW"}
            id={"BTW6"}
            onMouseEnter={ELevelTwo}
            onMouseLeave={LLevelTwo}
          >
            <h1>Favorite Teams</h1>
            <p>
              New Orleans Saints, Golden State Warriors, Red Bull Racing, Dplus
              Kia, Invictus Gaming, T1 Valorant.
            </p>
          </div>
        </div>
      </div>
      <div
        className={"Section"}
        id={"PJT"}
        onMouseEnter={ELevelOne}
        onMouseLeave={LLevelOne}
      >
        <h1 className={"Header"}>Projects</h1>
        <div className={"Subsection"}>
          <a
            href={"https://github.com/devpatel2404/Portfolio"}
            target={"_blank"}
          >
            <div
              className={"Project PJT"}
              id={"PJT0"}
              onMouseEnter={ELevelTwo}
              onMouseLeave={LLevelTwo}
            >
              <div className={"ProjectDetails"}>
                <h1>Portfolio</h1>
                <div className={"ProjectDescription"}>
                  <h2>
                    Personal website to showcase myself as a person as well as
                    my technical skills as a developer.
                  </h2>
                </div>
              </div>
              <div className={"ProjectIcons"}>
                <div className={"ProjectIcon React"}>
                  <i className={"fa-brands fa-react"} />
                  <h3>React</h3>
                </div>
                <div className={"ProjectIcon Nodejs"}>
                  <i className={"fa-brands fa-node"} />
                  <h3>Nodejs</h3>
                </div>
                <div className={"ProjectIcon TypeScript"}>
                  <CIcon className={"Icon"} icon={cibTypescript} />
                  <h3>Typescript</h3>
                </div>
                <div className={"ProjectIcon CSS"}>
                  <i className={"fa-brands fa-css3-alt"} />
                  <h3>CSS</h3>
                </div>
                <div className={"ProjectIcon NextJS"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    className={"Icon"}
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                  <h3>Nextjs</h3>
                </div>
                <div className={"ProjectIcon HTML"}>
                  <i className={"fa-brands fa-html5"} />
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
