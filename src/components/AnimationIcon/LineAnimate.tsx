import React from "react";

import iconJson from "../../assets/Animation/line_animate.json";
import LottieAnimation from "../LottieAnimation";
import { rotate } from "maath/dist/declarations/src/buffer";

interface ILoadingSpiner {
  size?: number;
}

const LineAnimate = React.memo(function LoadingSpiner({
  size = 90,
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

LineAnimate.displayName = "LineAnimate";

export default LineAnimate;
