import React from "react";
import Image from "next/image";

const ExploreArtsBar = () => {
  return (
    <div className="row wow fadeInUp">
      <div className="col-lg-9">
        <form action="#" className="art-filter-row">
          <div className=" mb-30">
            <div className="filter-search-input explore-search">
              <input
                type="text"
                placeholder="Search"
                className="explore-search-form"
              />
              <button className="fill-btn">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-1 d-flex align-items-start">
        <div className="icon-relaod common-select-arrow-50 mt-15">
          <Image
            src="/assets/img/svg-icon/056-reload.svg"
            alt="reload"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="col-lg-2 d-flex align-items-start">
        {" "}
        <div className="icon-relaod common-select-arrow-50 mt-15 d-flex justify-content-end align-items-center">
          <Image
            src="/assets/img/svg-icon/057-cate.svg"
            alt="reload"
            width={25}
            height={25}
          />
          <div className=" ml-30 text-items">12 Items</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreArtsBar;
