/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

const FinanceTable = (props) => {
  const { title, data } = props;

  // mock data
  const MOCK_DATA = [
    {
      collection: "/assets/img/finance/1.png",
      item: "/assets/img/finance/3.png",
      purchaser: "fifo999",
      amount: 0.1,
      date: "22/11/2565",
    },
    {
      collection: "/assets/img/finance/2.png",
      item: "/assets/img/finance/4.png",
      purchaser: "catnip2466",
      amount: 0.2,
      date: "22/11/2565",
    },
    {
      collection: "/assets/img/finance/1.png",
      item: "/assets/img/finance/3.png",
      purchaser: "catnip2462",
      amount: 0.3,
      date: "22/11/2565",
    },
  ];

  return (
    <>
      <section className="creator-area pt-50 d-flex justify-content-center flex-column">
        <h4 className="fw-bold mb-30">{title}</h4>
        <div className="col-xl-12 col-lg-12 table-finance">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Collection</th>
                <th scope="col">Item</th>
                <th scope="col">Purchaser</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((item) => {
                return (
                  <>
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>
                        <img
                          src={item.collection}
                          alt="icon"
                          height={20}
                          width={20}
                          className="calender-icon"
                        />
                      </td>
                      <td>
                        {" "}
                        <img
                          src={item.item}
                          alt="icon"
                          height={20}
                          width={20}
                          className="calender-icon"
                        />
                      </td>
                      <td>{item.purchaser}</td>
                      <td>{item.amount}</td>
                      <td>@{item.date}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FinanceTable;
