import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../assets/styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgrenwz");

  // if (state.succeeded) {
  //   return (
  //     <div id="contact">
  //       <div className="items-container">
  //         <div className="contact_wrapper">
  //           <h1>Thank You!</h1>
  //           <p>Your message has been successfully sent.</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-flex">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="What's your name?"
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
                  type="email"
                  name="email"
                  placeholder="How can I reach you?"
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
                name="message"
                placeholder="Send me any inquiries or questions"
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
      {state.succeeded && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Thank You!</h2>
            <p>Your message has been successfully sent.</p>
            <button
              className="modal-close-button"
              onClick={() => window.location.reload()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
