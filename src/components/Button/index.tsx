import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    children: ReactNode,
    className?: string
}
export default function Button({ asChild, children, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp className={clsx("py-3 px-4 bg-[#81D8F7] rounded font-semibold text-black text-base w-full transition-colors hover:bg-cyan-300", className)}>{children}</Comp>
    )
}