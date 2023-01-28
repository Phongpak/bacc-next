/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

const SettingProfileFormSection = () => {
  const [previewProfile, setPreviewProfile] = useState("");
  const [previewBanner, setPreviewBanner] = useState("");

  // setelcted
  const [selectedProfile, setSelectedProfile] = useState();
  const [selectedBanner, setSelectedBanner] = useState();

  const handleChangeProfile = (file) => {
    if (!file.target.files || file.target.files.length === 0) {
      setSelectedProfile(undefined);
      return;
    }
    setSelectedProfile(file.target.files[0]);
    setPreviewProfile(URL.createObjectURL(file.target.files[0]));
  };

  const handleChangeBanner = (file) => {
    if (!file.target.files || file.target.files.length === 0) {
      setSelectedBanner(undefined);
      return;
    }
    setSelectedBanner(file.target.files[0]);
    setPreviewBanner(URL.createObjectURL(file.target.files[0]));
  };

  return (
    <>
      <div className="mt-70 pb-40">
        <h4 className="sidebar-widget-title text-dark">Profile Settings</h4>
        <div className="d-flex  justify-content-between align-items-center">
          <div className="d-flex flex-row">
            <div className="img-box">
              <h5 className="text-dark">
                Profile picture <img src="/assets/img/svg-icon/note.svg" />
              </h5>
              <div className="img-upload">
                {!previewProfile && (
                  <>
                    <img
                      src="/assets/img/profile/profile1.jpg"
                      alt="img-prfile"
                    />
                    <input
                      type="file"
                      className="form-control form-upload-img"
                      id="customFileProfile"
                      onChange={handleChangeProfile}
                      accept="image/*"
                    />
                  </>
                )}
                {selectedProfile && (
                  <img src={previewProfile} className="profile-img-upload" />
                )}
              </div>
            </div>
            <div className="img-box">
              <h5 className="text-dark">
                Banner picture <img src="/assets/img/svg-icon/note.svg" />
              </h5>
              <div className="img-upload">
                {!previewBanner && (
                  <>
                    <img
                      src="/assets/img/profile/profile1.jpg"
                      alt="img-prfile"
                    />
                    <input
                      type="file"
                      className="form-control form-upload-img"
                      id="customFileBanner"
                      onChange={handleChangeBanner}
                      accept="image/*"
                    />
                  </>
                )}

                {selectedBanner && (
                  <img src={previewBanner} className="profile-img-upload" />
                )}
              </div>
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
                        <div className="box-porfile-social">
                          <img
                            src="/assets/img/social/disocrd.svg"
                            alt="discord"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter Discord"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social">
                          <img
                            src="/assets/img/social/facebook.svg"
                            alt="discord"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter Facebook"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social">
                          <img
                            src="/assets/img/social/instagram.svg"
                            alt="discord"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter Instagram"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xl-2">
                        <div className="box-porfile-social">
                          <img
                            src="/assets/img/social/telegram.svg"
                            alt="discord"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-10">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-text"
                          placeholder="Enter Telegram"
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
