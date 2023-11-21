import React from "react";
import "./navBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { useState } from "react";

export default function NavBar() {
  const [active, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <RiProfileLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}
