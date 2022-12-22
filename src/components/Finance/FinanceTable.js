/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

const FinanceTable = (props) => {
  const { title, data } = props;
  return (
    <>
      <section className="creator-area pt-50 d-flex justify-content-center flex-column">
        <h4 className="fw-bold mb-30">{title}</h4>
        <div className="col-xl-12 col-lg-12 table-finance">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FinanceTable;
