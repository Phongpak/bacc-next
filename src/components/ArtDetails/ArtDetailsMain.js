/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import ArtDetailsCollapse from "./ArtDetailCollapse";
import RankingTableTitle from "../ArtRanking/RankingTableTitle";

const ArtDetailsMain = () => {
  const productItem = useSelector((state) => state.products.specificItem);

  return (
    <main>
      <section className="art-details-area pt-40 pb-0">
        <div className="container">
          <div className="art-details-wrapper">
            <div className="row">
              {/* images */}
              <div className="col-xl-4 col-lg-5">
                <div className="art-item-img pos-rel art-details-img wow fadeInUp">
                  <span>
                    <img src={productItem.img} alt="art-img" />
                  </span>
                </div>

                <div className="mt-40">
                  <ArtDetailsCollapse
                    title={"Description"}
                    type={"collapse"}
                    icon="/assets/img/logo/description.svg"
                  >
                    <div className="d-flex flex-column">
                      The picture is represent zebra
                    </div>
                  </ArtDetailsCollapse>
                </div>

                <div className="mt-10">
                  <ArtDetailsCollapse
                    title={"Collection"}
                    type={"collapse"}
                    icon="/assets/img/logo/collection.svg"
                  >
                    <div className="d-flex flex-column">Natural</div>
                  </ArtDetailsCollapse>
                </div>

                <div className="mt-10">
                  <ArtDetailsCollapse
                    title={" Details"}
                    type={"collapse"}
                    icon="/assets/img/logo/collection.svg"
                  >
                    <div className="d-flex flex-column">
                      The picture is represent zebra
                    </div>
                  </ArtDetailsCollapse>
                </div>
              </div>

              {/* detail */}
              <div className="col-xl-8 col-lg-7">
                <div className="art-details-content wow fadeInUp pl-40">
                  <div className="art-name-details">
                    <div className="created-by">Collection : Nature</div>
                    <h4 className="art-name">{productItem.title}</h4>
                    <div className="d-flex">
                      <span className="mr-30">Owned by : Narapon</span>
                      <div>
                        <i className="fas fa-eye mr-10"></i>
                        10 Views{" "}
                      </div>
                    </div>
                  </div>

                  <div className="artist-meta-info art-details-meta-info">
                    <ArtDetailsCollapse
                      title={"Sale ends December 6, 2022 at 5:35am"}
                      type={""}
                      icon="/assets/img/logo/sale.svg"
                      style="no-icon"
                    >
                      <div className="d-flex flex-column">
                        <span className="current-price">Current Price</span>
                        <span className="price-value">0.003 ETH</span>
                        <button className="fill-btn mt-2 btn-buy-art-detail">
                          Buy Now
                        </button>
                      </div>
                    </ArtDetailsCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <ArtDetailsCollapse
                      title={"Price History"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        <RankingTableTitle />
                      </div>
                    </ArtDetailsCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <ArtDetailsCollapse
                      title={"Offer"}
                      type={"collapse"}
                      icon="/assets/img/logo/Offer.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        <RankingTableTitle />
                      </div>
                    </ArtDetailsCollapse>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-7">
                <div className="art-details-content wow fadeInUp">
                  <div className="col-xl-12 art-details-meta-info">
                    <ArtDetailsCollapse
                      title={" Trade History"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        <RankingTableTitle />
                      </div>
                    </ArtDetailsCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <ArtDetailsCollapse
                      title={"More from this collection"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        <RankingTableTitle />
                      </div>
                    </ArtDetailsCollapse>
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

export default ArtDetailsMain;
