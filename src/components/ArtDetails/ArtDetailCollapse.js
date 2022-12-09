/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// props
// title, content, icon, style, children, type = collapse

const ArtDetailsCollapse = ({ title, icon, style, children, type }) => {
  return (
    <section className="about-info-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 order-2 order-lg-1 p-0">
            <div className="faq-tab-contents mb-0 wow fadeInUp">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="tab-nav1"
                  role="tabpanel"
                  aria-labelledby="nav-tab1"
                >
                  <div className="about-info-wrapper mb-30">
                    <div
                      className="accordion accordion-general"
                      id="Accordions1"
                    >
                      <div className={`accordion-item sale`}>
                        <h2 className="accordion-header" id="headingOneA">
                          <button
                            className={`accordion-button sale ${style}`}
                            type="button"
                            data-bs-toggle={type}
                            data-bs-target="#collapseOneA"
                            aria-expanded="true"
                            aria-controls="collapseOneA"
                          >
                            <Image
                              src={icon}
                              alt="logo"
                              width={20}
                              height={20}
                              className="pr-10"
                            />
                            <span className="ml-10">{title}</span>
                          </button>
                        </h2>
                        <div
                          id="collapseOneA"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOneA"
                          data-bs-parent="#Accordions1"
                        >
                          <div className="accordion-body">{children}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDetailsCollapse;
