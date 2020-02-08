import React from 'react';
import PartTitle from '../common/PartTitle';
import ContactInformation from './ContactInformation';

const ContentMe = () => {
	return (
		<div className="contentme">
			<div className="contentme_box">
				<PartTitle>ContentMe</PartTitle>
				<ContactInformation />
				<hr />
			</div>
		</div>
	);
};

export default ContentMe;
