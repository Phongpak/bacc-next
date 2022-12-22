/* eslint-disable @next/next/no-img-element */
import Modal from "react-responsive-modal";
import React, { useState } from "react";

const SellItemModalComplete = (props) => {
  const { open, onCloseModal } = props;
  const [openConfirm, setOpenConfirm] = useState(false);
  const onOpenModal = () => setOpenConfirm(true);

  const handleCloseModalSuccess = (modal) => {
    onCloseModal();
    onOpenModal();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "40%",
            padding: "60px",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          // closeButton: {
          //   background: "yellow",
          // },
        }}
        center
      >
        <div className="d-flex justify-content-center flex-column">
          <h3 className="text-center">Complete!</h3>
          <div className="d-flex justify-content-center mt-20 mb-20">
            <img
              src={"/assets/img/nft/11.png"}
              alt="art-img"
              className="modal-image"
            />
          </div>

          <div className="d-flex flex-column text-center justify-content-center mt-10 mb-20">
            <span>Item name : Pu</span>
            <span>Collection: Narapon</span>
            <span>Price : 0.5 BUSD</span>
          </div>

          <div className="d-flex flex-column text-center justify-content-center mt-10 mb-20">
            <span className="text-dark fw-bold">SHARE TO...</span>
            <span>Fackbook, line, Twitter, Telegram</span>
          </div>

          <h4 className="text-center">Your item has been listed</h4>
          <button className="fill-btn d-flex mt-40 text-center justify-content-center">
            View item
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SellItemModalComplete;
