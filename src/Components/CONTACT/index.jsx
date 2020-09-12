import React from "react";
import "./contact.styles.scss";
import Right from "./Right";
import Left from "./Left";

export default function Contact() {
  return (
    <section id="Contact">
      <div className="contact_container">
        <div className="header_contact">
          <h1>Contact</h1>
        </div>
        <div className="paragraph_header">
          Belong, you can find my contact or i can contact you.
        </div>
        <div className="contact_content">
          <div className="contact_left">
            <Left />
          </div>
          <div className="contact_right">
            <Right />
            <div className="feedback">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
