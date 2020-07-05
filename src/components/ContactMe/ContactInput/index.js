import React from 'react';

import ContactInputList from './ContactInputList';

import paper_plane_ico from '../../../assets/icon/paper_plane_ico(white).svg';

const ContactInput = () => {
	return (
		<div className="contact_input">
			<form action="/nodemailer" method="get">
				<ContactInputList title="Name" inputName="Name" />
				<ContactInputList title="Email" inputName="Email" />
				<ContactInputList title="Message" inputName="Message" />
				<button type="submit">
					<img src={paper_plane_ico} alt="paper_plane_ico" width="15px" height="15px" />
					<span>Sand Message</span>
				</button>
			</form>
		</div>
	);
};

export default ContactInput;
