/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import useSticky from "../../../hooks/useSticky";
import MobileMenu from "./MobileMenu";

// next
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ HeaderStatic }) => {
  const [isActive11, setActive11] = useState("false");
  const token = true;
  const handleToggle11 = () => {
    setActive11(!isActive11);
  };

  // sticky nav
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  return (
    <>
      <header className={`header1 ${HeaderStatic ? HeaderStatic : ""}`}>
        <div
          id="header-sticky"
          className={
            sticky
              ? "sticky header-main header-main1 "
              : "header-main header-main1"
          }
        >
          <div className="container header-container bg-area-cream">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                <div className="header-main-left mt-3 mr-5" onClick={() => router.push("/")}>
                  
                      <Image
                        src="/assets/img/logo/logo-bacc.svg"
                        alt="logo"
                        width={250}
                        height={40}
                        className="logo-main"
                      />
                    
                 
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                <form
                  action="#"
                  className="filter-search-input header-search d-none d-xl-inline-block mt-2 "
                >
                  <input
                    type="text"
                    placeholder="Search keyword"
                    className="search-header"
                  />
                  <button>
                    <i className="fal fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="col-xl-8 col-lg-10 col-md-8 col-8">
                <div className="header-main-right">
                  <div className="main-menu main-menu1 d-none d-lg-block no-margin">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="/explore-arts">
                            <a>
                              <Image
                                src="/assets/img/sideabr/explore.svg"
                                alt="logo"
                                width={18}
                                height={18}
                              />
                              <span className="p-1">Explore</span>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/auctions">
                            <a>
                              <Image
                                src="/assets/img/sideabr/auctions.svg"
                                alt="logo"
                                width={18}
                                height={18}
                              />
                              <span className="p-1">Auctions</span>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/creators">
                            <a>
                              <Image
                                src="/assets/img/sideabr/Exhibitions.svg"
                                alt="logo"
                                width={18}
                                height={18}
                              />
                              <span className="p-1">Exhibitions</span>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/forum">
                            <a>
                              <Image
                                src="/assets/img/sideabr/Activity.svg"
                                alt="logo"
                                width={18}
                                height={18}
                              />
                              <span className="p-1">Activity</span>
                            </a>
                          </Link>
                        </li>

                        {/* <li>
                          <Link href="/forum">
                            <a>
                              <Image
                                src="/assets/img/sideabr/Cart.svg"
                                alt="logo"
                                width={18}
                                height={18}
                              />
                              <span className="p-1">Your cart</span>
                            </a>
                          </Link>
                        </li> */}

                        <li>
                          <Link href="/forum">
                            <a>
                              <Image
                                src="/assets/img/sideabr/Account.svg"
                                alt="logo"
                                width={18}
                                height={18}
                                className="header-icon"
                              />

                              <span className="p-1">Account</span>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/forum">
                            <a className="button-change-i18n">EN|TH</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* <div className="header-btn ml-20  d-xxl-inline-block mr-10">
                    <Link href="/wallet-connect">
                      <a className="fill-btn">Connect Wallet</a>
                    </Link>
                  </div> */}

                  {token ? (
                    <div className="profile-item profile-item-header  d-none d-md-inline-block pos-rels">
                      <div
                        className={`profile-img pos-rel  ${
                          isActive11 ? "" : "show-element"
                        } `}
                        onClick={handleToggle11}
                      >
                        {/* <div className="profile-action ">
                          <ul style={{ width: "auto" }}>
                            <li>
                              <Link href="/creator-profile-info-personal">
                                <a>
                                  <i className="fal fa-user"></i>Profile
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/upload">
                                <a>
                                  <i className="fal fa-sign-out"></i>Create NFT
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>
                                  <i className="fal fa-sign-out"></i>Sign out
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <img
                          src="assets/img/profile/profile4.jpg"
                          alt="profile-img"
                        /> */}
                        {/* <div className="profile-verification verified">
                          <i className="fas fa-check"></i>
                        </div> */}
                      </div>
                    </div>
                  ) : (
                    <div className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
                      <div
                        className={`profile-img pos-rel ${
                          isActive11 ? "" : "show-element"
                        }`}
                        onClick={handleToggle11}
                      >
                        <div className="profile-action">
                          <ul>
                            <li>
                              <Link href="/login">
                                <a>
                                  <i className="fal fa-user"></i>Login
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/register">
                                <a>
                                  <i className="fal fa-sign-out"></i>register
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <a>
                          <i className="fal fa-user"></i> Account
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </>
  );
};

export default Header;
