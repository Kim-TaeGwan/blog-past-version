import React from 'react';

const ContactInputList = (props) => {
	const { title, inputName } = props;
	return (
		<div className="contact_input_list">
			<span>{title}</span>
			<input type="text" name={inputName} />
		</div>
	);
};

export default ContactInputList;
