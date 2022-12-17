/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const HeroSectionTwo = () => {
  return (
    <div className="bg-area-cream pos-rel bg-footer">
      <div className="swiper-container banner2-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="single-banner single-banner-2 banner-670 d-flex align-items-center pos-rel">
              <div className="banner-bg">
                <img
                  src="assets/img/banner/banner-main.png"
                  alt="img not found"
                />
              </div>
              <div className="banner-bg-light">
                <img
                  src="assets/img/banner/oc-banner-bg2-light.png"
                  alt="img not found"
                />
              </div>

              <div className="container pos-rel">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xxl-8 col-lg-10">
                    <div className="banner-content banner-content2 banner-content2-1">
                      <h1
                        data-animation="fadeInUp"
                        data-delay=".3s"
                        className="mb-25 font-prata"
                      >
                        Welcome To
                        <br />
                        <span>Nowhere</span>
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-delay=".5s"
                        className="mb-40"
                      >
                        DIGITAL ASSET ART GALLERY
                      </p>

                      <div
                        className="banner-btn"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <Link href="/explore-arts">
                          <a className="fill-btn explore-btn">Explore</a>
                        </Link>

                        <Link href="/create-nft">
                          <a className="fill-btn create-btn">create</a>
                        </Link>
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
  );
};

export default HeroSectionTwo;
