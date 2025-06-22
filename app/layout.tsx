import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Wrapper from "./components/wrapper";
import { truncateSync } from "fs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Patel Portfolio",
  description: "Dev Patel Portfolio",
};

const getNameFromPath = (path: string): string => {
  if (path === "/") return "Home";
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return "Home";
  return segments[0];
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode }>,
) {
  return (
    <html lang="en">
      <head>
        <link
          rel={"stylesheet"}
          href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}
        />
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <link
          rel={"preconnect"}
          href={"https://fonts.gstatic.com"}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem("theme") || "Dark";
                document.documentElement.className = theme;
              })();
            `,
          }}
        />
      </head>
      <body>
        <main>
          <Wrapper>
            {children}
          </Wrapper>
        </main>
      </body>
    </html>
  );
}

//Do Today:
//  Dimming Other Elements when one is hovered the others are blurred or the opacity is lower
//  Adding More To Project Section
//  Navbar when in light mode the sun appears initially then the moon comes out
