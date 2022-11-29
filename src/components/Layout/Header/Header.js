import React, { useState, useEffect } from "react";
import Link from "next/link";
import useSticky from "../../../hooks/useSticky";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

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
                <div className="header-main-left">
                  {/* <div className="header-logo header1-logo">
                    <Link href="/">
                      <a className="logo-bb"> */}
                  {/* <img
                          src="assets/img/logo/oction-logo.png"
                          alt="logo-img"
                        /> */}
                  {/* </a>
                    </Link>
                    <Link href="/">
                      <a className="logo-bw">
                        <img
                          src="assets/img/logo/oction-logo-bw.png"
                          alt="logo-img"
                        />
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-8 col-8">
                <div className="header-main-right">
                  <div className="main-menu main-menu1 d-none d-lg-block ml-0">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="/index-2">
                            <a className="font-grey">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/explore-arts">
                            <a>Explore</a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/creators">
                            <a>Auctions</a>
                          </Link>
                        </li> */}
                        <li>
                          <Link href="/creators">
                            <a>Exhibitions</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/forum">
                            <a>Activities</a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/contact">
                            <a>Your cart</a>
                          </Link>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                  <form
                    action="#"
                    className="filter-search-input header-search d-none d-xl-inline-block mr-10"
                  >
                    <input type="text" placeholder="Search keyword" />
                    <button>
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                  <div className="header-btn ml-20  d-xxl-inline-block mr-10">
                    <Link href="/wallet-connect">
                      <a className="fill-btn">Connect Wallet</a>
                    </Link>
                  </div>
                  {token ? (
                    <div className="profile-item profile-item-header  d-none d-md-inline-block pos-rels">
                      <div
                        className={`profile-img pos-rel  ${
                          isActive11 ? "" : "show-element"
                        } `}
                        onClick={handleToggle11}
                      >
                        {/* <div className="profile-action "> */}
                        <div className="profile-action ">
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
                        />
                        <div className="profile-verification verified">
                          <i className="fas fa-check"></i>
                        </div>
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
                  {/* <div className="menu-bar d-xl-none ml-20">
                    <a
                      className="side-toggle"
                      href="#!"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <div className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                  </div> */}
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
