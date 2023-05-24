import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
    size?: "sm" | "md" | "lg" | "2xl",
    asChild?: boolean,
    children: ReactNode,
    className?: string
}
export default function Text({ size = "md", asChild, children, className }: TextProps) {
    const Comp = asChild ? Slot : "span";
    return (
        <Comp
            className={clsx(
                "text-gray-100 font-sans",
                {
                    "text-xs" : size === "sm",
                    "text-sm" : size === "md",
                    "text-lg": size === "lg",
                    "text-2xl": size === "2xl"
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}