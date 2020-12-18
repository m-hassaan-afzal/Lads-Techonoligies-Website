import React, { useState } from "react";
import ReactWOW from "react-wow";
import AWS from "aws-sdk";

require('dotenv').config();


const ContactForm = ({ title, tagline }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

   const submit = async (e) => {
    e.preventDefault()
    
    
    
    const SESConfig = {

      apiVersion: "2010-12-01",
      accessKeyId:process.env.REACT_APP_KEY_ID,
      secretAccessKey:process.env.REACT_APP_KEY_SECRET,
      region: process.env.REACT_APP_REGION

    }

    var params = {
      Source:process.env.REACT_APP_SOURCE,
      Destination: { /* required */
        ToAddresses: [
          process.env.REACT_APP_SOURCE
          /* more To email addresses */
        ]
      },
      Message: {
        Body:{Html:{Data:inputs.name}},
        Subject:{
          Data:'This is the subject'
        }
      }
     
      
      
    

    };

    new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {console.log(res);})
    console.log(inputs)
  };

  return (
    <>
      {title && (
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h2 style={{color:"white"}} className="text-uppercase font-700">{title}</h2>
        </ReactWOW>
      )}
      {tagline && (
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h4 style={{color:"white"}} className="text-uppercase">- {tagline} -</h4>
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
            
            className="btn btn-green btn-circle"
            onClick={submit}
          >
           Send
          </button>
        
        </ReactWOW>
      </form>
    </>
  );
};

export default ContactForm;
