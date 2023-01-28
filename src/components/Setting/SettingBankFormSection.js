import React from "react";
import Link from "next/link";
import DragDropSection from "../Upload/DragDropSection";

const SettingBankFormSection = () => {
  return (
    <>
      <div className="mt-70 pb-40 divider-setting">
        <h4 className="sidebar-widget-title text-dark">
          Bank account settings
        </h4>
        <div className="d-flex flex-row align-items-center">
          <div>
            <img
              src="/assets/img/profile/profile1.jpg"
              alt="img-prfile"
              className="profile-mock"
            />
          </div>
          <div className="ml-20">
            <h6 className="text-dark">Narapon Jirattitigarnpong</h6>
            <h6>User ID #111</h6>
          </div>
        </div>
      </div>

      <div className="contact-wrapper pos-rel mb-40 wow fadeInUp mt-40">
        <div className=" contact-inner">
          <div className="contact-content">
            <form className="contact-form" action="#">
              <div className="row ">
                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Bank
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

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Account number
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input-text"
                      id="name"
                      placeholder="Item name"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Beneficial owner
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

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Bank branch
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

              </div>

              <div className="contact-btn d-flex justify-content-center">
                <button className="fill-btn cancel-form-finance  m-4">
                  Cancel
                </button>
                <button className="fill-btn  m-4">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingBankFormSection;
