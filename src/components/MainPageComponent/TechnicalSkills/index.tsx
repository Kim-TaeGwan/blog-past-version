import React from 'react';
// import PartTitle from 'src/components/common/PartTitle';
import SkillsBar from './SkillsBar';

const TechnicalSkills = () => {
  return (
    <div className="technical_skills">
      <h4 className="part_title">Technical Skills</h4>
      <SkillsBar skillTitle="Front-End" percent="65%" style={{ width: '65%' }} />
      <SkillsBar skillTitle="Back-End" percent="35%" style={{ width: '35%' }} />
      {/* <SkillsBar skillTitle="PhotoShop" percent="80%" style={{ width: '80%' }} /> */}
      <hr />
    </div>
  );
};

export default TechnicalSkills;
