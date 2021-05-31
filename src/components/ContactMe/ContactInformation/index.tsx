import React, { FC } from 'react';
import ContactInformationList from './ContactInformationList';

import MailWhiteIcon from 'assets/icon/MailWhiteIcon';

const ContactInformation: FC = () => {
  return (
    <div className="contact_information">
      <ContactInformationList childrenText="react-developer@kakao.com">
        <MailWhiteIcon />
      </ContactInformationList>
      <ContactInformationList childrenText="Seoul, Korea">
        <MailWhiteIcon />
      </ContactInformationList>
      <ContactInformationList childrenText="010-3520-3951">
        <MailWhiteIcon />
      </ContactInformationList>
    </div>
  );
};

export default ContactInformation;
