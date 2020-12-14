import React, { useState } from "react";
import ReactWOW from "react-wow";

const ContactForm = ({ title, tagline }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      {title && (
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h2 className="text-uppercase font-700">{title}</h2>
        </ReactWOW>
      )}
      {tagline && (
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h4 className="text-uppercase">- {tagline} -</h4>
        </ReactWOW>
      )}
      <form
        name="contact-form"
        id="contact-form"
        action="php/contact.php"
        method="POST"
        className="mt-50"
      >
        <div className="messages"></div>
        <ReactWOW animation="fadeTop" delay="0.1s">
          <div className="form-group">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required="required"
              placeholder="Your Name"
              data-error="Your Name is Required"
              value={inputs.name}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors mt-20"></div>
          </div>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.2s">
          <div className="form-group">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required="required"
              data-error="Please Enter Valid Email"
              value={inputs.email}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors mt-20"></div>
          </div>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.3s">
          <div className="form-group">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="7"
              placeholder="Your Message"
              required
              data-error="Please, Leave us a message"
              value={inputs.message}
              onChange={handleInputChange}
            ></textarea>
            <div className="help-block with-errors mt-20"></div>
          </div>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.4s">
          <button
            type="submit"
            name="submit"
            className="btn btn-color btn-circle"
          >
            Book Now
          </button>
        </ReactWOW>
      </form>
    </>
  );
};

export default ContactForm;
