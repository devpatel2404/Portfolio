"use client";
import Image from "next/image";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className={"Home"}>
      <Image
        src={"/hellothere.gif"}
        alt={"Greetings from Obi-wan Kenobi"}
        className={"Greetings"}
        width={800}
        height={347}
        priority={true}
      />
      <h1 className={"BigTitle"}>
        The millionth Indian you've seen... but the one you'll remember.
      </h1>
      <h1 className={"Quip"}>
        I'm a Computer Science major at Rutgers, coding around the clock — with
        just enough time to mix in a little fun.
      </h1>
    </div>
  );
}

// Text that has a typing like effect
