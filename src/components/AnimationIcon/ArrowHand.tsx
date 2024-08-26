import React from "react";

import iconJson from "../../assets/Animation/arrow_hand.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const ArrowHand = React.memo(function LoadingSpiner({
  size = 200,
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
      <LottieAnimation animationData={iconJson} scroll={2} />
    </div>
  );
});

ArrowHand.displayName = "ArrowHand";

export default ArrowHand;
