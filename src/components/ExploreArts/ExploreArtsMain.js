import React from "react";
import { useSelector } from "react-redux";

// component
import Pagination from "../Common/Pagination";
import ExploreArtsBar from "./ExploreArtsBar";
import ExploreArtsSingle from "./ExploreArtsSingle";
import ExploreFilterLeft from "./ExploreFilterLeft";

const ExploreArtsMain = () => {
  const products = useSelector((state) => state.products.products);
  
  return (
    <main>
      <section className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-4">
            <div className="section-title1">
              <h2 className="section-main-title1 mb-40 mt-40">
                Recent Products
              </h2>
            </div>
          </div>

          <div className="artworks-area">

            <div className="col-lg-3 filter-border">
              <ExploreFilterLeft />
            </div>

            <div className="col-lg-10">
              <ExploreArtsBar />
              <div className="row wow fadeInUp">
                {products.slice(0, 24).map((product) => (
                  <ExploreArtsSingle key={product.id} product={product} />
                ))}
              </div>
              <div className="row wow fadeInUp">
                <div className="col-12">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreArtsMain;
