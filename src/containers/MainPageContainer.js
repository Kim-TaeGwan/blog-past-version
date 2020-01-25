import React from 'react';
import MainPageComponent from 'components/MainPageComponent';
import Layout from 'layout/Layout';
import SideMenu from 'layout/SideMenu';
import Footer from 'layout/Footer';
import Header from '../layout/Header';

const MainPageContainer = () => {
	return (
		<Layout>
			<SideMenu />
			<MainPageComponent>
				<Header />
				<Footer />
			</MainPageComponent>
		</Layout>
	);
};

export default MainPageContainer;
