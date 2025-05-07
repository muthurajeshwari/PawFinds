import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className="section-heading">
      <h1>How can we help you?</h1>
     </div>

     <div className="contact">
        <div className="left">
            <img src="https://img.freepik.com/premium-photo/medium-shot-girl-hugging-dog_23-2148883010.jpg" alt="" className="pic" />

        </div>
        <div className="right">
            <form action="">
                <label htmlFor="name">Enter your Name:
                    <input type="text" />
                </label>
                <label htmlFor="email">Enter your mail:
                    <input type="email" />
                </label>
                <label htmlFor="msg">Enter your Question:
                    <textarea name="msg" id=""></textarea>
                </label>
                <button className='btn'>Send</button>
            </form>
           

        </div>
     </div>
      
    </>
  )
}

export default Contact
