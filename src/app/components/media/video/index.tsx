"use client";

import { useState } from "react";
import Photo1 from "../../../assets/Group 1mediaphoto.svg";
import Photo2 from "../../../assets/Group 4mediavideo.svg";
import Photo3 from "../../../assets/Group 1mediaphoto.svg";
import Photo4 from "../../../assets/Group 4mediavideo.svg";

import Image from "next/image";
// import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export default function GalleryVideo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const photos = [Photo1, Photo2, Photo3, Photo4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === photos.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? photos.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <b className="text-base">Vídeos</b>
      <div>
        {/* <button onClick={prevSlide}>
          <ArrowBigLeftDash />
        </button> */}
        <div className="" style={{ overflowX: "auto" }}>
          <div
            className=""
            style={{
              display: "flex",
              gap: "15px",
              width: `${photos.length * 1}%`,
              transform: `translateX(-${
                currentSlide * (100 / photos.length)
              }%)`,
            }}
          >
            {photos.map((photo, index) => (
              <div key={index} style={{ flex: "0 0 auto" }}>
                <Image src={photo} alt="" width={230} />
              </div>
            ))}
          </div>
        </div>
        {/* <button onClick={nextSlide}>
          <ArrowBigRightDash />
        </button> */}
      </div>
    </div>
  );
}
