import React from "react";

import iconJson from "../../assets/Animation/arrow_right.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const LearnMoreIcon = React.memo(function LoadingSpiner({
  size = 60,
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

LearnMoreIcon.displayName = "ScrollIcon";

export default LearnMoreIcon;
