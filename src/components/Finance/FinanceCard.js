/* eslint-disable @next/next/no-img-element */
import React from "react";

const FinanceCard = (props) => {
  const { description, title, caption, isCalender } = props;
  return (
    <section className="creator-area pt-50">
      <div className="container d-flex justify-content-center">
        <div className="finance-card-container">
          <img
            src={"/assets/img/bg/bg-finance.png"}
            alt="img"
            className="imge-finance"
          />
          <div className="text-box-finance">
            {isCalender && (
              <div className="d-flex justify-content-end mr-50">
                <img
                  src="/assets/img/profile/calender.svg"
                  alt="icon"
                  height={20}
                  width={20}
                  className="calender-icon"
                />
              </div>
            )}

            <div>
              <h4>{title}</h4>
              <h3 className="text-dark">{description}</h3>
            </div>

            <div className="footer-finance-card mt-40">
              <div className="d-flex align-items-center">
                <h6 className="">{caption}</h6>
                <div className="finance-btn common-select-arrow common-select-arrow-60">
                  <select className="finance-select w-full art-category-select2 d-flex align-items-center">
                    <option value="1">BUSD</option>
                    <option value="2">BUSD</option>
                    <option value="3">BUSD</option>
                  </select>
                </div>
              </div>
              <div className="reload-icon-finance">
                <img
                  src="/assets/img/svg-icon/reload.svg"
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceCard;
