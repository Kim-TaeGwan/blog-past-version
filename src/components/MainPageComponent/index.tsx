import React, { ReactNode, VFC } from 'react';

interface Props {
  children: ReactNode;
}
const MainPageComponent: VFC<Props> = ({ children }) => {
  return <div className="mainpage_wrapper">{children}</div>;
};

export default MainPageComponent;
