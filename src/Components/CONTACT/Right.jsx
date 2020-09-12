import React, { useState } from "react";
import { createDataInFirebase } from "../../FIREBASE/firebase";
import { regexEmail } from "./validation";

export default function Right() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const feedback = document.querySelector('.feedback')
  const paragraphFeedback = document.createElement('p');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 8) {
      setError("Your fullname must contain more 8 characters.");
    } else if (!email.match(regexEmail)) {
      setErrorEmail("A format is not valid.");
    } 
    else {
      createDataInFirebase({ name, email, message });
      setError("");
      setErrorEmail("");
      setName("");
      setEmail("");
      setMessage("");

      //Create a paragraph for a feedback

      paragraphFeedback.classList.add('feedback_message');
      paragraphFeedback.innerHTML = 'Thank you for your message and i will contact you soon.'

      feedback.appendChild(paragraphFeedback)


      //Remove a feel back
      setTimeout(() => {
        feedback.removeChild(paragraphFeedback)
      }, 8000);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      <div className="input_content">
        <div className="input">
          <input
            type="text"
            name="Fullname"
            className="input_margin"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error_message">
            <small>{error}</small>
          </p>
        </div>
        <div className="input">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error_message">
            <small>{errorEmail}</small>
          </p>
        </div>
      </div>
      <textarea
        name="message"
        cols={30}
        rows={10}
        autoCorrect="true"
        wrap="true"
        required
        value={message}
        placeholder="Message me..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
}
