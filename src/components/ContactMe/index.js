import React from "react";
import PartTitle from "components/common/PartTitle";
import ContactInformation from "./ContactInformation";
import ContactInput from "./ContactInput";

const ContentMe = ({ email, message, sendMail, name, onChange }) => {
  return (
    <div className="contactme">
      <div className="contactme_box">
        <PartTitle>ContactMe</PartTitle>
        <ContactInformation />
        <hr />
        <ContactInput
          name={name}
          email={email}
          message={message}
          sendMail={sendMail}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ContentMe;
