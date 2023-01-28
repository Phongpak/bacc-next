/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const WorkProcessSection = () => {
  const router = useRouter();
  const WorkProcessItem = [
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/01.png",
      WorkProcessTitle: "Connect your wallet",
      WorkProcessDesc:
        "NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.",
      WorkProcessLink: "/wallet-connect",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/02.png",
      WorkProcessTitle: "Create Collection",
      WorkProcessDesc:
        "Oction is the premier marketplace for which are digital items you can truly own.Digital Items have existed like this.",
      WorkProcessLink: "/explore-arts",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/03.png",
      WorkProcessTitle: "List them to sale",
      WorkProcessDesc:
        "List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.",
      WorkProcessLink: "/upload",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/04.png",
      WorkProcessTitle: "List them to sale",
      WorkProcessDesc:
        "List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.",
      WorkProcessLink: "/upload",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/01.png",
      WorkProcessTitle: "Connect your wallet",
      WorkProcessDesc:
        "NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.",
      WorkProcessLink: "/wallet-connect",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/02.png",
      WorkProcessTitle: "Create Collection",
      WorkProcessDesc:
        "Oction is the premier marketplace for which are digital items you can truly own.Digital Items have existed like this.",
      WorkProcessLink: "/explore-arts",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/03.png",
      WorkProcessTitle: "List them to sale",
      WorkProcessDesc:
        "List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.",
      WorkProcessLink: "/upload",
      WorkProcessCategory: "Gaming",
    },
    {
      WorkProcessStep: "Step",
      WorkProcessImage: "/assets/img/category/04.png",
      WorkProcessTitle: "List them to sale",
      WorkProcessDesc:
        "List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.",
      WorkProcessLink: "/upload",
      WorkProcessCategory: "Gaming",
    },
  ];

  const handleChangePage = (categpry) => {
    router.push(`/explore-arts?collection=${categpry}`);
  };

  return (
    <section className="work-process-area pt-110 pb-100 bg-area-cream">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="section-title1 pos-rel mb-40">
              <h2 className="section-main-title1">Browse By Category</h2>
              <p>ellentesque mollis magna nec tortor mattis rIn quis purus.</p>
            </div>
          </div>
        </div>
        <div className="work-processes">
          {WorkProcessItem && (
            <div className="row wow fadeInUp" style={{ cursor: "pointer"}}>
              {WorkProcessItem.map((WorkProcessSection, num) => (
                <div
                  key={num}
                  className="col-lg-3 col-md-6 image-category"
                  onClick={() =>
                    handleChangePage(WorkProcessSection.WorkProcessCategory)
                  }
                >
                  <Image
                    src={WorkProcessSection.WorkProcessImage}
                    alt={WorkProcessSection.WorkProcessTitle}
                    width={300}
                    height={340}
                  />
                  <span className="type-category">
                    {WorkProcessSection.WorkProcessCategory}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: "10px" }} className="see-all-btn">
          <a href="/explore-arts">See all</a>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
