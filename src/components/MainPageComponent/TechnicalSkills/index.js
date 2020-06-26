import React from 'react';
import PartTitle from '../../common/PartTitle';
import SkillsBar from './SkillsBar';

const TechnicalSkills = () => {
	return (
		<div className="technical_skills">
			<PartTitle>Technical Skills</PartTitle>
			<SkillsBar skillTitle="Front-End" percent="65%" style={{ width: '65%' }} />
			<SkillsBar skillTitle="Back-End" percent="35%" style={{ width: '35%' }} />
			{/* <SkillsBar skillTitle="PhotoShop" percent="80%" style={{ width: '80%' }} /> */}
			<hr />
		</div>
	);
};

export default TechnicalSkills;
