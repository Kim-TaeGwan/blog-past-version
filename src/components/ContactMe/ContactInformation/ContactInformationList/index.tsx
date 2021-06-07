import React, { VFC } from 'react';

interface Props {
  childrenText: string;
  children: any;
}
const ContactInformationList: VFC<Props> = ({ childrenText, children }) => {
  return (
    <div className="contact_information_list">
      <div className="address_ico">{children}</div>
      <div className="contact">{childrenText}</div>
    </div>
  );
};

export default ContactInformationList;
