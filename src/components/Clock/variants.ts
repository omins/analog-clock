import { type VariantProps, cva } from "class-variance-authority";

export const handVariant = cva("absolute -translate-x-2/4", {
  variants: {
    variant: {
      hour: "w-1 h-[30%] top-[20%] bg-black",
      minute: "w-0.5 h-2/5 top-[10%] bg-black",
      second: "w-0.5 h-[45%] top-[5%] bg-red-500",
    },
  },
});

export const markVariant = cva(
  "absolute top-0 z-10 w-[3px] -translate-x-2/4 bg-black",
  {
    variants: {
      variant: {
        five: "bottom-[97%] w-1",
        normal: "bottom-[99%] w-0.5",
      },
    },
  },
);

export type HandVariantProps = VariantProps<typeof handVariant>;
export type MarkVariantProps = VariantProps<typeof markVariant>;
