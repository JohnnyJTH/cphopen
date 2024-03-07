import { tv } from "tailwind-variants";

export const typographyVariants = tv({
    variants: {
        type: {
            h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
            h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
            p: "leading-7 [&:not(:first-child)]:mt-6"
        }
    },
})