import React, {useState} from "react";

const ContactFormSix = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <form
      name="contact-form"
      id="contact-form"
      action="php/contact.php"
      method="POST"
      className="mt-50"
    >
      <div className="messages"></div>
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
      <div className="form-group">
        <label className="sr-only" htmlFor="phone">
          Your Phone
        </label>
        <input
          type="phone"
          name="phone"
          className="form-control"
          id="phone"
          placeholder="Your Phone"
          value={inputs.phone}
          onChange={handleInputChange}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
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
      <button type="submit" name="submit" className="btn btn-color btn-circle">
        Send Message
      </button>
    </form>
  );
};

export default ContactFormSix;
