import React from "react";

import iconJson from "../../assets/Animation/about_me.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const AboutMe = React.memo(function LoadingSpiner({
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

AboutMe.displayName = "ScrollIcon";

export default AboutMe;
