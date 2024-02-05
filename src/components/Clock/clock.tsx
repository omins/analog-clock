import { forwardRef, memo } from "react";
import ClockFace from "./face";
import ClockHand from "./hand";

type ClockProps = unknown & React.HTMLAttributes<HTMLDivElement>;

/**
 * To use clock, you need to wrap it with parent that width and height are defined.
 *
 * And make sure to wrap with `<ClockRoot>` at the top level of the app to provide time value.
 * @example
 * <ClockRoot>
 *  ... other components
 *  <div className="w-32 h-32">
 *    <Clock />
 *  </div>
 * </ClockRoot>
 */
const Clock = memo(
  forwardRef<HTMLDivElement, ClockProps>((props, ref) => {
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
  }),
);

Clock.displayName = "Clock";
export default Clock;
