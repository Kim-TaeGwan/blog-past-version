import React from "react";

const Modal = ({ closeModal, style }) => {
  return (
    <div className="modal_overlay" style={style}>
      <div className="modal">
        <p>전송하였습니다.</p>
        {/* <div className="modal_close_btn">닫기</div> */}
        <div className="btn_wrapper">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
