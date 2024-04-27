import React, { useRef, useState } from "react";
import SliderCard from "./SliderCard";

const Carousel = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleScroll = (element, step) => {
    // let scrollAmount = 0;
    // const distance = 300;
    element.scrollLeft += step;

    // const sliderTimer = setInterval(() => {
    //   element.scrollLeft += step;
    //   scrollAmount += Math.abs(step);
    //   if (scrollAmount >= distance) {
    //     clearInterval(sliderTimer);
    //   }
    //   if (element.scrollLeft === 0) {
    //     setArrowDisable(true);
    //   } else {
    //     setArrowDisable(false);
    //   }
    // }, 0);
  };

  return (
    <div className="relative overflow-hidden p-6">
      <button
        className="btn btn-primary absolute top-20"
        onClick={() => handleScroll(elementRef.current, -300)}
        disabled={arrowDisable}
      >
        &lt;
      </button>
      <button
        className="btn btn-primary absolute top-20 right-0"
        onClick={() => handleScroll(elementRef.current, 300)}
        disabled={arrowDisable}
      >
        &gt;
      </button>

      <div
        ref={elementRef}
        className="overflow-x-hidden flex scroll-smooth py-0 px-4"
      >
        <SliderCard cardNo="1" />
        <SliderCard cardNo="2" />
        <SliderCard cardNo="3" />
        <SliderCard cardNo="4" />
        <SliderCard cardNo="5" />
        <SliderCard cardNo="6" />
      </div>
    </div>
  );
};

export default Carousel;
