import React from "react";

import ContactInputList from "./ContactInputList";

// import { nodemailerApi } from "shared/Api";

import paper_plane_ico from "assets/icon/paper_plane_ico(white).svg";

const ContactInput = ({ name, email, message, sendMail, onChange }) => {
  return (
    <div className="contact_input">
      <form action="/nodemailer" method="post">
        <ContactInputList
          title="Name"
          inputName="name"
          value={name}
          onChange={onChange}
          placeholder="Name을 입력하세요..."
        />
        <ContactInputList
          title="Email"
          inputName="email"
          value={email}
          onChange={onChange}
          placeholder="Email을 입력하세요..."
        />
        <ContactInputList
          title="Message"
          inputName="message"
          value={message}
          onChange={onChange}
          placeholder="Message를 입력하세요..."
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
