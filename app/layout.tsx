import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Wrapper from "./components/wrapper";
import { truncateSync } from "fs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Patel Portfolio",
  description: "Dev Patel Portfolio",
  icons: {
    icon: "favicon.ico",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
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
