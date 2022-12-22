/* eslint-disable @next/next/no-img-element */
import React from "react";
// render component
import SettingBankFormSection from "./SettingBankFormSection";
import SettingAccountFormSection from "./SettingAccountFormSection";
import SettingProfileFormSection from "./SettingProfileFormSection";
import SettingSecurityFormSection from "./SettingSecurityFormSection";

const SettingMain = () => {
  return (
    <main>
      <section className="about-info-area pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-2 order-lg-1">
              <div className="page-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="sidebar-tab-nav mb-30 wow fadeInUp mt-0">
                      <h2 className="sidebar-widget-title text-dark">
                        Settings
                      </h2>
                      <nav>
                        <div
                          className="nav nav-tabs mt-50"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="nav-tab1"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-nav1"
                            type="button"
                            role="tab"
                            aria-selected="true"
                          >
                            <span className="setting-nav">
                              <i className="flaticon-home"></i>Profile
                            </span>
                          </button>
                          <button
                            className="nav-link"
                            id="nav-tab2"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-nav2"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="setting-nav">
                              <i className="flaticon-account"></i>Account
                            </span>
                          </button>
                          <button
                            className="nav-link"
                            id="nav-tab3"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-nav3"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="setting-nav">
                              <i className="flaticon-image"></i>Security
                            </span>
                          </button>
                          <button
                            className="nav-link"
                            id="nav-tab4"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-nav4"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="setting-nav">
                              <i className="flaticon-wallet-2"></i>Bank Account
                            </span>
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 order-1 order-lg-2 setting-row-content">
              <div className="forum-tab-contents mb-0 wow fadeInUp">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="tab-nav1"
                    role="tabpanel"
                    aria-labelledby="nav-tab1"
                  >
                    <div className="forum-post-wrapper mb-30 mt-40">
                      <SettingProfileFormSection />
                    </div>
                  </div>

                  {/* Account */}
                  <div
                    className="tab-pane fade"
                    id="tab-nav2"
                    role="tabpanel"
                    aria-labelledby="nav-tab2"
                  >
                    <div className="forum-post-wrapper mb-30 mt-40">
                      <SettingAccountFormSection />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab-nav3"
                    role="tabpanel"
                    aria-labelledby="nav-tab3"
                  >
                    <div className="forum-post-wrapper mb-30 mt-40">
                      <SettingSecurityFormSection />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab-nav4"
                    role="tabpanel"
                    aria-labelledby="nav-tab4"
                  >
                    <div className="forum-post-wrapper mb-30 mt-40">
                      <SettingBankFormSection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SettingMain;
