import React, { CSSProperties, FC } from 'react';

interface Props {
  skillTitle: string;
  percent: string;
  style: CSSProperties;
}
const SkillsBar: FC<Props> = ({ skillTitle, percent, style }) => {
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
