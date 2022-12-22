import React, { useState } from "react";

//next
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterResult = () => {
  const router = useRouter();

  return (
    <main>
      <section className="sign-up-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="register-result-wrapper">
                <Image
                  src={"/assets/img/svg-icon/055-success.svg"}
                  alt="loading"
                  height={216}
                  width={216}
                />
                <h1 className="register-result-text mt-40">
                  Register Successfull
                </h1>

                <div className="is-center">
                  <button
                    className="fill-btn mt-40 btn-login-confirm"
                    onClick={() => router.push("/login")}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterResult;
