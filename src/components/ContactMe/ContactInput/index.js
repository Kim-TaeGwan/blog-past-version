import React, { useState } from "react";

import ContactInputList from "./ContactInputList";

// import { nodemailerApi } from "shared/Api";

import paper_plane_ico from "../../../assets/icon/paper_plane_ico(white).svg";

const ContactInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    // fetch("http://localhost:4000/api/sendEmail/sendEmail", {
    fetch(`https://blog-back-server.herokuapp.com/api/sendEmail/sendEmail`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => {});
    console.log(name, email, message);
  };

  // onChange
  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact_input">
      <form action="/nodemailer" method="post">
        <ContactInputList
          title="Name"
          inputName="Name"
          value={name}
          onChange={handleName}
        />
        <ContactInputList
          title="Email"
          inputName="Email"
          value={email}
          onChange={handleEmail}
        />
        <ContactInputList
          title="Message"
          inputName="Message"
          value={message}
          onChange={handleMessage}
        />
        <button type="submit" onClick={sendMail}>
          <img
            src={paper_plane_ico}
            alt="paper_plane_ico"
            width="15px"
            height="15px"
          />
          <span>Sand Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactInput;
