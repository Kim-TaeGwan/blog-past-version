import React, { useState } from "react";

import MainPageComponent from "components/MainPageComponent";
import SideMenu from "layout/SideMenu";
import Footer from "layout/Footer";
import Header from "layout/Header";
import PortfolioList from "components/MainPageComponent/PortfolioList";
import OverLay from "components/common/OverLay";
import TechnicalSkills from "components/MainPageComponent/TechnicalSkills";
import ContactMe from "components/ContactMe";
import TableComponent from "components/StudyTableComponent/Table";
import Modal from "shared/Modal";

const MainPageContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [closeBtn, setCloseBtb] = useState(false);
  const [navClose, setNavClose] = useState(false);

  const openNav = () => {
    setNavClose(!navClose);
  };
  const closeNav = () => {
    setNavClose(!navClose);
  };

  const sendMail = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    // fetch("http://localhost:4000/api/sendEmail/sendEmail", {
    fetch("https://blog-back-server.herokuapp.com/api/sendEmail/sendEmail", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(res => res.json());
    // .then(json => {});
    console.log(name, email, message);
    setCloseBtb(!closeBtn);
  };

  // onChange
  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const closeModal = () => {
    setCloseBtb(!closeBtn);
  };

  /* node서버 monggoDB 연동 */

  // const getStudyList = async () => {
  //   try {
  //     const result = await studyApi.post(
  //       "/",
  //       { gg: 123 },
  //       {
  //         params: {
  //           test: 1
  //         }
  //       }
  //     );
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getPortfolioList = async () => {
  //   try {
  //     const result = await portfolioApi.post(
  //       "/",
  //       { gg: 456 },
  //       {
  //         params: {
  //           test: 1
  //         }
  //       }
  //     );
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <SideMenu
        onClick={closeNav}
        style={{ display: navClose ? "block" : "none" }}
      />
      <MainPageComponent>
        <OverLay style={{ display: navClose ? "block" : "none" }} />
        <Header onClick={openNav} />
        <PortfolioList />
        <TableComponent />
        <TechnicalSkills />
        <ContactMe
          name={name}
          handleName={handleName}
          email={email}
          handleEmail={handleEmail}
          message={message}
          handleMessage={handleMessage}
          sendMail={sendMail}
        />
        <Footer />
      </MainPageComponent>
      <Modal
        style={{ display: closeBtn ? "" : "none" }}
        closeModal={closeModal}
      />
    </>
  );
};

export default MainPageContainer;
