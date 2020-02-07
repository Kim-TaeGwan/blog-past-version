import React from 'react';
import PartTitle from '../../common/PartTitle';
import SkillsBar from './SkillsBar';

const TechnicalSkills = () => {
	return (
		<div className="technical_skills">
			<PartTitle>Technical Skills</PartTitle>
			<SkillsBar skillTitle="Photography" percent="95%" style={{ width: '95%' }} />
			<SkillsBar skillTitle="Web Design" percent="85%" style={{ width: '85%' }} />
			<SkillsBar skillTitle="PhotoShop" percent="80%" style={{ width: '80%' }} />
		</div>
	);
};

export default TechnicalSkills;
