import {
  type Placement,
  VirtualElement,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/react-dom";

export type ComputeTooltipPositionProps = {
  elementReference: HTMLElement | VirtualElement | null;
  tooltipReference: HTMLElement | null;
  placement?: Placement;
};

export type ComputeTooltipPositionReturn = {
  tooltipStyle: React.CSSProperties;
};

export type Position = {
  x: number;
  y: number;
};

export function composeMouseEventHandler(
  handler: (event: React.MouseEvent<HTMLElement>) => void,
  eventHandler: (event: React.MouseEvent<HTMLElement>) => void | undefined,
) {
  return (event: React.MouseEvent<HTMLElement>) => {
    eventHandler?.(event);
    handler(event);
  };
}

export async function computeTooltipPosition({
  elementReference,
  tooltipReference,
  placement = "top-end",
}: ComputeTooltipPositionProps): Promise<ComputeTooltipPositionReturn> {
  if (!elementReference || !tooltipReference) {
    return {
      tooltipStyle: {},
    };
  }

  const { x, y } = await computePosition(elementReference, tooltipReference, {
    placement,
    middleware: [flip(), offset(3), shift({ padding: 3 })],
  });

  return {
    tooltipStyle: {
      transform: `translate(${roundByDPR(x)}px, ${roundByDPR(y)}px)`,
    },
  };
}

function roundByDPR(value: number) {
  const dpr = window.devicePixelRatio || 1;
  return Math.round(value * dpr) / dpr;
}
