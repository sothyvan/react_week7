import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [index, setIndex] = useState(0);

  /* You will need to hanle the click on left and right button */
  /* You will need to manage the cases when we are on the last image or first image*/
  function next(){
    return setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  }

  function prev(){
    return setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  }

  const currentImage = images[index];

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prev}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={currentImage.src} alt={images[0].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={next}/>
    </div>
  );
};
