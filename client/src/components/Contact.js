import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../assets/styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgrenwz");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      setName("");     // Clear name input
      setEmail("");    // Clear email input
      setMessage(""); 
    }
  }, [state.succeeded]);

  const customSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    const result = await handleSubmit(event);
  };
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <form onSubmit={customSubmit} className="contact-form">
            <div className="form-flex">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  value={name}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  onChange={(e) => setName(e.target.value)}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email / Phone</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  name="email"
                  placeholder="How can I reach you?"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                name="message"
                placeholder="Send me any inquiries or questions"
                onChange={(e) => setMessage(e.target.value)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Send
            </button>
          </form>
        </div>
      </div>
      {showModal && state.succeeded && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Thank You!</h2>
            <p>Your message has been successfully sent.</p>
            <button
              className="modal-close-button"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
