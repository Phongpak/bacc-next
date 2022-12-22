import React, { useState } from "react";
// import DragDropSection from "../Upload/DragDropSection";
import Image from "next/image";
import EditModalDelete from "./EditModalDelete";

const EditFormSection = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="contact-wrapper pos-rel mt-60 mb-40 wow fadeInUp">
      <div className=" contact-inner">
        <div className="contact-content">
          <h4 className="text-dark">Create New Item</h4>

          <form className="contact-form" action="#">
            <div className="row ">
              <div className="col-md-6">
                <div className="single-input-unit">
                  <label htmlFor="name">
                    Image, Video, Audio, or 3D Model*
                  </label>
                  <p className="mb-35">
                    File types supported: gif, jpg, png, svg, wav, ogg, glb,
                    glt, webm, Max size: 100 MB
                  </p>
                  {/* <DragDropSection /> */}
                  <Image
                    src={"/assets/img/nft/01.png"}
                    alt="logo"
                    width={340}
                    height={330}
                    className="pr-10"
                  />
                </div>
              </div>

              <div className="col-md-12 pt-20">
                <div className="single-input-unit">
                  <label htmlFor="name" className="topic">
                    Item Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-text"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="single-input-unit">
                  <label htmlFor="name" className="topic">
                    External link
                  </label>
                  <p className="mb-15">
                    Thde description ,psfkepokfpskfcpclesp,cferogkpem
                  </p>
                  <input
                    type="text"
                    name="name"
                    className="input-text"
                    id="name"
                    placeholder="Item name"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="single-input-unit">
                  <label htmlFor="message" className="topic">
                    Description
                  </label>
                  <p className="mb-15">
                    Thde description ,psfkepokfpskfcpclesp,cferogkpem
                  </p>
                  <textarea
                    name="message"
                    id="message"
                    className="input-text"
                    placeholder="Write a messages..."
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="single-input-unit">
                  <label htmlFor="s-select" className="topic">
                    Collection
                  </label>
                  <div className="common-select-arrow common-select-arrow-60 mb-30 w-full">
                    <select
                      name="s-select"
                      id="s-select"
                      className="gender-category-select input-text"
                    >
                      <option value="1">Select collection</option>
                      <option value="2">Subject One</option>
                      <option value="4">Subject Two</option>
                      <option value="5">Subject Three</option>
                      <option value="6">Subject Four</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-btn d-flex justify-content-center">
              <button
                className="fill-btn delete-form-finance m-4"
                onClick={onOpenModal}
              >
                Delete item
              </button>
              <button className="fill-btn cancel-form-finance  m-4">
                Cancel
              </button>
              <button className="fill-btn  m-4">Save</button>
            </div>
          </form>
        </div>
      </div>
      <EditModalDelete open={open}  onCloseModal={onCloseModal} />
    </div>
  );
};

export default EditFormSection;
