import React, { useCallback, useState } from "react";

import MainPageComponent from "components/MainPageComponent";
import Footer from "layout/Footer";
import Header from "layout/Header";
import PortfolioList from "components/MainPageComponent/PortfolioList";
import OverLay from "components/common/OverLay";
import TechnicalSkills from "components/MainPageComponent/TechnicalSkills";
import ContactMe from "components/ContactMe";
import TableComponent from "components/StudyTableComponent/Table";
import Modal from "shared/Modal";

const MainPageContainer = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [closeBtn, setCloseBtb] = useState(false);
  // const [navClose, setNavClose] = useState(false);

  const openNav = () => {
    // setNavClose(!navClose);
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("overLay").style.display = "block";
  };

  // contactme 이메일 전송
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
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  // contactme onChange
  const { name, email, message } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

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
      <MainPageComponent>
        <OverLay
        //  style={{ display: navClose ? "block" : "none" }}
        />
        <Header onClick={openNav} />
        <PortfolioList />
        <TableComponent main />
        <TechnicalSkills />
        <ContactMe
          name={name}
          email={email}
          message={message}
          sendMail={sendMail}
          onChange={onChange}
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
