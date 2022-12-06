import React, { useState } from "react";

// next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

//icon
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const SignUpMain = () => {

  const router = useRouter()
  const [isVisible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const handleCreateAccount = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/confirm-email")
    }, 1000);
    setLoading(false);
  };

  return (
    <main>
      <section className="sign-up-area pt-130 pb-90">
        <div className="w-full d-flex flex-column align-items-center mb-60">
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
              <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp ">
                <div className="sign-up-content  d-flex flex-column align-items-center">
                  <form
                    className="sign-up-form w-full d-flex flex-column align-items-center"
                    action="#"
                  >
                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <input
                          type="text"
                          name="f-name"
                          id="f-name"
                          placeholder="Full Name"
                          className="no-border-input"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <input
                          type="email"
                          name="m-id"
                          id="m-id"
                          placeholder="Email address"
                          className="no-border-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <input
                          type={!isVisible ? "password" : "text"}
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="no-border-input"
                        />
                        <span
                          className="icon-hide-button-signup"
                          onClick={toggle}
                        >
                          {isVisible ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-6 w-full">
                      <div className="single-input-unit">
                        <input
                          type={!isVisible ? "password" : "text"}
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          className="no-border-input"
                        />
                        <span
                          className="icon-hide-button-signup"
                          onClick={toggle}
                        >
                          {isVisible ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-6 w-full">
                      <div className="single-input-unit is-center-modal">
                        <button className="fill-btn" onClick={handleCreateAccount}>
                          Create Account
                        </button>
                        <div className="note is-logint-text">
                          Already have an account?{" "}
                          <Link href="/login">
                            <a className="text-btn text-login">Log In</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
};

export default SignUpMain;
