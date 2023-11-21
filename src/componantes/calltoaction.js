import React from "react";
import "./header/header.css";
// import CV from "./../assets/cv.pdf";

export default function CallToAction() {
  return (
    <div className="cta">
      {/* <a href="" download className="btn">
        download CV
      </a> */}
      <a href="#contact" className="btn btn-second">
        call me
      </a>
    </div>
  );
}
