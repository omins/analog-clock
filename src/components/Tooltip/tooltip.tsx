import { cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";
import { TooltipProps, useTooltip } from "./use-tooltip";

function Tooltip(props: TooltipProps) {
  const { children, childrenProps, content, tooltipStyle, tooltipRef, isOpen } =
    useTooltip(props);

  return (
    <>
      {isValidElement(children) && cloneElement(children, childrenProps)}
      {createPortal(
        <div
          ref={tooltipRef}
          className="pointer-events-none absolute left-0 top-0 z-[100] w-max rounded-md bg-slate-400 p-2 text-white"
          style={{ ...tooltipStyle, opacity: isOpen ? 1 : 0 }}
        >
          {content}
        </div>,
        document.body,
      )}
    </>
  );
}

export default Tooltip;
