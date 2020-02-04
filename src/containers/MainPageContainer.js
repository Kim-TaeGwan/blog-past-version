import React from 'react';
import MainPageComponent from 'components/MainPageComponent';
import SideMenu from 'layout/SideMenu';
import Footer from 'layout/Footer';
import Header from '../layout/Header';
import PortfolioList from '../components/MainPageComponent/PortfolioList';
import OverLay from '../components/common/OverLay';

const MainPageContainer = () => {
	const openNav = () => {
		document.getElementById('mySidenav').style.display = 'block';
		document.getElementById('overLay').style.display = 'block';
	};

	const closeNav = () => {
		document.getElementById('mySidenav').style.display = 'none';
		document.getElementById('overLay').style.display = 'none';
	};
	return (
		<>
			<SideMenu onClick={closeNav} />
			<MainPageComponent>
				<OverLay />
				<Header onClick={openNav} />
				<PortfolioList />
				<Footer />
			</MainPageComponent>
		</>
	);
};

export default MainPageContainer;
