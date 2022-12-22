import React, { useState } from "react";
import FinanceExpenese from "./FinanceExpenese";
import FinanceIncome from "./FinanceIncome";
import FinanceTable from "./FinanceTable";

const FinanceMain = () => {
  const [type, setType] = useState("Income");
  return (
    <main>
      <section className="creator-area pt-130 pb-100">
        <div className="container">
          <div className="row wow fadeInUp">
            <h3 className="fw-bold text-dark">Finance</h3>
            <div className="d-flex justify-content-between pt-10">
              <div className="btn-switch-finance">
                <button
                  className={`fill-btn btn-income ${
                    type.includes("Income") && "active-btn-type"
                  }`}
                  onClick={() => setType("Income")}
                >
                  Income
                </button>
                <button
                  onClick={() => setType("Expenses")}
                  className={`fill-btn btn-Expenses ${
                    type.includes("Expenses") && "active-btn-type"
                  }`}
                >
                  Expenses
                </button>
              </div>
              <button className="fill-btn">Withdraw</button>
            </div>
          </div>
          {type.includes("Income") ? <FinanceIncome /> : <FinanceExpenese />}
          <div className="row wow fadeInUp pt-30">
            <FinanceTable
              title={`${
                type.includes("Expenses") ? "Total Expenses" : "Total Income"
              }`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinanceMain;
