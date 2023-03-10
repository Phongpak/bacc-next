import Image from "next/image";
import React, { useState } from "react";
import FinanceCard from "./FinanceCard";

const FinanceExpenese = () => {
  return (
    <div className="row wow fadeInUp d-flex justify-content-center">
      <div className="col-xl-6 col-lg-12">
        <FinanceCard
          description="50,000 BUSD"
          title="Total Expenses"
          caption="Show account balance in "
        />
      </div>
      <div className="col-xl-4 col-lg-12">
        <FinanceCard
          description="20,000 BUSD"
          title="Monthly expenses"
          caption="Show account balance in "
        />
      </div>
    </div>
  );
};

export default FinanceExpenese;
