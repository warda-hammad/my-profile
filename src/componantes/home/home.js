import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <section className="homeSection">
        <div className="container home">
          <h2>
            Why should you not settle for cheap solutions or generic templates?
          </h2>
          <p>
            Frequently your website is the first impression your customers will
            get, so make sure it’s a good one. A designer who has a lot of
            creativity can create unique websites that attract customers, and
            based on the idea that code is close to a kind of literary work, a
            good programmer is someone who can do that. Take a look at my
            portfolio below,if you think I’d be a good match send me an email.
          </p>
          <div className="cta">
            <a href="#contact" className="btn btn-second">
              call me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
