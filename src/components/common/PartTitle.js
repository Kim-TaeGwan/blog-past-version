import React from 'react';

const PartTitle = (props) => {
	const { children } = props;
	return <h4 className="part_title">{children}</h4>;
};

export default PartTitle;
