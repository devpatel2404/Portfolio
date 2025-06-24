"use client";

import "../styles/Footer.css";
import { cibLeetcode } from "@coreui/icons";
import { CIcon } from "@coreui/icons-react";

export default function Footer() {
  return (
    <div className={"Footer"}>
      <div>
        <a
          href="ma&#105;lto&#58;&#100;&#101;&#118;%7&#48;%61%7&#52;&#101;l&#52;5&#50;8%&#52;&#48;&#103;&#109;&#97;il&#37;2E&#99;&#37;6Fm"
          target="_blank"
          aria-label={"Email me"}
        >
          <i className={"fa-regular fa-envelope"}></i>
        </a>
        <a
          href={"https://www.linkedin.com/in/dev-patel-7110072b7/"}
          target={"_blank"}
          aria-label={"Open my linkedin in a new tab"}
        >
          <i className={"fa-brands fa-linkedin"}></i>
        </a>
        <a
          href={"https://www.instagram.com/devsp.4"}
          target={"_blank"}
          aria-label={"Open my instagram in a new tab."}
        >
          <i className={"fa-brands fa-instagram"}></i>
        </a>
        <a
          href={"https://github.com/devpatel2404"}
          target={"_blank"}
          aria-label={"Open my github profile in a new tab."}
        >
          <i className={"fa-brands fa-github"}></i>
        </a>
        <a
          href={"https://open.spotify.com/user/31ibf2q2csvfvhn5j5od22f3upaq"}
          target={"_blank"}
          aria-label={"Open my public spotify profile in a new tab."}
        >
          <i className={"fa-brands fa-spotify"}></i>
        </a>
        <a
          href={"https://leetcode.com/u/devpatel2404/"}
          target="_blank"
          aria-label={"Open my leetcode profile in a new tab."}
        >
          <CIcon
            icon={cibLeetcode}
            className={"leetcode"}
          />
        </a>
      </div>
    </div>
  );
}
