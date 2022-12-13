/* eslint-disable @next/next/no-img-element */
import React from "react";

const SettingProfileFormSection = () => {
  return (
    <>
      <div className="mt-70 pb-40">
        <h4 className="sidebar-widget-title text-dark">Profile Settings</h4>
        <div className="d-flex  justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center">
            <div className="img-box">
              <h5 className="text-dark">
                Prifile picture <img src="/assets/img/svg-icon/note.svg" />
              </h5>
              <img src="/assets/img/profile/profile1.jpg" alt="img-prfile" />
            </div>
            <div className="img-box">
              <h5 className="text-dark">
                Banner picture <img src="/assets/img/svg-icon/note.svg" />
              </h5>
              <img src="/assets/img/profile/profile1.jpg" alt="img-prfile" />
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="contact-wrapper pos-rel mb-40 mt-40 wow fadeInUp">
        <div className="contact-inner">
          <div className="contact-content">
            <form className="contact-form" action="#">
              <div className="row">
                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Username
                      <span
                        className="tetx-danger"
                        style={{ color: "#FF0000" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-text"
                      placeholder="Enter username"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Bio
                    </label>
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        className="input-text"
                        placeholder="Write a messages..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Email address
                      <span
                        className="tetx-danger"
                        style={{ color: "#FF0000" }}
                      >
                        *
                      </span>
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

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Social media
                    </label>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social"></div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Discord"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social"></div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Discord"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social"></div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter provice"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social"></div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter provice"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-btn d-flex justify-content-center">
                <button className="fill-btn cancel-form-finance  m-4">
                  Cancel
                </button>
                <button className="fill-btn m-4">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingProfileFormSection;
