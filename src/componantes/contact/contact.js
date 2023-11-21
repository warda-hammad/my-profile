import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef as UseRef } from "react";
import emailjs from "@emailjs/browser";

export default function contact() {
  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_od6okbl",
      "template_bb9x2tf",
      form.current,
      "C-l7xAv9cntgAACWC"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>let’s talk about your project</h2>
      <p>
        after we get some information from you, we’ll set up a time to discuss
        your project in further detail. You should expect to hear from us in a
        few days.
      </p>
      <div className="container contact">
        <div className="contact-option">
          <article>
            <HiOutlineMail className="icon" />
            <h4>email</h4>
            <h5>warda.hammad.2018@gmail.com</h5>
            <a
              href="mailto:warda.hammad.2018@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              send a message
            </a>
          </article>
          <article>
            <BsMessenger className="icon" />
            <h4>messenger</h4>
            <h5>contact me on messenger</h5>
            <a
              href="https://m.me/wardaHammadd"
              target="_blank"
              rel="noopener noreferrer"
            >
              send a message
            </a>
          </article>
          <article>
            <BsWhatsapp className="icon" />
            <h4>whats app</h4>
            <h5>01070153874</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01070153874"
              target="_blank"
              rel="noopener noreferrer"
            >
              send a message
            </a>
          </article>
          <article>
            <BsWhatsapp className="icon" />
            <h4>linkedin</h4>
            <h5>contact me on linkedin</h5>
            <a
              href="https://www.linkedin.com/in/warda-hammad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="9"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            send your message
          </button>
        </form>
      </div>
    </section>
  );
}
