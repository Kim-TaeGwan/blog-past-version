import React from 'react';
import ContactInformationList from './ContactInformationList';

import mail_ico from '../../../assets/icon/mail_ico(white).svg';
import phone_ico from '../../../assets/icon/phone_ico(white).svg';
import spot_ico from '../../../assets/icon/spot_ico(white).svg';

const ContactInformation = () => {
	return (
		<div className="contact_information">
			<ContactInformationList srcIco={mail_ico} children="react-developer@kakao.com" />
			<ContactInformationList srcIco={spot_ico} children="Seoul, Korea" />
			<ContactInformationList srcIco={phone_ico} children="010-3520-3951" />
		</div>
	);
};

export default ContactInformation;
