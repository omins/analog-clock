import { memo } from "react";
import { MarkVariantProps, markVariant } from "./variants";

function ClockFace() {
  return (
    <>
      <CenterMark />
      <MinuteMark />
    </>
  );
}

function CenterMark() {
  return (
    <div className="absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-2 w-2 -translate-x-2/4 -translate-y-2/4 rounded-full bg-black" />
  );
}

function MinuteMark() {
  return (
    <div>
      {Array.from({ length: 60 }).map((_, idx) => {
        return (
          <Mark
            key={`clock_mark_${idx}`}
            angle={idx * 6}
            variant={idx % 5 === 0 ? "five" : "normal"}
          />
        );
      })}
    </div>
  );
}

type MarkProps = {
  angle: number;
} & MarkVariantProps;

function Mark({ angle = 0, variant }: MarkProps) {
  return (
    <div
      className="absolute bottom-0 left-1/2 right-1/2 top-0"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div className={markVariant({ variant })} />
    </div>
  );
}

export default memo(ClockFace);
