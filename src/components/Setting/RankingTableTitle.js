import React from "react";

const RankingTableTitle = () => {
  return (
    <div className="rank-list-row-heading">
      <div className="rank-list-row setting-rank-list-row">
        <div className="rank-list-cell rank-list-cell-sl">SL</div>
        <div className="rank-list-cell rank-list-cell-artwotrks">Artwotrks</div>
        <div className="rank-list-cell rank-list-cell-market">Market</div>
      </div>
      <div className="rank-list-row">
        <span className="ml-30">You have not made any changes</span>
      </div>
    </div>
  );
};

export default RankingTableTitle;
