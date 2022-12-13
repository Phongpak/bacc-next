/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import DragDropSection from "../Upload/DragDropSection";

const SettingAccountFormSection = () => {
  return (
    <>
      <div className="mt-70 pb-40 divider-setting">
        <h4 className="sidebar-widget-title text-dark">Account settings</h4>
        <div className="d-flex  justify-content-between align-items-center">
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

          <button className="fill-btn">Connect wallet</button>
        </div>
      </div>

      <div className="contact-wrapper pos-rel mb-40 mt-40 wow fadeInUp">
        <div className=" contact-inner">
          <h5 className="text-dark mb-30">Contact information</h5>
          <div className="contact-content">
            <form className="contact-form" action="#">
              <div className="row">
                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Full Address
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
                      placeholder="Enter address (E.g. 33/25 Popsuk2 Soi Ramintra 46/1) "
                    />
                  </div>
                </div>

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Street
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input-text"
                      id="name"
                      placeholder="Enter street"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Area{" "}
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
                      Provice
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
                      placeholder="Enter provice"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-xl-4">
                    <div className="single-input-unit">
                      <label htmlFor="name" className="topic">
                        Zip Code
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
                        placeholder="Enter provice"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-xl-4">
                    <div className="single-input-unit">
                      <label htmlFor="name" className="topic">
                        Phone Number
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
                        placeholder="Enter provice"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-xl-8">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Country
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
                      placeholder="Enter country"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-xl-12">
                  <h5 className="text-dark">Delete Account</h5>
                  <p>
                    When you delete your account, your information, your
                    profile, photos, videos, likes and followers will be
                    permanently removed.{" "}
                    <span style={{ color: "rgba(255, 61, 0, 0.65)", textDecoration: "underline" }}>Delete Account</span>
                  </p>
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

export default SettingAccountFormSection;
