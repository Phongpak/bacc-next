import React from "react";

// component
import ContactFormSection from "./CreateFormSection";

const CreateNFTMain = () => {
  return (
    <main>
      <section className="contact-area pt-120 pb-90 ">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <ContactFormSection />
            </div>
            {/* <div className="col-lg-4">
              <ContactMap />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateNFTMain;
