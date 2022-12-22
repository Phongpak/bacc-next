import React from "react";
import Link from "next/link";
import DragDropSection from "../Upload/DragDropSection";

const ContactFormSection = () => {
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
                  <p className="mb-15">
                    File types supported: gif, jpg, png, svg, wav, ogg, glb,
                    glt, webm, Max size: 100 MB
                  </p>
                  <DragDropSection />
                </div>
              </div>

              <div className="col-md-12">
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
                  <p className="mb-15">description</p>
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
                  <p className="mb-15">description</p>
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
                      <option value="1">NFT 1</option>
                      <option value="2">NFT 2</option>
                      <option value="4">NFT 3</option>
                      <option value="5">NFT 4</option>
                      <option value="6">NFT 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-btn d-flex justify-content-center">
              <Link href="/explore-arts">
                <a>
                  <button className="fill-btn cancel-form-finance m-4">
                    Cancel
                  </button>
                </a>
              </Link>

              <button className="fill-btn  m-4">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
