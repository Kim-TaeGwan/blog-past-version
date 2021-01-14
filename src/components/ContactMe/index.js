import React from "react";
import PartTitle from "../common/PartTitle";
import ContactInformation from "./ContactInformation";
import ContactInput from "./ContactInput";

const ContentMe = ({
  handleName,
  email,
  handleEmail,
  message,
  handleMessage,
  sendMail,
  name,
}) => {
  return (
    <div className="contactme">
      <div className="contactme_box">
        <PartTitle>ContactMe</PartTitle>
        <ContactInformation />
        <hr />
        <ContactInput
          name={name}
          handleName={handleName}
          email={email}
          handleEmail={handleEmail}
          message={message}
          handleMessage={handleMessage}
          sendMail={sendMail}
        />
      </div>
    </div>
  );
};

export default ContentMe;
