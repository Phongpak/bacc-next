/* eslint-disable @next/next/no-img-element */
import React from "react";

//component
import SellProductSection from "./SellSection";

const TopCreatorTwo = () => {

  const CreatorList = [
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
    {
      profileImage: "assets/img/profile/profile1.jpg",
      topic: "Setup your Wallet",
      desc: "Etiam auctor urna ac nisi feugiat, in tempor massa tempudslfjnfjdvnkmfdndsfldmnvfndsljgnsjdnvs arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...",
    },
  ];

  return (
    <section className="bg-area-grey top-seller-area pt-40">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="row wow fadeInUp">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title1 mb-40">
                  <h2 className="section-main-title1 header-section2">
                    Create and Sell your Nfts
                  </h2>
                  <p className="desc-section2">
                    ellentesque mollis magna nec tortor mattis rIn quis purus.
                  </p>
                </div>
              </div>
            </div>

            {/* sell your nft */}
            <SellProductSection data={CreatorList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCreatorTwo;
