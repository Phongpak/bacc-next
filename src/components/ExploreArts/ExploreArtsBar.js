import React from "react";
import Image from "next/image";

const ExploreArtsBar = () => {
  return (
    <div className="row wow fadeInUp">
      <div className="col-lg-12">
        <form action="#" className="art-filter-row">
          <div className=" mb-30">
            <div className="filter-search-input explore-search">
              <input type="text" placeholder="Search" />
              <button className="fill-btn">Search</button>
            </div>
          </div>
          {/* <div className="filter-by-sale d-flex justify-content-around align-items-center mb-30">
            <div className="icon-relaod common-select-arrow-50">
              <Image
                src="/assets/img/svg-icon/056-reload.svg"
                alt="reload"
                width={30}
                height={30}
              />
            </div>
            <div className="icon-relaod common-select-arrow-50">
              <Image
                src="/assets/img/svg-icon/057-cate.svg"
                alt="reload"
                width={30}
                height={30}
              />
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ExploreArtsBar;
