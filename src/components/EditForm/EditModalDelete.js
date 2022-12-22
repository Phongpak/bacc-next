import Modal from "react-responsive-modal";
import EditModalComfirmSuccess from "./EditModalComfirmSuccess";
import React, { useState } from "react";

const EditModalDelete = (props) => {
  const { open, onCloseModal } = props;
  const [openConfirm, setOpenConfirm] = useState(false);
  const onOpenModal = () => setOpenConfirm(true);

  const handleCloseModalSuccess = (modal) => {
    onCloseModal();
    onOpenModal()
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            //   width: "%",
            padding: "30px",
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
          <h3 className="text-dark text-center">Delete Item!</h3>
          <p className="text-center">
            Are you sure you want to delete this item?
          </p>

          <div className="contact-btn d-flex justify-content-center">
            <button className="fill-btn edit-sell-btn  m-4">Cancel</button>
            <button
              className="fill-btn delete-form-finance m-4"
              onClick={handleCloseModalSuccess}
            >
              Delete item
            </button>
          </div>
        </div>
      </Modal>
      <EditModalComfirmSuccess
        open={openConfirm}
        onCloseModal={() => setOpenConfirm(false)}
      />
    </>
  );
};

export default EditModalDelete;
