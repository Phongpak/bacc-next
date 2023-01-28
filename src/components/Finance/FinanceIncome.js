import Image from "next/image";
import React, { useState } from "react";
import FinanceCard from "./FinanceCard";


const FinanceIncome = () => {
  return (
    <div className="row wow fadeInUp d-flex justify-content-center">
      <div className="col-xl-6 col-lg-12">
        <FinanceCard
          description="50,000 BUSD"
          title="Total income"
          caption="Show account balance in "
        />
      </div>
      <div className="col-xl-4 col-lg-12">
        <FinanceCard
          description="20,000 BUSD"
          title="Monthly income"
          caption="Show account balance in "
          isCalender={true}

        />
      </div>
    </div>
  );
};

export default FinanceIncome;
