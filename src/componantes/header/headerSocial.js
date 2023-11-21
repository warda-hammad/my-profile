import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="header-social">
      <a
        href="https://www.linkedin.com/in/warda-hammad-271535230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="http://github.com/warda-hammad"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}
