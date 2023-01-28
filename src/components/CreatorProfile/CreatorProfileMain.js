import React from "react";
import Link from "next/link";
import Pagination from "../Common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import ExploreArtsSingle from "../ExploreArts/ExploreArtsSingle";
// import ThemeChanger from "../Common/ThemeChanger";
import ExploreFilterLeft from "../ExploreArts/ExploreFilterLeft";
import ExploreArtsBar from "../ExploreArts/ExploreArtsBar";

const CreatorProfileMain = () => {
  const products = useSelector((state) => state.products.products);
  const creatorItem = useSelector((state) => state.creators.specificItem);
  //  dispatch
  const dispatch = useDispatch();

  return (
    <main>
      <section className="creator-details-area pt-0 pb-90">
        <div className="creator-cover-img creator-details-cover-img pos-rel wow fadeInUp">
          <img src={"/assets/img/banner/profile-banner.png"} alt="cover-img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-6 col-md-8">
              <div className="creator-about wow fadeInUp">
                <div className="d-flex justify-content-between">
                  <div className="profile-img pos-rel">
                    <img src={creatorItem.profileImage} alt="img" />
                  </div>

                  <div className="mt-10">
                    <img src={"/assets/img/profile/more.svg"} alt="img" />
                    <img
                      src={"/assets/img/profile/view.svg"}
                      className="ml-20"
                      alt="img"
                    />
                  </div>
                </div>

                <h4 className="artist-name pos-rel">
                  {creatorItem.name}
                  <span className="profile-verification verified">
                    <i className="fas fa-check"></i>
                  </span>
                </h4>
                <div className="artist-name-2">Narapon Jirattitigarnpong</div>
                <div className="artist-user-id mt-10 mb-1">
                  User ID #1234 <span className="ml-5">|</span> 
                  <img
                    src={"/assets/img/profile/calender.svg"}
                    className="mr-10 ml-10"
                    alt="img"
                  />
                  Joined July 2021
                </div>

                <p>
                  My name is Justin Baker & change my occupation after five
                  years of working in sales. I still like drawing.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 creator-info-tab ">
              <div className="wow fadeInUp">
                <div className="creator-info-tab-nav mb-30"></div>
                <div className="creator-info-tab-contents mb-30">
                  <ExploreFilterLeft />
                </div>
              </div>
            </div>

            <div className="col-xl-9">
              <div className="creator-info-tab wow fadeInUp">
                <div className="creator-info-tab-nav mb-30"></div>
                <div className="creator-info-tab-contents mb-30">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade active show"
                      id="tab-nav1"
                      role="tabpanel"
                      aria-labelledby="nav-created-tab"
                    >
                      <div className="created-items-wrapper">
                        <div className="row">
                          <ExploreArtsBar />
                          {products.slice(0, 12).map((product) => (
                            <ExploreArtsSingle
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </div>
                        {/* <div className="row">
                          <div className="col-12">
                            <Pagination />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <div
                      className="tab-pane fade"
                      id="tab-nav2"
                      role="tabpanel"
                      aria-labelledby="nav-collection-tab"
                    >
                      <div className="collected-items-wrapper">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art14.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art29.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art27.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>Flat landscapes</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          18
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art26.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art10.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art20.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>Creative Artwork</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          12
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art16.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art12.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art28.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>Digital Painting</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          17
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art31.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art32.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art33.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>Abstract Art</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          13
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art36.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art35.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art34.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>CDigital Product</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          21
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="category-collections-wrapper mb-30">
                              <div className="category-collections-inner">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art37.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="art-item-single">
                                          <div className="art-item-wraper">
                                            <div className="art-item-inner">
                                              <div className="art-item-img pos-rel">
                                                <Link href="/art-details">
                                                  <a>
                                                    <img
                                                      src="assets/img/art/art38.jpg"
                                                      alt="art-img"
                                                    />
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="art-item-single">
                                      <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                          <div className="art-item-img pos-rel">
                                            <Link href="/art-details">
                                              <a>
                                                <img
                                                  src="assets/img/art/art39.jpg"
                                                  alt="art-img"
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection-content pos-rel">
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <i className="fal fa-share-alt"></i>
                                            Share
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon">
                                      <i className="fal fa-ellipsis-v"></i>
                                    </button>
                                  </div>
                                  <div className="collection-category">
                                    <h4 className="category-name">
                                      <Link href="/explore-arts">
                                        <a>Colorful Design</a>
                                      </Link>
                                    </h4>
                                    <Link href="/explore-arts">
                                      <a className="resource-meta-item">
                                        <div className="resource-created">
                                          14
                                        </div>
                                        <div className="resource-meta-type">
                                          Items
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <Pagination />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-nav3"
                      role="tabpanel"
                      aria-labelledby="nav-featured-tab"
                    >
                      <div className="featured-items-wrapper">
                        <div className="row">
                          {products.slice(42, 45).map((product) => (
                            <ExploreArtsSingle
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <Pagination />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-nav4"
                      role="tabpanel"
                      aria-labelledby="nav-sold-tab"
                    >
                      <div className="bids-items-wrapper mb-30">
                        <div className="sold-items-wrapper">
                          <div className="row">
                            {products.slice(37, 43).map((product) => (
                              <ExploreArtsSingle
                                key={product.id}
                                product={product}
                              />
                            ))}
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <Pagination />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-nav5"
                      role="tabpanel"
                      aria-labelledby="nav-bid-tab"
                    >
                      <div className="bids-items-wrapper mb-30">
                        <div className="placed-bids-wrapper">
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile7.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>Juliyan Asans</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art25.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art12.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="accepted">Accepted</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile8.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>Naresh Hasmia</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art8.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art3.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art5.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art9.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="accepted">Accepted</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile15.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>David Laver</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art2.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art18.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art16.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="pending">Pending</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile7.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>Juliyan Asans</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art25.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="accepted">Accepted</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile8.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>Naresh Hasmia</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art14.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art17.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="accepted">Accepted</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-bid">
                            <div className="creator">
                              <div className="profile-img pos-rel">
                                <Link href="/creator-profile">
                                  <a>
                                    <img
                                      src="assets/img/profile/profile15.jpg"
                                      alt="profile-img"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator-name-id">
                                <h4 className="artist-name">
                                  <Link href="/creator-profile">
                                    <a>David Laver</a>
                                  </Link>
                                </h4>
                                <div className="artist-id">@asans</div>
                                <div className="bid-date-time">
                                  <div className="bid-date">06/20/2021</div>
                                  <div className="bid-time">9:58am</div>
                                </div>
                              </div>
                            </div>
                            <div className="bid-items-and-price">
                              <div className="bid-items">
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art18.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art15.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="art-item-single">
                                  <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                      <div className="art-item-img pos-rel">
                                        <Link href="/explore-arts">
                                          <a>
                                            <img
                                              src="assets/img/art/art4.jpg"
                                              alt="art-img"
                                            />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bid-pricing">
                                <div className="bid-status">
                                  Status :{" "}
                                  <span className="pending">Pending</span>
                                </div>
                                <div className="bid-price">3.58 ETH</div>
                                <div className="bid-price-dollar">
                                  352.342 USD
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row pt-30">
                          <div className="col-12">
                            <Pagination />
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreatorProfileMain;
