import React from 'react';

const ContactInformationList = (props) => {
	const { srcIco, children } = props;
	return (
		<div className="contact_information_list">
			<div className="address_ico">
				<img src={srcIco} alt="address_ico" width="100%" height="100%" />
			</div>
			<div className="contact">{children}</div>
		</div>
	);
};

export default ContactInformationList;
