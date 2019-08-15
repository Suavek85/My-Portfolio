import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <section id="contactme" class="contact">
      <h1>CONTACT</h1>
      <h2>Slawomir Niemiec</h2>

      <a href="mailto:slawekniemiec@gmail.com" class="contact__icon">
        <i class="fas fa-envelope-square" />
      </a>
      <a href="https://github.com/Suavek85" class="contact__icon">
        <i class="fab fa-github-square" />
      </a>
      <a href="https://codepen.io/suavek1010/pens/public/" class="contact__icon">
      <i class="fab fa-codepen"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/slawomirniemiec/"
        class="contact__icon"
      >
        <i class="fab fa-linkedin" />
      </a>
    </section>
  );
};

export default Footer