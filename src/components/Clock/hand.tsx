import { useHour, useMinute, useSecond } from "./store";
import { HandVariantProps, handVariant } from "./variants";

function ClockHand() {
  return (
    <>
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </>
  );
}

function HourHand() {
  const hour = useHour();
  const angle = hour * 30;

  return <Hand angle={angle} variant="hour" />;
}

function MinuteHand() {
  const minute = useMinute();
  const angle = minute * 6;

  return <Hand angle={angle} variant="minute" />;
}

function SecondHand() {
  const second = useSecond();
  const angle = second * 6;

  return <Hand angle={angle} variant="second" />;
}

type HandProps = {
  angle: number;
} & HandVariantProps;

function Hand({ angle, variant }: HandProps) {
  return (
    <div
      className="absolute bottom-0 left-1/2 right-1/2 top-0"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div className={handVariant({ variant })} />
    </div>
  );
}

export default ClockHand;
