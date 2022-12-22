import Image from "next/image";
import React, { useState } from "react";

//component
import RegisterResult from './RegisterResult';

const ConfirmEmailMain = () => {
  const [resendEmailResult, setResendEmailResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResendEmail = () => {
    try {
        setLoading(true);
      setTimeout(() => {
        setResendEmailResult(true)
    }, 1500);
    } catch (e) {
        console.error(e)
    } finally {
      setLoading(false);
    }
  };

  // case loading
  if (loading) {
    return (
      <section className="sign-up-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="comfirm-email-wrapper">
                <div className="w-full d-flex flex-column align-items-start mb-40">
                  <h1 className="topic-confirm-email">Confirm Email Address</h1>
                </div>
                <Image
                  src={"/assets/img/logo/preloader.svg"}
                  alt="loading"
                  height={300}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // case success
  if (resendEmailResult) {
    return <RegisterResult />
  }

  return (
    <main>
      <section className="sign-up-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="comfirm-email-wrapper">
                <div className="w-full d-flex flex-column align-items-start mb-40">
                  <h1 className="topic-confirm-email">Confirm Email Address</h1>
                </div>

                <p className="content-des-resend-email">
                  Thank you for signing up! We sent a confirmation to
                  babyboba@gmail.com. Please check your email to complete the
                  registration. Need support?
                </p>
                <p className="content-des-resend-email">
                  Please contact us at{" "}
                  <span className="remark-email">contact@nowhere.com</span>
                </p>
                <button className="fill-btn mt-60" onClick={handleResendEmail}>
                  Resend Verification
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConfirmEmailMain;
