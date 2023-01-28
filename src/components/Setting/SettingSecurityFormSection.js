import React from "react";
import RankingTableTitle from "./RankingTableTitle";


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

      <div className="contact-wrapper pos-rel mb-40 mt-40 wow fadeInUp">
        <div className=" contact-inner">
          <div className="contact-content">
            <form className="contact-form" action="#">
              <div className="row ">
                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <h5 className="text-dark">Change password</h5>
                    <p>
                      If you do change your password, make sure the new password
                      is strong and secure.
                    </p>

                    <label htmlFor="name">
                      Current
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

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name">
                      New Password*{" "}
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
                      className="input-text"
                      id="name"
                      placeholder="Item name"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="single-input-unit">
                    <label htmlFor="name" className="topic">
                      Confirm Password*{" "}
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

                <div className="col-md-12 col-xl-8 mb-20">
                  <div className="d-flex justify-content-between align-items-center">
                    <a className="btn-forgot-password">Forget password?</a>
                    <button className="fill-btn  m-4">Save change</button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-xl-12 pt-30">
                  <h5 className="text-dark">2-Factor Authentication</h5>
                  <p>
                    Setting up 2-Factor Authentication (2FA) provides an
                    additional layer of security to your account. With 2FA
                    enabled, you will have to provide the code genarated by your
                    authenticator app to perform certain actions on the platform
                  </p>
                  <button className="fill-btn">Set up 2FA</button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-xl-12 pt-30">
                  <h5 className="text-dark">Security Settings History</h5>
                  <div className="pt-20">
                    <RankingTableTitle />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingBankFormSection;
