import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//icon
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const LoginMain = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <main>
      <section className="login-area pt-90 pb-90">
        <div className="w-full d-flex flex-column align-items-center mb-20">
          <h1 className="topic-login">Welcome to</h1>
          <Image
            src="/assets/img/logo/logo-bacc.svg"
            alt="logo"
            width={250}
            height={40}
          />{" "}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="login-wrapper pos-rel mb-40 wow fadeInUp ">
                <div className=" login-inner">
                  <div className="login-content">
                    <form className="login-form" action="#">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="single-input-unit">
                            <label htmlFor="m-id">Email</label>
                            <input
                              type="email"
                              name="m-id"
                              id="m-id"
                              placeholder="babyboba@gmail.com"
                              className="border"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 w-full">
                          <div className="single-input-unit">
                            <label htmlFor="password">Password</label>
                            <input
                              name="password"
                              id="password"
                              type={!isVisible ? "password" : "text"}
                              placeholder="********"
                              className="border no-margin"
                            />
                            <span className="icon-hide-button" onClick={toggle}>
                              {isVisible ? (
                                <EyeOutlined />
                              ) : (
                                <EyeInvisibleOutlined />
                              )}
                            </span>
                            <Link href="/register">
                              <a>
                                <p className="text-help">
                                  I forgot my password
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="login-btn">
                        <button className="fill-btn">Login</button>
                        <div className="note login-wrapper-note">
                          Don’t have an account?{" "}
                          <Link href="/register">
                            <a className="text-btn">Sign up</a>
                          </Link>
                        </div>
                      </div>
                    </form>
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

export default LoginMain;
