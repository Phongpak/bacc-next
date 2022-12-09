import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ExploreArtsSingle from "../ExploreArts/ExploreArtsSingle";

const ArtWorksSection = () => {
  //state
  const nfts = useSelector((state) => state.nfts.nfts);
  const FILTER_TYPE = ["All", "Gaming", "Art", "Nature", "Collectibles"];

  return (
    <section className="artworks-area bg-area-cream pt-40 pb-100 z-index-1">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-4">
            <div className="section-title1">
              <h2 className="section-main-title1 mb-40">Trending</h2>
            </div>
          </div>
        </div>

        <div className="row wow fadeInUp">
          <div className="col-lg-8 mb-20">
            {FILTER_TYPE.map((item, index) => (
              <button
                key={index}
                className={`${index === 0 ? "active" : ""} btn-filter-home`}
              >
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* card nft */}
        <div className="row wow fadeInUp">
          {nfts.slice(0, 18).map((product) => (
            <ExploreArtsSingle key={product.id} product={product} />
          ))}
        </div>
        
        {/* see all */}
        <div className="see-all-btn">
          <Link href={"/explore-arts"}>
            <a>See all</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtWorksSection;
