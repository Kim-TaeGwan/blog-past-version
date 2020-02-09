import React from 'react';
import PartTitle from '../common/PartTitle';
import ContactInformation from './ContactInformation';
import ContactInput from './ContactInput';

const ContentMe = () => {
	return (
		<div className="contactme">
			<div className="contactme_box">
				<PartTitle>ContactMe</PartTitle>
				<ContactInformation />
				<hr />
				<ContactInput />
			</div>
		</div>
	);
};

export default ContentMe;
