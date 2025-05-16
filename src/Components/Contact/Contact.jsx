import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="section-heading">
        <h1>How can we help you?</h1>
      </div>

      <div className="contact">
        <div className="left">
          <img
            src="https://img.freepik.com/premium-photo/medium-shot-girl-hugging-dog_23-2148883010.jpg"
            alt=""
            className="pic"
          />
        </div>
        <div className="right">
          <form action="https://getform.io/f/bvryelvb" method="POST">
            <label htmlFor="name">
              Enter your Name:
              <input type="text" name="name" />
            </label>
            <label htmlFor="email">
              Enter your mail:
              <input type="email" name="email" />
            </label>
            <label htmlFor="msg">
              Enter your Question:
              <textarea name="msg"></textarea>
            </label>

            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
