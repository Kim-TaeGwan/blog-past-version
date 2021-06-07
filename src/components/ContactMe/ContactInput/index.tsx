import React, { FC } from 'react';

import ContactInputList from './ContactInputList';

// import { nodemailerApi } from "shared/Api";

import PaperPlaneIcon from 'assets/icon/PaperPlaneIcon';

interface Props {
  name: string;
  email: string;
  message: string;
  sendMail: (e: any) => void;
  onChange: (e: any) => void;
}
const ContactInput: FC<Props> = ({ name, email, message, sendMail, onChange }) => {
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
          <div className="img">
            <PaperPlaneIcon />
          </div>
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactInput;
