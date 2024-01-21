import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sendEmail = () => {
    const { name, email, phone, subject, message } = formValues;

    const emailData = {
      Host: "smtp.elasticemail.com",
      Username: "taracaguiat456@gmail.com",
      Password: "483DE6F1CD138B227A481E6F5DB06AF4799E",
      To: "taracaguiat456@gmail.com",
      From: "taracaguiat456@gmail.com",
      Subject: subject,
      Body: `Full Name: ${name}\n\nEmail Address: ${email}\n\nPhone Number: ${phone}\n\nMessage: ${message}`,
    };

    window.Email.send(emailData).then((message) => alert(message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty before submitting
    if (Object.values(formValues).some((value) => value.trim() === "")) {
      alert("Please fill in all fields");
      return;
    }

    sendEmail();
    e.target.reset();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <section className="contact">
      <h2>
        Contact Us <span>📬</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box1">
          <div
            className={`input-field field ${
              formValues.name.trim() === "" ? "empty" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="item"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-box2">
          <div
            className={`input-field field ${
              formValues.email.trim() === "" ? "empty" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              className="item"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-box3">
          <div
            className={`input-field field ${
              formValues.phone.trim() === "" ? "empty" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              className="item"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-box4">
          <div
            className={`input-field field ${
              formValues.subject.trim() === "" ? "empty" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              className="item"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-box5">
          <div
            className={`input-field field ${
              formValues.message.trim() === "" ? "empty" : ""
            }`}
          >
            <textarea
              type="text"
              placeholder="Message"
              id="message"
              className="item"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
