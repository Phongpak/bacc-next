import Modal from "react-responsive-modal";

const EditModalComfirmSuccess = (props) => {
  const { open, onCloseModal } = props;
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
              width: "30%",
            padding: "40px",
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
          <h3 className="text-dark text-center">Item deleted!</h3>
          {/* <p className="text-center">Are you sure you want to delete this item?</p>

        <div className="contact-btn d-flex justify-content-center">
          <button className="fill-btn edit-sell-btn  m-4">Cancel</button>
          <button className="fill-btn delete-form-finance m-4">
            Delete item
          </button>
        </div> */}
        </div>
      </Modal>
    </>
  );
};

export default EditModalComfirmSuccess;
