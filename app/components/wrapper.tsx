"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/globals.css";
import Spotify from "./spotifycomponent";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const getName = (path: string): string => {
    if (path == "/") return "Home";
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "Home";
    return segments[0];
  };

  const path = usePathname();
  const currentPage: string = getName(path);

  return (
    <div className={"Wrapper"}>
      <Navbar page={currentPage} />
      {children}
      <div className={(currentPage == "Home" ? "" : "NDisplay") + " "}>
        <Spotify />
      </div>
      <Footer />
    </div>
  );
}
