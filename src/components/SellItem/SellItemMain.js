/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SellItemModalComplete from "./SellItemModalComplete";

const SellItemMain = () => {
  const productItem = useSelector((state) => state.products.specificItem);
  const [type, setType] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <main>
      <section className="creator-area pt-130 pb-100">
        <div className="container">
          <div className="art-details-wrapper">
            <div className="row">
              <div className="col-xl-12 col-lg-5">
                <h3 className="text-dark">List item for sale</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-5 pt-30">
                <div className="box-first-sell d-flex align-items-center">
                  <div>
                    <img src={"/assets/img/svg-icon/back.svg"} alt="art-img" />
                    <img
                      src={productItem.img}
                      alt="art-img"
                      className="img-box-sell"
                    />
                  </div>

                  <div className="d-flex flex-column box-text-sell">
                    <span className="text-name-sell">PU</span>
                    <span className="text-des-sell">Collection : Narapon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-7 col-lg-5 pt-30">
                <div className="art-item-img pos-rel wow fadeInUp">
                  <h4 className="text-dark">Type</h4>
                  <div className="mt-30 box-sell-type">
                    <button
                      className={`btn-fixed-price ${
                        type.includes("Fixed") ? "active-btn" : ""
                      }`}
                      onClick={() => setType("Fixed")}
                    >
                      Fixed Price
                    </button>
                    <button
                      className={`btn-action-price ${
                        type.includes("Auction") ? "active-btn" : ""
                      }`}
                      onClick={() => setType("Auction")}
                    >
                      Set up an auction
                    </button>
                  </div>
                </div>

                <div className="art-item-img pos-rel wow fadeInUp pt-50">
                  <h4 className="text-dark">Price</h4>
                  <div className="mt-30">
                    <div className=" mb-30">
                      <div className="filter-search-input explore-search">
                        <input type="text" placeholder="Search" />
                        <button className="fill-btn">BUSD</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="art-item-img pos-rel wow fadeInUp">
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <span className="feeds">Fees</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="subtitle-text">Service Fee </span>
                      <span className="subtitle-text">2.5%</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="subtitle-text">Creator Fee </span>
                      <span className="subtitle-text">2.5%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* detail */}
              <div className="col-xl-4 col-lg-7 pt-30">
                <div className="art-details-content wow fadeInUp pl-40">
                  <span>
                    <img src={"/assets/img/nft/11.png"} alt="art-img" />
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-5 pt-30">
                <div className="">
                  <button className="btn-complete-sell" onClick={() => setOpenConfirm(true)}>
                    Complete listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SellItemModalComplete
          open={openConfirm}
          onCloseModal={() => setOpenConfirm(false)}
        />
      </section>
    </main>
  );
};

export default SellItemMain;
