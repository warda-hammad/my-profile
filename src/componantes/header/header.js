import React from "react";
import CallToAction from "../calltoaction";
import HeaderSocial from "./headerSocial";
import "./header.css";

export default function Header() {
  return (
    <header className="container header-container">
      <div className="info">
        <h5>hello i'm </h5>
        <h1>warda hammad</h1>
        <h5 className="text-light space">frontend develober</h5>
        <CallToAction />
        {/* <HeaderSocial /> */}
        <div>
          <a href="#contact" className="scroll-down">
            scroll down
          </a>
        </div>
      </div>
    </header>
  );
}
