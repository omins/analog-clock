import { type VariantProps, cva } from "class-variance-authority";

export const handVariant = cva("absolute left-1/2 origin-bottom", {
  variants: {
    variant: {
      hour: "w-1 h-[30%] top-[20%] bg-black",
      minute: "w-0.5 h-2/5 top-[10%] bg-black",
      second: "w-0.5 h-[45%] top-[5%] bg-red-500",
    },
  },
});

export type HandVariantProps = VariantProps<typeof handVariant>;
