import React from 'react';

const SkillsBar = (props) => {
	const { skillTitle, percent, style } = props;
	return (
		<div className="SkillsBar">
			<span>{skillTitle}</span>
			<div className="skillbar_body">
				<div className="skillbar_percent" style={style}>
					{percent}
				</div>
			</div>
		</div>
	);
};

export default SkillsBar;
