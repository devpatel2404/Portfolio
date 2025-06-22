"use client";

import CIcon from "@coreui/icons-react";
import "../styles/tech.css";
import {
  cibApple,
  cibIntellijidea,
  cibPostman,
  cibUbuntu,
  cibWebstorm,
} from "@coreui/icons";

export default function Tech() {
  const focused = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    const items = document.getElementsByClassName("TechChangeFocus");

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.add("unfocused");
      }
    }
  };

  const unfocused = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    const items = document.getElementsByClassName("TechChangeFocus");

    for (let i = 0, max = items.length; i < max; i++) {
      if (items[i].id != id) {
        items[i].classList.remove("unfocused");
      }
    }
  };

  return (
    <div className={"Tech"}>
      <div className={"TechSection"}>
        <h1 className={"TechTitle TechChangeFocus"}>Operating Systems</h1>
        <div className={"TechItemContainer"}>
          <div
            className={"TechItem TechChangeFocus"}
            id={"TC0"}
            onMouseEnter={focused}
            onMouseLeave={unfocused}
          >
            <CIcon icon={cibApple} className={"TechIcon CIcon"} />
            <div className={"ItemText"}>
              <h1 className={"LTitle"}>MacOS</h1>
              <p>
                Main development environment is on my mac, has some issues when
                working on software that it is not compatible with.
              </p>
            </div>
          </div>
          <div
            className={"TechItem TechChangeFocus"}
            id={"TC1"}
            onMouseEnter={focused}
            onMouseLeave={unfocused}
          >
            <CIcon icon={cibUbuntu} className={"TechIcon Ubuntu"} />
            <div className={"ItemText"}>
              <h1 className={"LTitle"}>Ubuntu Linux</h1>
              <p>
                Mainly used when working on assignments for courses, rutgers
                ilab computers, and I have ubuntu installed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"TechSection"}>
        <h1 className={"TechTitle TechChangeFocus"}>Workstation</h1>
        <div className={"TechItemContainer"}>
          <a href={"https://support.apple.com/en-us/111901"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC2"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/Macbook.png"} />
              </div>
              <div className={"ItemText"}>
                <h1>MacBook Pro M1 Chip</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a href={"https://support.apple.com/en-us/111842"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC3"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/iPad.png"} />
              </div>
              <div className={"ItemText"}>
                <h1>Ipad 11&quot; 4th Generation</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a
            target={"_blank"}
            href={"https://www.walmart.com/ip/CYBERPOWERPC-Gamer-Xtreme-VR-GXiVR8060A5-Gaming-PC-Intel-i5-8400-2-8GHz-8GB-DDR4-NVIDIA-GeForce-GTX-1060-3GB-120GB-SSD-1TB-HDD-Win10-Home-Black-Deskt/380828801"}
          >
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC4"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/Desktop.png"} />
              </div>
              <div className={"ItemText"}>
                <h1>CyberPowerPC GXiVR8060A5</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a
            target={"_blank"}
            href={"https://www.razer.com/gaming-mice/razer-deathadder-v3"}
          >
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC5"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/Mouse.webp"} />
              </div>
              <div className={"ItemText"}>
                <h1>Razer DeathAdder v3</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a
            target={"_blank"}
            href={"https://www.logitechg.com/en-us/products/gaming-keyboards/g513-backlit-mechanical-gaming-keyboard.920-009322.html"}
          >
            <div
              className="TechItem TechChangeFocus"
              id={"TC6"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/G513.webp"} />
              </div>
              <div className={"ItemText"}>
                <h1>Logitech G513 Keyboard</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a
            target={"_blank"}
            href={"https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-s"}
          >
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC7"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/headphones.webp"} />
              </div>
              <div className={"ItemText"}>
                <h1>Sony WH-1000XM5</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
          <a
            target={"_blank"}
            href={"https://www.bestbuy.com/site/samsung-34-viewfinity-s5-ultrawide-qhd-100hz-amd-freesync-monitor-with-hdr10-displayport-hdmi-black/6532277.p?skuId=6532277"}
          >
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC8"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <div className={"DImage"}>
                <img src={"/Monitor.png"} />
              </div>
              <div className={"ItemText"}>
                <h1>Samsung 34&quot; ViewFinity</h1>
              </div>
              <i
                className={"fa-solid fa-arrow-up-right-from-square ExternalLink"}
              />
            </div>
          </a>
        </div>
      </div>

      <div className={"TechSection"}>
        <h1 className={"TechTitle TechChangeFocus"}>Primary Software</h1>
        <div className={"TechItemContainer"}>
          <a target={"_blank"} href={"https://neovim.io/"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC9"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <svg
                fill="#57A143"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#57A143"
                transform="matrix(1, 0, 0, 1, 0, 0)"
                className={"svg"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                </g>
                <g id="SVGRepo_iconCarrier">
                  <title>Neovim icon</title>
                  <path d="M2.902,4.998l3.864,5.754v12.151l-4.207-4.198V5.344L2.902,4.998 M2.97,4.287L2.107,5.158v13.734l5.112,5.101 v-13.38L2.97,4.287L2.97,4.287z M21.858,5.207L16.676,0v13.331l4.335,6.519c0,0,0.882-0.957,0.882-0.957L21.858,5.207z M7.215,0.001 l13.29,20.28L16.786,24L3.489,3.765L7.215,0.001z">
                  </path>
                </g>
              </svg>
              <div className={"ItemText"}>
                <h1>Neovim</h1>
                <p>
                  Who knew you can use it without bringing it into every
                  conversation. Simple and lightweight editor.
                </p>
              </div>
            </div>
          </a>
          <a href={"https://www.jetbrains.com/idea/"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC10"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <CIcon icon={cibIntellijidea} className={"TechIcon CIcon"} />
              <div className={"ItemText"}>
                <h1>Intellij</h1>
                <p>
                  I prefer it when writing Java handles Java&apos;s robutsness
                  extremely well, and it offers autocorrection, and
                  refactorization.
                </p>
              </div>
            </div>
          </a>
          <a href={"https://www.jetbrains.com/webstorm/"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC11"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <CIcon icon={cibWebstorm} className={"TechIcon CIcon"} />
              <div className={"ItemText"}>
                <h1>Webstorm</h1>
                <p>
                  Primarily used for web development sometimes switch between
                  Neovim and Webstorm depending on my mood.
                </p>
              </div>
            </div>
          </a>
          <a href={"https://www.postman.com/"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC12"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <CIcon icon={cibPostman} className={"TechIcon Postman"} />
              <div className={"ItemText"}>
                <h1>Postman</h1>
                <p>
                  Postman is what i use to test my API&apos;s to make sure
                  everything is working it has a nice interface and is easy and
                  simple to use
                </p>
              </div>
            </div>
          </a>
          <a href={"https://iterm2.com/index.html"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC13"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <img src={"/iterm.svg"} className={"Downloaded"} />
              <div className={"ItemText"}>
                <h1>iTerm2</h1>
                <p>
                  Allows for a lot of customizations color schemes allows me to
                  have a conformatble setup that I know.
                </p>
              </div>
            </div>
          </a>
          <a href={"https://obsidian.md/"} target={"_blank"}>
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC14"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <img className={"Downloaded"} src={"/obsidian.svg"} />
              <div className={"ItemText"}>
                <h1>Obsidian</h1>
                <p>
                  Good customization allow me to have code in my notes without
                  it gettting awkward, numerous plugins.
                </p>
              </div>
            </div>
          </a>
          <a
            href={"https://github.com/nikitabobko/AeroSpace"}
            target={"_blank"}
          >
            <div
              className={"TechItem TechChangeFocus"}
              id={"TC15"}
              onMouseEnter={focused}
              onMouseLeave={unfocused}
            >
              <img className={"Downloaded"} src={"/AppIcon.png"} />
              <div className={"ItemText"}>
                <h1>Aerospace</h1>
                <p>
                  Changed the way I use my mac, easy to configure and extremely
                  customizable. Gets a little annoying when I am not working.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

//Only thing to do is for the names of the images to be named better or more professionally
