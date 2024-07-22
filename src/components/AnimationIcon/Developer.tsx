import React from "react";

import iconJson from "../../assets/Animation/Animation - 1721552245241.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const Developer = React.memo(function LoadingSpiner({
  size = 450,
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

Developer.displayName = "ScrollIcon";

export default Developer;
