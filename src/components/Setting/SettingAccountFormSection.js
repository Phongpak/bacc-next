/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const SettingAccountFormSection = () => {
  const router = useRouter();

  const handleConnectWallet = () => {
    router.push("/wallet-connect");
  };

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

          <button className="fill-btn" onClick={handleConnectWallet}>
            Connect wallet
          </button>
        </div>
      </div>

      <div className="contact-wrapper pos-rel mb-40 mt-40 wow fadeInUp">
        <div className=" contact-inner">
          <h5 className="text-dark mb-30">Contact information</h5>
          <div className="contact-content">
            <form className="contact-form" action="#">
              <div className="row">
                <div className="col-md-12 col-xl-12 mb-10">
                  <div className="single-input-unit  d-flex align-items-center">
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

                <div className="col-md-12 col-xl-12 mb-10">
                  <div className="single-input-unit d-flex align-items-center">
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

                <div className="col-md-12 col-xl-12 mb-10">
                  <div className="single-input-unit d-flex align-items-center">
                    <label htmlFor="name" className="topic">
                      Area{" "}
                      <span
                        className="tetx-danger"
                        style={{ color: "#FF0000" }}
                      >
                        *
                      </span>
                    </label>
                    <div className="common-select-arrow common-select-arrow-60 mb-20 w-full">
                      <select
                        name="s-select"
                        id="s-select"
                        className="gender-category-select input-text"
                        placeholder="Enter Area"
                      >
                        <option value="2">NFT 1</option>
                        <option value="3">NFT 2</option>
                        <option value="4">NFT 3</option>
                        <option value="5">NFT 4</option>
                        <option value="6">NFT 5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-xl-12 mb-10">
                  <div className="single-input-unit d-flex align-items-center">
                    <label htmlFor="name" className="topic">
                      Provice
                      <span
                        className="tetx-danger"
                        style={{ color: "#FF0000" }}
                      >
                        *
                      </span>
                    </label>
                    <div className="common-select-arrow common-select-arrow-60 mb-20 w-full">
                      <select
                        name="s-select"
                        id="s-select"
                        className="gender-category-select input-text"
                        placeholder="Enter province"
                      >
                        <option value={""}>Enter province</option>
                        <option value="2">Bangkok</option>
                        <option value="3">NFT 2</option>
                        <option value="4">NFT 3</option>
                        <option value="5">NFT 4</option>
                        <option value="6">NFT 5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-xl-6 mb-10">
                    <div className="single-input-unit d-flex align-items-center">
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
                        style={{ marginLeft: "20px" }}
                        className="input-text"
                        placeholder="Enter provice"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-6 mb-10">
                    <div className="single-input-unit d-flex align-items-center">
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
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-xl-12 mb-10">
                  <div className="single-input-unit d-flex align-items-center">
                    <label htmlFor="name" className="topic">
                      Country
                      <span
                        className="tetx-danger"
                        style={{ color: "#FF0000" }}
                      >
                        *
                      </span>
                    </label>
                    <div className="common-select-arrow common-select-arrow-60 mb-20 w-full">
                      <select
                        name="s-select"
                        id="s-select"
                        className="gender-category-select input-text"
                        placeholder="Enter country"
                      >
                        <option value={""}>Enter country</option>
                        <option value="2">Bangkok</option>
                        <option value="3">NFT 2</option>
                        <option value="4">NFT 3</option>
                        <option value="5">NFT 4</option>
                        <option value="6">NFT 5</option>
                      </select>
                    </div>
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
                    <span
                      style={{
                        color: "rgba(255, 61, 0, 0.65)",
                        textDecoration: "underline",
                      }}
                    >
                      Delete Account
                    </span>
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
