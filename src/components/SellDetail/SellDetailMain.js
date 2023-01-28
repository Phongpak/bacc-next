/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import SellDetailCollapse from "./SellDetailCollapse";
import RankingTableTitle from "../ArtRanking/RankingTableTitle";
import { useRouter } from "next/router";

const SellDetailMain = () => {
  const productItem = useSelector((state) => state.products.specificItem);
  const router = useRouter();

  return (
    <main>
      <section className="creator-area pt-130 pb-100">
        <div className="container">
          <div className="art-details-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="art-item-img pos-rel art-details-img wow fadeInUp">
                  <span>
                    <img src={productItem.img} alt="art-img" />
                  </span>
                </div>

                <div className="mt-40">
                  <SellDetailCollapse
                    title={"Description"}
                    type={"collapse"}
                    icon="/assets/img/logo/description.svg"
                  >
                    <div className="d-flex flex-column">
                      The picture is represent zebra
                    </div>
                  </SellDetailCollapse>
                </div>

                <div className="mt-10">
                  <SellDetailCollapse
                    title={"Collection"}
                    type={"collapse"}
                    icon="/assets/img/logo/collection.svg"
                  >
                    <div className="d-flex flex-column">Natural</div>
                  </SellDetailCollapse>
                </div>

                <div className="mt-10">
                  <SellDetailCollapse
                    title={" Details"}
                    type={"collapse"}
                    icon="/assets/img/logo/collection.svg"
                  >
                    <div className="d-flex flex-column">
                      The picture is represent zebra
                    </div>
                  </SellDetailCollapse>
                </div>
              </div>

              {/* detail */}
              <div className="col-xl-8 col-lg-7">
                <div className="art-details-content wow fadeInUp pl-40">
                  <div className="art-name-details">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="created-by">Collection : Nature</div>
                        <h4 className="art-name">Pu</h4>
                      </div>
                      <div>
                        <button
                          className="fill-btn m-1 edit-sell-btn"
                          onClick={() => router.push("/edit-nft")}
                        >
                          Edit
                        </button>
                        <button
                          className="fill-btn m-1"
                          onClick={() => router.push("/sell-item")}
                        >
                          Sell
                        </button>
                      </div>
                    </div>

                    <div className="d-flex">
                      <span className="mr-30">Owned by : Narapon</span>
                      <div>
                        <i className="fas fa-eye mr-10"></i>
                        10 Views{" "}
                      </div>
                    </div>
                  </div>

                  <div className="artist-meta-info art-details-meta-info">
                    <SellDetailCollapse
                      //   title={"Sale ends December 6, 2022 at 5:35am"}
                      type={""}
                      icon="/assets/img/logo/sale.svg"
                      style="no-icon"
                    >
                      <div className="d-flex flex-column">
                        <span className="current-price">Current Price</span>
                        <span className="price-value">-</span>
                      </div>
                    </SellDetailCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <SellDetailCollapse
                      title={"Price History"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        No data history yet{" "}
                      </div>
                    </SellDetailCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <SellDetailCollapse
                      title={"Offer"}
                      type={"collapse"}
                      icon="/assets/img/logo/Offer.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        No data history yet{" "}
                      </div>
                    </SellDetailCollapse>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-7">
                <div className="art-details-content wow fadeInUp">
                  <div className="col-xl-12 art-details-meta-info">
                    <SellDetailCollapse
                      title={" Trade History"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        <RankingTableTitle />
                      </div>
                    </SellDetailCollapse>
                  </div>

                  <div className="col-xl-12 art-details-meta-info">
                    <SellDetailCollapse
                      title={"More from this collection"}
                      type={"collapse"}
                      icon="/assets/img/logo/price.svg"
                      style=""
                    >
                      <div className="d-flex flex-column">
                        No data history yet{" "}
                      </div>
                    </SellDetailCollapse>
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

export default SellDetailMain;
