import React from "react";
import "./Contact.css";

const Contact = () => {
  const sendEmail = () => {
    const fullName = document.getElementById("name").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailData = {
      Host: "smtp.elasticemail.com",
      Username: "taracaguiat456@gmail.com",
      Password: "483DE6F1CD138B227A481E6F5DB06AF4799E",
      To: "taracaguiat456@gmail.com",
      From: "taracaguiat456@gmail.com",
      Subject: subject,
      Body: `Full Name: ${fullName}\n\nEmail Address: ${emailAddress}\n\nPhone Number: ${phoneNumber}\n\nMessage: ${message}`,
    };

    window.Email.send(emailData).then((message) => alert(message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    e.target.reset();
  };

  return (
    <section className="contact">
      <h2>
        Contact Us <span>📬</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box1">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="item"
              autoComplete="off"
            />
            <div className="error-text">Full Name can't be blank</div>
          </div>
        </div>

        <div className="input-box2">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              className="item"
              autoComplete="off"
            />
            <div className="error-text">Email can't be blank</div>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              className="item"
              autoComplete="off"
            />
            <div className="error-text">Phone Number can't be blank</div>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              className="item"
              autoComplete="off"
            />
            <div className="error-text">Subject can't be blank</div>
          </div>
        </div>

        <div className="textarea field field">
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="item"
            autoComplete="off"
          ></textarea>
          <div className="error-text">Message can't be blank</div>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
