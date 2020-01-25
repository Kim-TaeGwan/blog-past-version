import React from 'react';

const MainPageComponent = (props) => {
	const { children } = props;
	return <div className="mainpage_wrapper">{children}</div>;
};

export default MainPageComponent;
