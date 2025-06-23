"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../styles/Navbar.css";

type NavbarProp = {
  page: string;
};

export default function Navbar({ page }: NavbarProp) {
  const getLeftVal = (page: string) => {
    if (page == "About") return 76;
    else if (page == "Tech") return 152;
    return 0;
  };

  const [theme, setTheme] = useState("Dark");
  const [left, setLeft] = useState(getLeftVal(page));

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "Dark");
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const newVal = getLeftVal(page);
    setLeft(newVal);
  }, [page]);

  let changeTheme = () => {
    let newTheme = theme === "Dark" ? "Light" : "Dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={"Navbar"}>
      <h1 className={"Title"}>
        <Link href={"/"} id={"Home"}>Dev Patel</Link>
      </h1>
      <div className={"NavLinks"}>
        <div
          className={"SlidingBackground"}
          style={{ left: `${left}px` }}
        >
        </div>
        <Link
          href={"/"}
          className={"Navigation"}
          id={"Home"}
        >
          Home
        </Link>
        <Link
          href={"/About"}
          className={"Navigation"}
          id={"About"}
        >
          About
        </Link>
        <Link
          href={"/Tech"}
          className={"Navigation"}
          id={"Tech"}
        >
          Tech
        </Link>
      </div>
      <div className={"ChangeMode"}>
        <button
          type={"button"}
          value={"Light"}
          onClick={changeTheme}
          className={theme == "Light" ? "NDisplay" : ""}
        >
          <i className={"fa-solid fa-sun"}></i>
        </button>
        <button
          type={"button"}
          value={"Dark"}
          onClick={changeTheme}
          className={theme == "Dark" ? "NDisplay" : ""}
        >
          <i className={"fa-solid fa-moon"}></i>
        </button>
      </div>
    </div>
  );
}
