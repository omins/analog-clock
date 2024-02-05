import { forwardRef, memo } from "react";
import ClockFace from "./face";
import ClockHand from "./hand";

type ClockProps = unknown & React.HTMLAttributes<HTMLDivElement>;

const Clock = forwardRef<HTMLDivElement, ClockProps>(
  function Clock(props, ref) {
    return (
      <div
        className="relative z-[50] block h-full w-full rounded-full border border-black"
        ref={ref}
        {...props}
      >
        <ClockFace />
        <ClockHand />
      </div>
    );
  },
);

export default memo(Clock);
