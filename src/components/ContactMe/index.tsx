import React, { FC } from 'react';
import ContactInformation from './ContactInformation';
import ContactInput from './ContactInput';

interface Props {
  email: string;
  message: string;
  sendMail: (e: any) => void;
  name: string;
  onChange: (e: any) => void;
}
const ContentMe: FC<Props> = ({ email, message, sendMail, name, onChange }) => {
  return (
    <div className="contactme">
      <div className="contactme_box">
        <h4 className="part_title">ContactMe</h4>
        <ContactInformation />
        <hr />
        <ContactInput name={name} email={email} message={message} sendMail={sendMail} onChange={onChange} />
      </div>
    </div>
  );
};

export default ContentMe;
