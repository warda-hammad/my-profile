import React from "react";
import Me from "../../assets/meimage.jpg";
import "./aboutme.css";

export default function About() {
  return (
    <section id="about">
      <h2>a bit about me</h2>
      <div className="container about">
        <div className="meImage">
          <img src={Me} alt="ME" />
        </div>
        <div className="aboutInfo">
          <h2>
            name: <span>warda hammad</span>
          </h2>
          <h2>
            profession: <span>web designer & developer</span>
          </h2>
          <p>
            I'm a passionate and creative front-end developer with some
            experience building responsive, easy-to-use websites and apps.
            <hr />I help designers, small agencies and businesses bring their
            ideas to life. <hr />I have a solid knowledge of HTML, CSS, and
            JavaScript, as well as experience with front-end frameworks such as
            ReactJS and the Bootstrap framework.
            <hr />I also have a keen interest in design and UX/UI principles,
            and I enjoy collaborating with designers and back-end developers to
            deliver high-quality products that meet customers' needs and
            expectations.
            <hr />
            Always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
