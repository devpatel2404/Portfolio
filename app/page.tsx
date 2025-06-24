"use client";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className={"Home"}>
      <video
        width={"764"}
        height={300}
        className={"Greetings"}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source
          src={"/hellothere.mp4"}
          type={"video/mp4"}
        />
      </video>
      <h1 className={"BigTitle"}>
        The billionth Indian you&apos;ve seen... but the one you&apos;ll
        remember.
      </h1>
      <h1 className={"Quip"}>
        I am a Computer Science major at Rutgers, coding around the clock — with
        just enough time to mix in a little fun.
      </h1>
    </div>
  );
}
