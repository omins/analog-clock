import ClockFace from "./face";
import ClockHand from "./hand";

function Clock() {
  return (
    <div className="relative block h-full w-full  transform rounded-full border border-black">
      <ClockFace />
      <ClockHand />
    </div>
  );
}

export default Clock;
