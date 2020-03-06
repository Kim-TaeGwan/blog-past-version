import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import StudyTable from './pages/studytable';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/studyTable" component={StudyTable} />
		</Switch>
	);
};

export default Routes;
