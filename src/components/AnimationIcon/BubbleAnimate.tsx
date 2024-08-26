import React from "react";

import iconJson from "../../assets/Animation/bubble.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const BubbleAnimate = React.memo(function LoadingSpiner({
  size = 700,
}: ILoadingSpiner) {
  return (
    <div
      style={{
        // position: 'relative',
        // lineHeight: 0,
        width: size,
        // height: size,
        // backgroundColor: "white",
        // borderRadius: "99px",
      }}
    >
      <LottieAnimation animationData={iconJson} scroll={true} />
    </div>
  );
});

BubbleAnimate.displayName = "BubbleAnimate";

export default BubbleAnimate;
