import { useCallback, useEffect, useRef, useState } from "react";
import { Placement, VirtualElement } from "@floating-ui/react-dom";
import {
  Position,
  composeMouseEventHandler,
  computeTooltipPosition,
} from "./utils";

export type TooltipProps = {
  content: React.ReactNode;
  placement: Placement;
  children: React.ReactElement;
  followCursor?: boolean;
};

export function useTooltip({
  content,
  placement,
  followCursor,
  children,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLElement>(null);

  const handleEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleTooltipPositionChange = useCallback(
    async ({ x, y }: Position) => {
      if (!tooltipRef.current) return;

      const virtualElement: VirtualElement = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x,
            y,
            top: y,
            left: x,
            right: x,
            bottom: y,
          };
        },
      };

      const { tooltipStyle } = await computeTooltipPosition({
        elementReference: virtualElement,
        tooltipReference: tooltipRef.current,
        placement,
      });

      setTooltipStyle(tooltipStyle);
    },
    [placement],
  );

  const handleMouseMove = useCallback(
    ({ clientX: x, clientY: y }: React.MouseEvent<HTMLElement>) => {
      handleTooltipPositionChange({ x, y });
    },
    [handleTooltipPositionChange],
  );

  const initTooltipPosition = useCallback(async () => {
    if (!referenceRef.current || !tooltipRef.current) return;

    const { tooltipStyle } = await computeTooltipPosition({
      elementReference: referenceRef.current,
      tooltipReference: tooltipRef.current,
      placement,
    });

    setTooltipStyle(tooltipStyle);
  }, [placement]);

  const childrenProps = {
    ...children.props,
    ...(followCursor
      ? {
          onMouseMove: composeMouseEventHandler(
            handleMouseMove,
            children.props.onMouseMove,
          ),
        }
      : {}),
    onMouseEnter: composeMouseEventHandler(
      handleEnter,
      children.props.onMouseEnter,
    ),
    onMouseLeave: composeMouseEventHandler(
      handleLeave,
      children.props.onMouseLeave,
    ),
    ref: referenceRef,
  };

  useEffect(() => {
    initTooltipPosition();
  }, [initTooltipPosition]);

  return {
    content,
    children,
    childrenProps,
    isOpen,
    tooltipStyle,
    tooltipRef,
  };
}
