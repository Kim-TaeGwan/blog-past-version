import React, { ReactNode, VFC } from 'react';

interface Props {
  children: ReactNode;
}
const StudyTableComponent: VFC<Props> = ({ children }: any) => {
  return <div className="mainpage_wrapper">{children}</div>;
};

export default StudyTableComponent;
