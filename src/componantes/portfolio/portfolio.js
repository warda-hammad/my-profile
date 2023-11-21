import React from "react";
import "./portfolio.css";
import Data from "../../portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>my portfolio</h2>
      <div className="container portfolio">
        {Data.map(({ id, image, title, github, demo, info }) => {
          return (
            <article key={id}>
              <img src={image} alt="" />
              <div className="exInfo">
                <h4>{title}</h4>
                <p>{info}</p>
                <a
                  href={github}
                  alt=""
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  git hub
                </a>
                <a
                  href={demo}
                  alt=""
                  className="btn btn-second"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
