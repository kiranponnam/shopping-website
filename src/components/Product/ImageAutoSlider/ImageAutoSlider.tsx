import React, { useEffect, useState } from "react";
import Image1 from "../../../assests/SliderImages/hm1.jpg";
import Image2 from "../../../assests/SliderImages/hm2.jpg";
import Image3 from "../../../assests/SliderImages/hm3.jpg";
import Image4 from "../../../assests/SliderImages/hm4.jpg";
import Image6 from "../../../assests/SliderImages/hm6.png";
import Image7 from "../../../assests/SliderImages/puma1.png";
import Image8 from "../../../assests/SliderImages/uspolo1.png";
import Image9 from "../../../assests/SliderImages/uspolo2.png";
import "../products.css";

const ImageAutoSlider = () => {
  const arrayImages = [
    Image9,
    Image1,
    Image7,
    Image2,
    Image3,
    Image4,
    Image6,
    Image8,
  ];
  const [currIndex, setCurrIndex] = useState<any>(0);
  const changeImgIndex = () => {
    let newCurrIndex = 0;
    let noOfImages = arrayImages.length;
    if (currIndex !== noOfImages - 1) {
      newCurrIndex = currIndex + 1;
    }
    setCurrIndex(newCurrIndex);
  };
  useEffect(() => {
    const id = setInterval(() => {
      changeImgIndex();
    }, 3000);
    return () => clearInterval(id);
  }, [currIndex]);
  const userScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return (
    <React.Fragment>
      <div className="image-main-container">
        <img
          src={arrayImages[currIndex]}
          alt="img"
          loading="lazy"
          className={
            userScreenWidth > 650
              ? "imageAutoSliderContainer"
              : "mobileImageAutoSlider"
          }
        />
        <div className="dots-container">
          {arrayImages.map((item: any, index: any) => {
            return (
              <span
                className={
                  arrayImages[index] == arrayImages[currIndex]
                    ? "dot-active"
                    : "dot"
                }
              ></span>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default ImageAutoSlider;
