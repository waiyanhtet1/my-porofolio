import React from "react";

const SliderCard = ({ cardNo }) => {
  return (
    <div className="min-w-[300px] max-w-[300px] h-32 bg-primary m-5 text-white border-2 border-whitesmoke rounded">
      Card Number {cardNo}
    </div>
  );
};

export default SliderCard;
