import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "../Magnetic";

interface IButton {
  children?: ReactNode;
  backgroundColor?: string;
  className?: string;
}

export default function Index({
  children,
  backgroundColor = "#455CE9",
  className = "",
  ...attributes
}: IButton) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    const id = setTimeout(() => {
      timeline.current?.play();
    }, 300);
    setTimeoutId(id);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}
