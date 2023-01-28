import React from "react";

const RankingTableTitle = () => {
  return (
    <div className="rank-list-row-heading">
      <table class="table">
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
            <td className="table-border">Mark</td>
            <td className="table-border">Otto</td>
            <td className="table-border">@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td className="table-border">Jacob</td>
            <td className="table-border">Thornton</td>
            <td className="table-border">@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td className="table-border">Jacob</td>
            <td className="table-border">Thornton</td>
            <td className="table-border">@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RankingTableTitle;
