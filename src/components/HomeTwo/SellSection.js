/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const SellProductSection = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="row wow fadeInUp">
          {data.map((TopCreatorTwo, num) => (
            <div key={num} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="creator-single creator-single-short creator-single-filled mb-30">
                <div className="creator-wraper">
                  <div className="creator-inner">
                    <div className="creator-column">
                      <div className="profile-img is-center">
                        <Link href="/creators">
                          <a>
                            <img
                              src={TopCreatorTwo.profileImage}
                              alt="profile-img"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="pt-20">
                        <div className="artist-follow-btn hidden-text">
                          <h4 className="topic-text">{TopCreatorTwo.topic}</h4>
                          <p className="hidden-text">{TopCreatorTwo.desc}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellProductSection;
