import React from "react";
import Link from "next/link";
import ThemeChanger from "../Common/ThemeChanger";
import Breadcrumbs from "../Common/PageTitle";

const SignUpMain = () => {
  return (
    <main>
      <ThemeChanger />

      <Breadcrumbs
        breadcrumbTitle="Sign up"
        breadcrumbSubTitle="Create Account"
      />

      <section
        className="sign-up-area pt-130 pb-90"
        // style={{ background: "url(assets/img/bg/sign-up-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp ">
                {/* <div className="sign-up-inner"> */}
                <div className="sign-up-content  d-flex flex-column align-items-center">
                  {/* <h4>Create Account</h4>
                    <p className="mb-35">
                      It's easy to create an account for Non-fungible tokens and
                      sale your any items independently online securely in the
                      world.
                    </p> */}
                  <form
                    className="sign-up-form w-full d-flex flex-column align-items-center"
                    action="#"
                  >
                    {/* <div className="row"> */}
                    <div className="col-md-6 w-full  ">
                      <div className="single-input-unit ">
                        <label htmlFor="f-name">First Name</label>
                        <input
                          type="text"
                          name="f-name"
                          id="f-name"
                          placeholder="Full Name"
                          className="border"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <label htmlFor="f-name">Email</label>
                        <input
                          type="email"
                          name="m-id"
                          id="m-id"
                          placeholder="Email address"
                          className="border"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <label htmlFor="f-name">Password</label>
                        <input
                          type="text"
                          name="u-name"
                          id="u-name"
                          placeholder="Password"
                          className="border"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <label htmlFor="f-name">Confirm Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Confirm Password"
                          className="border"
                        />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="sign-up-btn">
                      <button className="fill-btn">Create Account</button>
                      <div className="note">
                        Already have an account?{" "}
                        <Link href="/login">
                          <a className="text-btn">Sign In</a>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="sign-up-with-social">
                  <div
                    className="sign-up-with-social-bg"
                    style={{
                      background: "url(assets/img/bg/sign-up-social-bg.jpg)",
                    }}
                  ></div>
                  <div className="sign-up-with-social-content">
                    <div className="text-or">Or</div>
                    <div className="sign-up-media">
                      <a href="#" className="sign-up-media-single">
                        <img
                          src="assets/img/svg-icon/gmail.svg"
                          alt="media-img"
                        />{" "}
                        Signup with Email
                      </a>
                      <a href="#" className="sign-up-media-single">
                        <img
                          src="assets/img/svg-icon/facebook.svg"
                          alt="media-img"
                        />{" "}
                        Signup with Facebook
                      </a>
                      <a href="#" className="sign-up-media-single">
                        <img
                          src="assets/img/svg-icon/twitter.svg"
                          alt="media-img"
                        />{" "}
                        Signup with Twitter
                      </a>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
};

export default SignUpMain;
