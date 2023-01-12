import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text" data-aos="flip-down">
        <h2>Contact</h2>
        <h3>
         Please get in touch with me by filling out this form. I will get back to you immediately.
        </h3>
      </div>
      <form
        action="https://formspree.io/f/moqzqogp"
        method="post"
        id="form"
        data-aos="flip-up"
      >
        <input
          type="text"
          name="name"
          required
          maxLength="30"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email address"
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          maxLength="500"
          required
          placeholder="Enter text here"
        ></textarea>
        <small></small>
        <button type="submit">Get in touch</button>
      </form>
    </section>
  );
};

export default Contact;
