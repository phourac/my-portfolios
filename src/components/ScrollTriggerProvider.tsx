import { MotionValue, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clamp from "lodash/clamp";
import React, {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";

const ScrollTriggerContext = createContext<MotionValue<number> | null>(null);

const useScrollTrigger = (): MotionValue<number> => {
  const context = useContext(ScrollTriggerContext);
  if (context === null) {
    throw new Error(
      "useScrollTrigger must be used within a ScrollTriggerProvider"
    );
  }
  return context;
};
const DEFAULT_OPTIONS = {
  end: "+=100%",
  pin: true,
  scrub: true,
  start: "top top",
};

export type ScrollTriggerProviderProps = {
  children: ReactNode;
  debug?: boolean;
  options?: Omit<
    gsap.plugins.ScrollTriggerInstanceVars,
    "markers" | "trigger" | "onUpdate"
  >;
};

const ScrollTriggerProvider: React.FC<ScrollTriggerProviderProps> = ({
  children,
  debug = false,
  options = {},
}) => {
  const refScrollTrigger = useRef<HTMLDivElement>(null);

  const refTimeline = useRef<gsap.core.Timeline>();

  const progress = useMotionValue(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            progress.set(clamp(instance.progress, 0, 1));
          },
        },
      });
    }

    return () => {
      // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
      refTimeline.current?.scrollTrigger?.kill();
      refTimeline.current?.kill();
      refTimeline.current?.clear();
    };
  }, [debug, options, progress]);

  return (
    <div ref={refScrollTrigger}>
      <ScrollTriggerContext.Provider value={progress}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  );
};

export { ScrollTriggerProvider, useScrollTrigger };
