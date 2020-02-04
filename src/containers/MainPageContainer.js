import React from 'react';
import MainPageComponent from 'components/MainPageComponent';
import Layout from 'layout/Layout';
import SideMenu from 'layout/SideMenu';
import Footer from 'layout/Footer';
import Header from '../layout/Header';
import PortfolioList from '../components/MainPageComponent/PortfolioList';

const MainPageContainer = () => {
	const openNav = () => {
		document.getElementById('mySidenav').style.display = 'block';
	};

	const closeNav = () => {
		document.getElementById('mySidenav').style.display = 'none';
	};
	return (
		<Layout>
			<SideMenu onClick={closeNav} />
			<MainPageComponent>
				<Header onClick={openNav} />
				<PortfolioList />
				<Footer />
			</MainPageComponent>
		</Layout>
	);
};

export default MainPageContainer;
