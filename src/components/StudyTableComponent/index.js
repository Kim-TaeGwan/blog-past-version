import React from 'react';

const StudyTableComponent = (props) => {
	const { children } = props;
	return <div className="mainpage_wrapper">{children}</div>;
};

export default StudyTableComponent;
