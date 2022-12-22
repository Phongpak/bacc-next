/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// props
// item, header

const ArtDetailTableCustom = ({ item, header }) => {
  return (
    <section className="about-info-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 order-2 order-lg-1 p-0">
            ArtDetailTableCustom
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDetailTableCustom;
