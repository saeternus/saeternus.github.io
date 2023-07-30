import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    // For example, you can send the form data to a backend server using fetch or axios
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="conatactcontainer">
      <form onSubmit={handleSubmit} className="contactbox">
        <div classname="heading">Contact Us</div>
        <div className="nameemail">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Contact;
