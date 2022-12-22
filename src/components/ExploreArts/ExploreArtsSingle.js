/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch } from "react-redux";
import { specificProduct } from "../../redux/features/productSlice";
import Link from "next/link";

const ExploreArtsSingle = ({ product }) => {
  // distructure items
  const {
    id,
    wrapperClass,
    img,
    tag,
    featureClass,
    count,
    bid,
    share,
    report,
    profileImage,
    artistId,
    title,
    currentBid,
    price,
    activity,
  } = product;
  // dispatch
  const dispatch = useDispatch();
  // handleProductDetails
  const handleProductDetails = () => {
    dispatch(specificProduct(id));
  };

  return (
    <div className={wrapperClass}>
      <div className="art-item-single mb-30">
        <div className="art-item-wraper">
          <div className="art-item-inner">
            <div className="art-item-img pos-rel">
              {/* <a href="#" className="place-bid">
                {bid}
              </a> */}
              <Link href="/art-details">
                <a onClick={handleProductDetails}>
                  <img src={img} alt="art-img" />
                </a>
              </Link>
            </div>
            <div className="art-item-content pos-rel">
              <div className="art-3dots-menu">
                <div className="art-3dots-action">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-share-alt"></i>
                        {share}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-flag-alt"></i>
                        {report}
                      </a>
                    </li>
                  </ul>
                </div>
                <button className="art-3dots-icon">
                  <i className="fal fa-ellipsis-v"></i>
                </button>
              </div>
           
              <h6 className="art-name">
                <Link href="/art-details">
                  <a onClick={handleProductDetails}>{title}</a>
                </Link>
              </h6>

              <div className="art-meta-info">
                <div className="art-meta-item">
                  <div className="art-price">{price}</div>
                </div>

              </div>
              <div className="add-to-cart-btn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreArtsSingle;
